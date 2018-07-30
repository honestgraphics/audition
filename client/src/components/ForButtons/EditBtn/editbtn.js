/*used in all tables to edit a row of data*/
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types'
import axios from "axios";
// Import Modal
import Modal from '../../ForModals/1-AssocModal/assocmodal';
// Import Buttons
import ModalPlayBtn from '../../ForButtons/ModalPlayBtn/modalplaybtn';


class EditBtn extends Component {
  constructor(props) {
    super(props);
        
    this.state = {
      isOpen: false,
      track: {
        _id: '',
        songTitle: '',
        auditionId: '',
        auditionLink: 'http://fb.com',
        albumTitle: '',
        songCategory: '',
        ISRC: '',
        filepath: '',
        recordLabel: '',
        artist: '',
        updateTable: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateTrack = this.updateTrack.bind(this);
  }

  /* METHODS */
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    // console.log('got here');
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

  /* LIFECYCLE EVENTS */
  componentDidMount = () => {
    this.setState({_id: this.props.mongoId });
  }
  
  updateTrack = (event) => {
    event.preventDefault();
    // console.log("inside update track")
    // variables in react recast to model names in Audition.js
    let _id = this.state._id;
    let auditionId = this.state.auditionId;
    let songTitle = this.state.songTitle;
    // let auditionLink = this.state.auditionLink;
    let album = this.state.album;
    let songCategory = this.state.songCategory;
    let ISRC = this.state.ISRC;
    let filepath = this.state.filepath;
    let recordLabel = this.state.recordLabel;
    let artist = this.state.artist;
    let formData = {_id, songTitle, auditionId, album, songCategory, ISRC, filepath, recordLabel, artist }
    // console.log(typeof formData)
    // console.log(formData)

    // THIS WILL NOT WORK WITHOUT A WAY TO PUT THE ID FROM THE DB ENTRY 
    // ITSELF INTO THIS. 
    axios.put("/api/auditions/"+_id, formData).then(res => {
      // console.log(res, "unique")
      this.setState({updateTable: true})
      window.location.reload();


    
      // this.context.router.history.push('/audition')
  });

    // this.toggleModal;
    // this.props.updateTableMethod
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
    // console.log("EDIT BUTTON PROPS ***********************");
    // console.log(this.props);
    // componentDidMount then setState may clear up error about not mutating state directly here?
    // this.setState({_id: this.props.mongoId });
    // const {
    //   _id, //commented out due to fact that react gave warning stating that it was not used
    //   auditionId, //commented out due to fact that react gave warning stating that it was not used
    //   songTitle, //commented out due to fact that react gave warning stating that it was not used
    //   auditionLink,
    //   album, //commented out due to fact that react gave warning stating that it was not used
    //   songCategory, //commented out due to fact that react gave warning stating that it was not used
    //   ISRC, //commented out due to fact that react gave warning stating that it was not used
    //   filepath,
    //   recordLabel, //commented out due to fact that react gave warning stating that it was not used
    //   artist //commented out due to fact that react gave warning stating that it was not used
    // } = this.state;
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
                      
                      {/*<div className="input-group mb-3">*/}
                        {/* <input type="text" className="form-control" value={auditionLink} placeholder={auditionLink}>{auditionLink}</input> */}
                        {/* disabled ^wasa above*/}
                        {/*<div className="input-group-append">*/}
                          {/* <button onClick={() => this.openTrack(this.props.track)} className="btn btn-success">
                            <i className="fas fa-play"></i>
                          </button> */}
                          <ModalPlayBtn auditionSongLink={this.props.track}/>
                        {/* </div> */}
                      
                    </div>
                    {/* Modal Row 2 */}
                    <div className="form-row">
                      <div className="col">
                        {/* ID Input */}
                        <label htmlFor="id">ID</label>
                        <input value={this.state.auditionId} name="auditionId" className="form-control" onChange={this.handleChange} />
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
                        <label htmlFor="songCategory">Category</label>
                        <input value={this.state.songCategory} name="songCategory" className="form-control" id="category"  onChange={this.handleChange} />
                      </div>
                      <div className="col">
                        {/* ISRC Input */}
                        <label htmlFor="ISRC">ISRC</label>
                        <input value={this.state.ISRC} name="ISRC" className="form-control" id="isrc"  onChange={this.handleChange} />
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
                        <label htmlFor="artist">Artist Name</label>
                        <input value={this.state.artist} name="artist"className="form-control" id="songArtist" onChange={this.handleChange} />
                        </div>
                    </div>
                    {/* Modal Row 5 */}
                    <div className="form-row">
                      <div className="col">
                        {/* Album Name Input */}
                        <label htmlFor="album">Album Name</label>
                        <input value={this.state.album} name="album"className="form-control" id="albumTitle"  onChange={this.handleChange} />
                      </div>
                      {/* <div className="col">
                        <label htmlFor="filepath">File Path</label>
                        <input value={this.state.filepath} name="filepath" className="form-control" id="filepath"  onChange={this.handleChange} />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  {/* <button type="button" className="btn btn-secondary" onClick={this.toggleModal} data-dismiss="modal">Close</button> */}
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
EditBtn.contextTypes = {
  router: propTypes.object.isRequired
}

export default EditBtn;