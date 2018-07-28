//used in table to edit a row of data
// import PropTypes from 'prop-types'

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import PlayBtn from '../PlayBtn/playbtn';
import axios from "axios";

// import API from "../../api/api";

class EditBtn extends Component {
  constructor(props) {
    super(props);
        
    this.state = {
      isOpen: false,
      track: {
        id: '',
        songTitle: '',
        auditionLink: 'http://fb.com',
        albumTitle: '',
        category: '',
        isrc: '',
        filePath: '',
        recordLabel: '',
        songArtist: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateTrack = this.updateTrack.bind(this);

  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log('got here');
  }

  handleChange = event => {
    // console.log(this.state)
    // alert('sup')
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
      
    });
    // console.log(value)
  };

  updateTrack = (event) => {
    event.preventDefault();
    console.log("inside update track")
    let id = this.state.id;
    let songTitle = this.state.songTitle;
    // let auditionLink = this.state.auditionLink;
    let albumTitle = this.state.albumTitle;
    let category = this.state.category;
    let isrc = this.state.isrc;
    let filePath = this.state.filePath;
    let recordLabel = this.state.recordLabel;
    let songArtist = this.state.songArtist;
    let formData = {id, songTitle, albumTitle, category, isrc, filePath, recordLabel, songArtist }
    console.log(typeof formData)
    console.log(formData)


    axios.post("/api/auditions/", formData).then(res => {
      console.log(res, "unique")});


    // this.setState(prevState => ({
    //   ...prevState,
    //   [event.target.id]: event.target.value
    // })
  // );
  }

  // for this function to do something 
  // we need a way to ensure that the _id of the track being 
  // updated is somehow passed in here,
  // otherwise the DB entry can't be reached
  
  // It will also be helpful to make sure that the fields are autofilled when 
  // the modal is opened. Once these things are assured 

  handleSave = () => {
    // API.updateAudition(_id, this.state.track).then((response)=>{
    //   console.log(response);
    // })
  }

  // updateAuditionLink = (link) => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     auditionLink: link
  //   }));
  // }

  openTrack = (auditionLink) => {
    window.open(auditionLink, '', 'width=320, height=75')
  }

  render() {
    const {
      id,
      songTitle,
      // auditionLink,
      albumTitle,
      category,
      isrc,
      filePath,
      recordLabel,
      songArtist
    } = this.state;
    return (
      <Fragment>
        <Link to="#" onClick={this.toggleModal}>
          <i className="fas fa-edit text-info"></i>
        </Link>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                    <button onClick={this.toggleModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
                  <div>
                    {/* Modal Row 1 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Audition Link Input (disabled bc filled in by upload button) */}
                        <label htmlFor="auditionLink">Audition Link</label>
                      </div>
                      <div className="input-group mb-3">
                        {/* <input type="text" className="form-control" value={auditionLink} placeholder={auditionLink}>{auditionLink}</input> */}
                        {/* disabled ^wasa above*/}
                        <div className="input-group-append">
                          {/* <button onClick={() => this.openTrack(this.props.track)} className="btn btn-success">
                            <i className="fas fa-play"></i>
                          </button> */}
                          <PlayBtn auditionSongLink={this.props.track}/>
                        </div>
                      </div>
                    </div>
                    {/* Modal Row 2 */}
                    <div className="form-row">
                      <div className="col">
                        {/* ID Input */}
                        <label htmlFor="id">ID</label>
                        <input value={this.state.id} name="id" className="form-control" onChange={this.handleChange} />
                      </div>
                      <div className="col">
                        {/*Song Title Input */}
                        <label htmlFor="songTitle">Song Title</label>
                        <input value={this.state.songTitle} name="songTitle"onChange={this.handleChange} type="text" className="form-control" id="songTitle" placeholder="My Song" />
                      </div>
                    </div>
                    {/* Modal Row 3 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Category Input */}
                        <label htmlFor="category">Category</label>
                        <input value={this.state.category} name="category" className="form-control" id="category"  onChange={this.handleChange} />
                      </div>
                      <div className="col">
                        {/* ISRC Input */}
                        <label htmlFor="isrc">ISRC</label>
                        <input value={this.state.isrc} name="isrc" className="form-control" id="isrc"  onChange={this.handleChange} />
                      </div>
                    </div>
                    {/* Modal Row 4 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Record Label Input */}
                        <label htmlFor="recordLabel">Record label</label>
                        <input value={this.state.recordLabel} name="recordLabel" className="form-control" id="recordLabel"  onChange={this.handleChange} />
                      </div>
                      <div className="col">
                        {/* Artist Name Input */}
                        <label htmlFor="songArtist">Artist Name</label>
                        <input value={this.state.songArtist} name="songArtist"className="form-control" id="songArtist" onChange={this.handleChange} />
                        </div>
                    </div>
                    {/* Modal Row 5 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Album Name Input */}
                        <label htmlFor="albumTitle">Album Name</label>
                        <input value={this.state.albumTitle} name="albumTitle"className="form-control" id="albumTitle" value={albumTitle} onChange={this.handleChange} />
                      </div>
                      <div className="col">
                        {/* File Path Input */}
                        <label htmlFor="filePath">File Path</label>
                        <input value={this.state.filePath} name="filePath" className="form-control" id="filePath" value={filePath} onChange={this.handleChange} />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.toggleModal} data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" data-dismiss="modal" onClick= {this.updateTrack} >Save changes</button>
                  {/* disabled={!auditionLink} was in button above */}
                
                </div>
            </div>
        </div>
        </Modal>
      </Fragment>
    );
  }
}

export default EditBtn;