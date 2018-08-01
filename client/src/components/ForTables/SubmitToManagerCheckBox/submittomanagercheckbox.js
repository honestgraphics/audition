import React from 'react';
// import buttons
import axios from "axios";



export default class SubmitToManagerCheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      updateTable: false
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
          <td>
            <input 
            type="checkbox" 
            onChange={(e)=>{this.handleAuditionApproval(this.props.trackId, e)}} 
            checked={this.props.ischecked}
            ischecked={this.state.track.auditionApprovalStatus} 
            />
          </td>
    );
  }
}