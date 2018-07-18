import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import UploadBtn from '../UploadBtn/uploadbtn';

class EditBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      track: {
        id: '',
        songTitle: '',
        auditionLink: '',
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
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Audition & Enter Data Here</h5>
                    <button onClick={this.toggleModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                {!auditionLink && <div className="col upload-icon">
                  <UploadBtn updateAuditionLink={this.updateAuditionLink} />
                </div>}
                {auditionLink && <form>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="songTitle">Song Title</label>
                      <input onChange={this.updateTrack} type="text" className="form-control" id="songTitle" placeholder="My Song" value={songTitle} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="auditionLink">Audtion Link</label>
                      <input type="text" className="form-control" id="auditionLink" placeholder="http://" onChange={this.updateTrack} value={auditionLink} disabled />
                    </div>
                    <div className="col">
                      <label htmlFor="id">ID</label>
                      <input value={id} className="form-control" onChange={this.updateTrack} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                    <label htmlFor="category">Category</label>
                    <input className="form-control" id="category" value={category} onChange={this.updateTrack} />
                    </div>
                    <div className="col">
                      <label htmlFor="isrc">ISRC</label>
                      <input className="form-control" id="isrc" value={isrc} onChange={this.updateTrack} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="recordLabel">Record label</label>
                      <input className="form-control" id="recordLabel" value={recordLabel} onChange={this.updateTrack} />
                    </div>
                    <div className="col">
                      <label htmlFor="songArtist">Song artist</label>
                      <input className="form-control" id="songArtist" value={songArtist} onChange={this.updateTrack} />
                      </div>
                  </div>

                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="albumTitle">Album</label>
                      <input className="form-control" id="albumTitle" value={albumTitle} onChange={this.updateTrack} />
                    </div>
                    <div className="col">
                      <label htmlFor="filePath">File Path</label>
                      <input className="form-control" id="filePath" value={filePath} onChange={this.updateTrack} />
                      </div>
                  </div>

                </form>}
                </div>
                {auditionLink && <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={this.toggleModal} data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}
                    disabled={!auditionLink}>Save changes</button>
                </div>}
            </div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default EditBtn;