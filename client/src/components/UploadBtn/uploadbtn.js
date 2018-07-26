import React, {
  Component,
  Fragment
} from 'react'
import axios from 'axios';
import Spinner from '../../assets/images/Spinner.gif';
import api from "../../api/api"



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
    const {
      nativeEvent : {
        target: {
          files
        }
      }
    } = event;
    this.setState(prevState => ({
      ...prevState,
      loading: true,
    }));

    const formData = new FormData();
    formData.append('file', files[0])
    // make use of the aws-3 package to upload file using proxy from server
    api.uploadTrack(formData)
      .then((data) => {
        this.setState(prevState => ({
          ...prevState,
          loading: false
        }));
        console.log(data.location)
        return axios.post('/api/auditions', {
          //data.location is aws-s3's way of calling the url
          auditionSongLink: data.location
        })
        .then(() => {
          this.props.fetchTrack();
        })
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
    const {
      loading
    } = this.state
    return ( <div className = "App">
      <Fragment> { /* Ternary stating if loading is true, then load loading gif, else  */ } {
        loading ? < img src = {
          Spinner
        }
        alt = "spinner"
        height = "70"
        width = "70" / >
          : <div className = "custom-file-upload">
            <label htmlFor = "file-upload"
          className = "custom-file-upload" >
            <i className = "fa fa-cloud-upload" />
            Upload </label>
            <input
              onChange = {this.handleFileUpload}
              id = "file-upload"
              type = "file"
              name="track" />
          </div>} </Fragment> </div>
      )
    }
  }

  export default UploadBtn