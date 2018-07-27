import React, {
  Component,
  Fragment
} from 'react';
import api from "../../api/api"
// import PropTypes from 'prop-types'

import './tableplaybtn.scss';

// create stateful component for table play button
class TablePlayBtn extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: false,
  //   }
  // }

  //// METHODS
  // handle handleFileUpload function
  handleTrackPlay = (event) => {
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
    formData.append('file', files[0]);
    // make use of the aws-3 package to upload file using proxy from server
    api.uploadTrack(formData)
      .then(({ data }) => {
        console.log("LOL", data);
        return api.createAudition({
          //data.location is aws-s3's way of calling the url
          auditionSongLink: data.Location,
          filepath: data.Key
        })
        .then((response) => {
          console.log(response.data);
          this.setState(prevState => ({
            ...prevState,
            loading: false
          }));
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