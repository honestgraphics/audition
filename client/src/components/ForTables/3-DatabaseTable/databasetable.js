import React from 'react';
//import buttons
// import TablePlayBtn from '../../ForButtons/TablePlayBtn/tableplaybtn';
// import EditBtn from '../../ForButtons/EditBtn/editbtn';
// import DeleteBtn from '../../ForButtons/DeleteBtn/deletebtn';
import RowComponent from '../../ForTables/RowComponent/rowcomponent';
// import axios from "axios";


export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      updateTable: false
      // auditionApprovalStatus: {},
    }
    // console.log(tracks);
    // this.handleAuditionApproval = this.handleAuditionApproval.bind(this)
  }
  
  

  // updateTableMethod = () => {
  //   this.setState({
  //     updateTable: true
  //   });
  // }

  // handleChange = (_id, event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;
  //   this.setState({
  //     [name]: value

  //   });
    // // let auditionApprovalStatus = this.state.auditionApprovalStatus;
    // // auditionApprovalStatus(track._id) = e.target.checked;
    // this.setState({auditionApprovalStatus});

    // // console.log("you got checked", e.target.checked)
    // // console.log("id", _id);
    // axios.put("/api/auditions/"+_id, e.target.checked).then(res => {
    //   // console.log(res, "unique")
    //   this.setState({updateTable: true})
    // });
  // }

//   //song approval checkbox
//   handleAuditionApproval = (_id, e) => {
//     // let auditionApprovalStatus = this.state.auditionApprovalStatus;
//     // auditionApprovalStatus(track._id) = e.target.checked;
//     //let auditionApprovalStatus = e.target.checked
//    // this.setState({auditionApprovalStatus}, () => {
//       // console.log("you got checked", e.target.checked)
//       // console.log("id", _id);
     
//    // });
// debugger
//   //calling api endpoint on back    referencing a request body-object where the key values map to the data model .. here key:value    this returns a promise that you can call then on
//    axios.put("/api/auditions/"+_id, {auditionApprovalStatus: e.target.checked}).then(res => {
//     // console.log(res, "unique")
//     this.setState({updateTable: true})
//     location.window.reload();
//   })
//   .catch(err => {
//     console.error(err)
//   })
//   }

  // openTrack = (auditionLink) => {
  //   window.open(auditionLink, '', 'width=320, height=75')
  // }
  
 render() {
   const tracks = this.props.tracks;
   console.log('assoctable render', tracks)
  //  const { 
  //    tracks, 
  //   //  fetchTrack 
  //   } = this.props;
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
        {tracks.map((
          track,
          i
        ) => {
          // console.log('track', track);
          // console.log("TRACK STUFF HERE *(**************************");
           console.log(track.filepath);
        return (
          <
            RowComponent 
            track={track}
            key={track._id}  
            {...this.props}
            //fetchTrack={this.props.fetchTrack} 
            // tracks={this.state.tracks} 
          />
        )})}
      </tbody>
    </table>
    </div>
    </div>
    </div>
  </div>)
 }
}