
import React, { Component, Fragment } from 'react';
// import npm package to play audio
import Sound from 'react-sound';


// create stateful component for modal play button
class ModalPlayBtn extends Component {
 constructor(props) {
   super(props);

   this.state = {
     playSong: null
   }
 }
  render() {
    let {auditionSongLink} = this.props

   return <Fragment>
    <Sound url={auditionSongLink}
        playStatus={
          this.state.playSong &&
          this.state.playSong === auditionSongLink
          ? Sound.status.PLAYING :
          Sound.status.PAUSED
        }
        loop={true} autoLoad={true}/>
        

      <button class="btn btn-primary btn-lg btn-block" onClick={() => {
        let playSong = this.state.playSong ? null : auditionSongLink
        this.setState({
          playSong 
        })
      }}> 
        <i className="fas fa-play-white text-success"></i>
      </button>
    </Fragment>
  }
}

  export default ModalPlayBtn;