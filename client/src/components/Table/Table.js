import React from 'react';
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
import TablePlayBtn from '../TablePlayBtn/tableplaybtn';
import './Table.scss'
import EditBtn from '../EditBtn/editbtn';
import DeleteBtn from '../DeleteBtn/deletebtn';
// import api from "../../api/api"

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  componentDidMount() {
    // bring in fetchTrack property from Table.js
    this.props.fetchTrack();

  }

  openTrack = (auditionLink) => {
    window.open(auditionLink, '', 'width=320, height=75')
  }
  
 render() {
   const { tracks, fetchTrack } = this.props;
   console.log("Tracks from table being sent down:"+tracks);
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
          console.log('track', track);
          console.log("TRACK STUFF HERE *(**************************");
          console.log(track.filepath);
        return (
          
        <tr key={i}>
          <td>
            autofill
          </td>
          <td>
            {track.auditionedBy}
          </td>
          <td>
            {track.auditionDateSubmitted}
          </td>
          <td>
            {track.managerApprovalBy}
          </td>
          <td>
            {track.managerDateSubmitted}
          </td>
          <td>
            {/* Let's add a checkbox component later where we can pass a true/false value. 
             Until then we can drop a boolean in the table*/}
            {track.auditionApprovalStatus}
          </td>
          <td>
             <TablePlayBtn auditionSongLink={track.auditionSongLink}/>
              
          </td>
          <td>
           {track.auditionId}
          </td>
          <td>
            {/* We can make a song category dropdown component, for now I'll put in the type */}
            {track.songCategory}
          </td>
          <td>
            {track.ISRC}
          </td>
          <td>
            {track.recordLabel}
          </td>
          <td>
             {track.artist}
          </td>
          <td>
            {track.songTitle}
          </td>
          <td>
            {track.album}
          </td>
          <td>
            {track.filepath.split("_")[1]}
          </td>
          <td>
            <EditBtn track={track.auditionSongLink} mongoId={track._id}/>
            <DeleteBtn trackId={track['_id']} fetchTrack={fetchTrack} filepath={track.filepath} />
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
