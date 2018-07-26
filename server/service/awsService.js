const AWS = require("aws-sdk");
require("dotenv").config();

// Aws config object that contains the bucket info via .env file
const config = {
  Bucket: process.env.REACT_APP_BUCKET_NAME,
  dirName: process.env.REACT_APP_DIR_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
};

const uploadToS3 = (file) => {
  const s3Bucket = new AWS.S3(config);
  const params = {
    Bucket: config.Bucket,
    Key: file.name,
    Body: file.data
  }

  return new Promise((resolve, reject) => {
    s3Bucket.upload(params, function(error, data) {
      if (error) {
        console.log('Failed to upload file to S3 bucket', error);
        reject(error);
      } else {
        console.log('Upload was successful.');
        resolve(data);
      }
    });
  });
}

module.exports = {
  upload: function(req, res) {
    uploadToS3(req.files.file)
    .then((data) => {
      return res.json(data)
    })
  }, 
  findById: function(req, res) {
    console.log("findById is here")
  },
  update: function(req, res) {
    console.log("update is here")
  },
  remove: function(req, res) {
    console.log("delete is here")
  }
  //api for delete functionality for aws
  // delete: function(req, res) {
  //   deleteFile(req.body, config)
  //   .then((data) => {
  //     res.json(data)
  //   })
  // }
};