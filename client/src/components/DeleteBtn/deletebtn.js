// // used in table to delete a row of data

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
// import S3Client, { uploadFile, deleteFile } from '../../../src'




class DeleteBtn extends Component {
  // constructor(props) {
  //   super(props);
  // }

  deleteTrack = () => {
    const { trackId, fetchTrack } = this.props;
    Axios.delete(`http://localhost:3001/api/auditions/${trackId}`)
    .then((response) => {
      fetchTrack();
      console.log(response, 'track deleted successfully');
    })
    .catch((error) => console.log(error));
  }

  render() {
    return (<Link to="#" onClick={this.deleteTrack}> <i className="fas fa-trash text-danger"></i></Link>)
  }
}

export default DeleteBtn;