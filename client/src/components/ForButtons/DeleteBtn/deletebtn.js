/* used in all tables to delete a row of data */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class DeleteBtn extends Component {
  deleteTrack = () => {
    const { trackId, fetchTrack, filepath } = this.props;
    Axios.delete(`/api/auditions/${trackId}?filepath=${filepath}`)
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