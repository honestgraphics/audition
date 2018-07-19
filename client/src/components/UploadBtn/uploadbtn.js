import React, { Component, Fragment } from 'react'
import { uploadFile } from "aws-s3";
// import axios from 'axios';
// import PropTypes from 'prop-types'

import './uploadbtn.scss';

// Aws config object that contains the bucket info via .env file
const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  dirName: process.env.REACT_APP_DIR_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
};

// create stateful component for upload button
class UploadBtn extends Component {
  // handle handleFileUpload function
  handleFileUpload = (event) => {
    event.preventDefault();
    console.log(event.target.files);

    // make use of the aws-3 package to upload file
    uploadFile(event.target.files[0], config)
      .then((data) => {
        console.log(data, config);
        this.props.updateAuditionLink(data.location);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <Fragment>
        <div className="custom-file-upload">
          <label htmlFor="file-upload" className="custom-file-upload">
              <i className="fa fa-cloud-upload" />
              Upload Music
          </label>
          <input onChange={this.handleFileUpload} id="file-upload" type="file" />
        </div>
      </Fragment>
    )
  }
}

export default UploadBtn