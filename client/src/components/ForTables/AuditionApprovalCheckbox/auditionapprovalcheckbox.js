import React from 'react';
// import buttons
import axios from "axios";



export default class AuditionApprovalCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      track: this.props.track,
      updateTable: false
      // auditionApprovalStatus: {},
    }
     console.log(this.props.track._id, this.props.track.auditionApprovalStatus);
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

var approvalObject = {}
console.log("Approval checkbox track state", this.state.track);
this.props.fetchTrack();
 if(e.target.checked === false)
  approvalObject = {auditionApprovalStatus: e.target.checked, readyForManager: false}
 
 else if(this.state.track.selected === true)
   approvalObject = {auditionApprovalStatus: e.target.checked, readyForManager: true}
 
 else
   approvalObject = {auditionApprovalStatus: e.target.checked, readyForManager: false}

 console.log("Approval object from appove checkbox", approvalObject);
  axios.put("/api/auditions/"+_id, approvalObject)
   .then(res => {
    const track = Object.assign({}, this.state.track);
    track.auditionApprovalStatus = !track.auditionApprovalStatus;
    this.setState({track})
    this.props.fetchTrack()
  })
  .catch(err => {
    console.error(err)
  })


  }
  // handleChange={this.handleAuditionApproval}


  render() {
    // const {fetchTrack } = this.props;
    return (
            <input 
            className="auditionApprovalCheckbox"
            type="checkbox" 
            onChange={(e)=>{this.handleAuditionApproval(this.props.trackId, e)}} 
            //checked={this.props.isChecked}
            checked={this.state.track.auditionApprovalStatus} 
            // _id={this.state.track._id}
            />
            


            
            
              // <input
              // type="checkbox"
              // // name="approvalCheckbox" value={this.state.auditionApprovalStatus}
              // // onChange={this.handleChange}
              // // onClick={}
              // onChange={(e) => {this.handleAuditionApproval(this.state.track._id, e)}}
              // checked={!!this.state.track.auditionApprovalStatus}
              // // checked={this.settings[setting]}
              // //checked={this.handleAuditionApproval}
              // /> 
            
            

    )
  }
}