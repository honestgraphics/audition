import React from 'react';
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import './Table.scss'
import EditBtn from '../EditBtn/editbtn';
import DeleteBtn from '../DeleteBtn/deletebtn';


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  componentDidMount() {
    this.props.fetchTrack();
  }

  openTrack = (auditionLink) => {
    window.open(auditionLink, '', 'width=320, height=75')
  }
  
 render() {
   const { tracks, fetchTrack } = this.props;
   return (<div className="container tableContainer">
   <div className="row">
   <div className="col-md-12">
            <div className="panel-body">
    <table className="table table-sm table-hover table-responsive">
      <thead className="thead-dark">
        <tr>
          <th className="responsive-visibility" scope="col">
            Click to Submit
          </th>
          <th className="responsive-invisibility" scope="col">
            Associate
          </th>
          <th className="responsive-invisibility" scope="col">
            Submission Date
          </th>
          <th className="responsive-invisibility" scope="col">
           Manager
          </th>
          <th className="responsive-invisibility" scope="col">
            Submission Date
          </th>
          <th className="responsive-visibility" scope="col">
            Approve Audition
          </th>
          <th className="responsive-visibility" scope="col">
            Audition
          </th>
          <th className="responsive-visibility" scope="col">
            ID
          </th>
          <th className="responsive-visibility" scope="col">
            Category
          </th>
          <th className="responsive-visibility" scope="col">
            ISRC
          </th>
          <th className="responsive-visibility" scope="col">
            Record Label
          </th>
          <th className="responsive-visibility" scope="col">
            Artist
          </th>
          <th className="responsive-visibility" scope="col">
            Song Title
          </th>
          <th className="responsive-visibility" scope="col">
            Album
          </th>
          <th className="responsive-visibility" scope="col">
            File Path
          </th>
          <th className="responsive-visibility" scope="col">
            Edit & Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {tracks.map((track, i) => {
        return (
        <tr key={i}>
          <td>
            autofill
          </td>
          <td>
            autofill
          </td>
          <td>
            autofill
          </td>
          <td>
            autofill
          </td>
          <td>
            checkbox
          </td>
          <td>
            checkbox
          </td>
          <td>
            <Link to="#" onClick={() => this.openTrack(track.auditionSongLink)}> 
              <i className="fas fa-play text-success"></i>
            </Link>
          </td>
          <td>
            autofill
          </td>
          <td>
            dropdown box
          </td>
          <td>
            form box
          </td>
          <td>
            form box
          </td>
          <td>
            form box
          </td>
          <td>
            form box
          </td>
          <td>
            form box
          </td>
          <td>
            form box
          </td>
          <td>
            <EditBtn /><DeleteBtn trackId={track['_id']} fetchTrack={fetchTrack} />
          </td>
        </tr>)})}
      </tbody>
    </table>
    </div>
    </div>
    </div>
  </div>)
 }
}
