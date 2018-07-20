//used in table to edit a row of data

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';

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
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log('got here');
  }



  updateTrack = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }));
  }

  updateAuditionLink = (link) => {
    this.setState(prevState => ({
      ...prevState,
      auditionLink: link
    }));
  }

  openTrack = (auditionLink) => {
    window.open(auditionLink, '', 'width=320, height=75')
  }

  render() {
    const {
      id,
      songTitle,
      auditionLink,
      albumTitle,
      category,
      isrc,
      filePath,
      recordLabel,
      songArtist
    } = this.state;
    return (
      <div className="App">
        <Link to="#" onClick={this.toggleModal}>
          Edit
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
                  <form>
                    {/* Modal Row 1 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Audition Link Input (disabled bc filled in by upload button) */}
                        <label htmlFor="auditionLink">Audition Link</label>
                      </div>
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" value={auditionLink} disabled>{auditionLink}</input>
                        <div className="input-group-append">
                          <button onClick={() => this.openTrack('https://auditionbucket.s3.amazonaws.com/tracks/4.wav')} className="btn btn-success">
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Modal Row 2 */}
                    <div className="form-row">
                      <div className="col">
                        {/* ID Input */}
                        <label htmlFor="id">ID</label>
                        <input value={id} className="form-control" onChange={this.updateTrack} />
                      </div>
                      <div className="col">
                        {/*Song Title Input */}
                        <label htmlFor="songTitle">Song Title</label>
                        <input onChange={this.updateTrack} type="text" className="form-control" id="songTitle" placeholder="My Song" value={songTitle} />
                      </div>
                    </div>
                    {/* Modal Row 3 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Category Input */}
                        <label htmlFor="category">Category</label>
                        <input className="form-control" id="category" value={category} onChange={this.updateTrack} />
                      </div>
                      <div className="col">
                        {/* ISRC Input */}
                        <label htmlFor="isrc">ISRC</label>
                        <input className="form-control" id="isrc" value={isrc} onChange={this.updateTrack} />
                      </div>
                    </div>
                    {/* Modal Row 4 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Record Label Input */}
                        <label htmlFor="recordLabel">Record label</label>
                        <input className="form-control" id="recordLabel" value={recordLabel} onChange={this.updateTrack} />
                      </div>
                      <div className="col">
                        {/* Artist Name Input */}
                        <label htmlFor="songArtist">Artist Name</label>
                        <input className="form-control" id="songArtist" value={songArtist} onChange={this.updateTrack} />
                        </div>
                    </div>
                    {/* Modal Row 5 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Album Name Input */}
                        <label htmlFor="albumTitle">Album Name</label>
                        <input className="form-control" id="albumTitle" value={albumTitle} onChange={this.updateTrack} />
                      </div>
                      <div className="col">
                        {/* File Path Input */}
                        <label htmlFor="filePath">File Path</label>
                        <input className="form-control" id="filePath" value={filePath} onChange={this.updateTrack} />
                        </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.toggleModal} data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}
                    disabled={!auditionLink}>Save changes</button>
                </div>
            </div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default EditBtn;