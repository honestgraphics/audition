const client = require("./aws_s3_client.js");

//Upload a file to S3
var params = {
  localFile: "some/local/file",
 
  s3Params: {
    Bucket: "auditionbucket",
    Key: "some/remote/file",
    // other options supported by putObject, except Body and ContentLength.
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
  },
};

var uploader = client.uploadFile(params);
uploader.on('error', function(err) {
  console.error("unable to upload:", err.stack);
});

uploader.on('progress', function() {
  console.log("progress", uploader.progressMd5Amount,
  uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', function() {
  console.log("done uploading");
});