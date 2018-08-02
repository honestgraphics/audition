import React from 'react';
// import buttons
import TablePlayBtn from '../../ForButtons/TablePlayBtn/tableplaybtn';
import EditBtn from '../../ForButtons/EditBtn/editbtn';
import DeleteBtn from '../../ForButtons/DeleteBtn/deletebtn';
import AuditionApprovalCheckbox from '../AuditionApprovalCheckbox/auditionapprovalcheckbox'
import axios from "axios";

// class Checkbox extends React.Component{
//   render(){
//     return (
//       <div>
//       <input type="checkbox" onChange={(e)=>{this.props.handleChange(this.props._id, e)}} checked={this.props.isChecked}/>
//       </div>
//     )
//   }
// }

export default class RowComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      updateTable: false,
      selected: this.props.track.selected
      // auditionApprovalStatus: {},
    }
    // console.log(tracks);
    // this.handleAuditionApproval = this.handleAuditionApproval.bind(this)
  }

  //   // bring in fetchTrack property from AssocTable.js
  //   this.fetchTrack;
  //   //this.props.tracks();


  updateTableMethod = () => {
    this.setState({
      updateTable: true
    });
  }

  //song approval checkbox
  handleAuditionApproval = (_id, e) => {
   
    // let auditionApprovalStatus = this.state.auditionApprovalStatus;
    // auditionApprovalStatus(track._id) = e.target.checked;
    //let auditionApprovalStatus = e.target.checked
   // this.setState({auditionApprovalStatus}, () => {
      // console.log("you got checked", e.target.checked)
      // console.log("id", _id);
     
   // });
  //calling api endpoint on back    referencing a request body-object where the key values map to the data model .. here key:value    this returns a promise that you can call then on
   axios.put("/api/auditions/"+_id, {auditionApprovalStatus: e.target.checked})
   .then(res => {

    const track = Object.assign({}, this.state.track);
    track.auditionApprovalStatus = !track.auditionApprovalStatus;
    this.setState({track})
    // console.log(res, "unique")
    this.props.fetchTrack()
    //this.setState({updateTable: true})
    // location.window.reload();

  })
  .catch(err => {
    console.error(err)
  })
  }



  render() {
    const {fetchTrack } = this.props;
    return (
        <tr >
          {/* Submit Checkbox */}
            <td>
              {/* CUSTOMIZE PROPS or STATE THAT ARE PASSED THROUGH TO GET THIS TO WORK */}
              {/* <SubmitToManagerCheckBox track={this.state.track} fetchTrack={fetchTrack} updateTableMethod={this.state.updateTable} trackId={this.state.track['_id']} /> */}

               <input 
                type="checkbox" 
                onChange={(e)=>{
                  this.setState({selected: e.target.checked}, () => {
                    this.props.setSelected(this.state.selected, this.state.track._id)
                  })}} 
                checked={this.state.selected} 
                 />
            </td>

          {/* Associate Approval Name */}
            <td>
              {this.state.track.auditionedBy}
            </td>

          {/* Associate Date Submitted */}
            <td>
              {this.state.track.auditionDateSubmitted}
            </td>

          {/* Manager Approval Name */}
            <td>
              {this.state.track.managerApprovalBy}
            </td>

          {/* Manager Date Submitted */}
            <td>
              {this.state.track.managerDateSubmitted}
            </td>

          {/* Approve Audition Checkbox */}
            <td>
              <AuditionApprovalCheckbox track={this.state.track} fetchTrack={fetchTrack} updateTableMethod={this.state.updateTable} trackId={this.state.track['_id']} />
                          {/* SAVE THIS CODE: */}
                          {/* Will's code that worked before - do not delete right now */}
                              {/* <Checkbox  */}
                              {/* isChecked={this.state.track.auditionApprovalStatus}  */}
                              {/* handleChange={this.handleAuditionApproval}  */}
                              {/* _id={this.state.track._id}/> */}
                          {/* Previous input tag - do not delete right now */}
                              {/* <input
                              type="checkbox"
                              // name="approvalCheckbox" value={this.state.auditionApprovalStatus}
                              // onChange={this.handleChange}
                              // onClick={}
                              onChange={(e) => {this.handleAuditionApproval(this.state.track._id, e)}}
                              checked={!!this.state.track.auditionApprovalStatus}
                              // checked={this.settings[setting]}
                              //checked={this.handleAuditionApproval}
                              /> */}
            </td> 

          {/* Track Play Btn */}
            <td>
              <TablePlayBtn auditionSongLink={this.state.track.auditionSongLink}/>
            </td>

          {/* Business Song ID */}
            <td>
            {this.state.track.auditionId}
            </td>

          {/* Category */}
            <td>
              {/* We can make a song category dropdown component, for now I'll put in the type */}
              {this.state.track.songCategory}
            </td>

          {/* ISRC */}
            <td>
              {this.state.track.ISRC}
            </td>

          {/* Record Label */}
            <td>
              {this.state.track.recordLabel}
            </td>

          {/* Artist Name */}
            <td>
              {this.state.track.artist}
            </td>

          {/* Song Title */}
            <td>
              {this.state.track.songTitle}
            </td>

          {/* Album Name */}
            <td>
              {this.state.track.album}
            </td>

          {/* File Name */}
            <td>
            {this.state.track.filepath
            ?  this.state.track.filepath.split("_")[1]
            : ""}
            </td>

          {/* Edit & Delete Btn */}
            <td>
              <EditBtn track={this.state.track} updateTableMethod={this.state.updateTable}/>
              <DeleteBtn trackId={this.state.track['_id']} fetchTrack={fetchTrack} filepath={this.state.track.filepath} />
            </td>


        </tr>
          );
  }
}