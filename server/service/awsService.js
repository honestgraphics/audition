const AWS = require("aws-sdk");
const Crypto = require("crypto-js");
require("dotenv").config();
const uuidv4 = require('uuid/v4')

// Aws config object that contains the bucket info via .env file
const config = {
  Bucket: process.env.REACT_APP_BUCKET_NAME,
  dirName: process.env.REACT_APP_DIR_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
};

const dateISOString = new Date(+new Date + 864e5).toISOString();
const xAmzDate =  dateISOString.split('-').join('').split(':').join('').split('.').join('')
const dateYMD = dateISOString.split('T')[0].split('-').join('')

class Signature {
  static getSignature(config, date, policyBase64) {
      const getSignatureKey = (key, dateStamp, regionName) => {
          const kDate = Crypto.HmacSHA256(dateStamp, "AWS4" + key);
          const kRegion = Crypto.HmacSHA256(regionName, kDate);
          const kService = Crypto.HmacSHA256("s3", kRegion);
          const kSigning = Crypto.HmacSHA256("aws4_request", kService);
          return kSigning;
      };
      const signature = policyEncoded => {
          return Crypto.HmacSHA256(
              policyEncoded,
              getSignatureKey(config.secretAccessKey, date, config.region)
          ).toString(Crypto.enc.Hex);
      };
      return signature(policyBase64);
  }
}

const uploadToS3 = (file) => {
  const s3Bucket = new AWS.S3(config);
  const params = {
    Bucket: config.Bucket,
    Key: `${uuidv4()}_${file.name}`,
    Body: file.data,
    ACL: 'public-read'
  }

  return new Promise((resolve, reject) => {
    s3Bucket.upload(params, function(error, data) {
      if (error) {
        // console.log('Failed to upload file to S3 bucket', error);
        reject(error);
      } else {
        // console.log('Upload was successful.');
        resolve(data);
      }
    });
  });
}

const deleteFromS3 = (key) => {
  return new Promise((resolve, reject) => {
    const s3Bucket = new AWS.S3(config);
  const params = {
    Bucket: config.Bucket,
    Key:key,
  }
  
  s3Bucket.deleteObject(params, function(err, data) {
       if (err) {
         console.log(err, err.stack); // an error occurred
         reject(err)
       }
       else    {
          // console.log(data);           // successful response
          resolve(data)
        }
         /*
       data = {
       }
       */
     });
  })
}

/*
const deleteFile = async (fileName, config) => {
  const fd = new FormData();
  const url = `https://${config.Bucket}.s3-${
      config.region
      }.amazonaws.com/${
      config.dirName ? config.dirName + "/" : ""
      }${fileName}`;
  fd.append("Date", xAmzDate);
  fd.append("X-Amz-Date", xAmzDate);
  fd.append(
      "Authorization",
      Signature.getSignature(config, dateYMD, Policy.getPolicy(config))
  );
  fd.append("Content-Type", "text/plain");

  const params = {
      method: "delete",
      headers: {
          fd
      }
  };

  const deleteResult = await fetch(url, params);
  if (!deleteResult.ok) return Promise.reject(deleteResult);
  return Promise.resolve({
      ok: deleteResult.ok,
      status: deleteResult.status,
      message: "File Deleted",
      fileName: fileName
  });
}
*/

module.exports = {
  upload: function(req, res) {
    uploadToS3(req.files.file)
    .then((data) => {
      return res.json(data)
    })
    .catch((error) => { console.log(error); });
  }, 
  findById: function(req, res) {
    // console.log("findById is here")
  },
  update: function(req, res) {
    // console.log("update is here")
  },
  remove: function(req, res) {
    // console.log("delete is here")
  },
  delete: deleteFromS3
  //api for delete functionality for aws
  // delete: function(req, res) {
  //   deleteFile(req.body, config)
  //   .then((data) => {
  //     res.json(data)
  //   })
  // }
};