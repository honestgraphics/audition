import React, { Component, Fragment } from 'react'
import { uploadFile } from "aws-s3";
import axios from 'axios';
import Spinner from '../../assets/images/Spinner.gif';
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

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

//// METHODS
  // handle handleFileUpload function
  handleFileUpload = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      loading: true,
    }));
    // make use of the aws-3 package to upload file
    uploadFile(event.target.files[0], config)
      .then((data) => {
        this.setState(prevState => ({
          ...prevState,
          loading: false
        }));
        return axios.post('http://localhost:3001/api/auditions', {
          auditionSongLink: data.location
         });
      }
      )
      .then(() => {
        this.props.fetchTrack();
      })
      .catch((error) => {
        this.setState(prevState => ({
          ...prevState,
          loading: false
        }))
        console.log("error", error)
      });
  }


  render() {
    const { loading } = this.state
    return (
      <div className="App">
        <Fragment>
          {/* Ternary stating if loading is true, then load loading gif, else  */}
          {loading ? <img src={Spinner} alt="spinner" height="100" width="100"/> : <div className="custom-file-upload">
            <label htmlFor="file-upload" className="custom-file-upload">
                <i className="fa fa-cloud-upload" />
                Upload
            </label>
            <input onChange={this.handleFileUpload} id="file-upload" type="file" />
          </div>}
        </Fragment>
      </div>
    )
  }
}

export default UploadBtn