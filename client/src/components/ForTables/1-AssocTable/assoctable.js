import React from 'react';
// import buttons
import TablePlayBtn from '../../ForButtons/TablePlayBtn/tableplaybtn';
import EditBtn from '../../ForButtons/EditBtn/editbtn';
import DeleteBtn from '../../ForButtons/DeleteBtn/deletebtn';


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      updateTable: false
    }
  }

  componentDidMount() {
    // bring in fetchTrack property from Table.js
    this.props.fetchTrack();

  }

  updateTableMethod = () => {
    this.setState({
      updateTable: true
    });
  }

  // openTrack = (auditionLink) => {
  //   window.open(auditionLink, '', 'width=320, height=75')
  // }
  
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
            <input className="submitcheckbox" type="checkbox" value="" aria-label="Checkbox for following text input"/>
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
            <input type="checkbox" value="" aria-label="Checkbox for following text input"/>
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
          {track.filepath
          ?  track.filepath.split("_")[1]
          : ""}
          </td>
          <td>
            <EditBtn track={track.auditionSongLink} mongoId={track._id} updateTableMethod={this.state.updateTable}/>
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
