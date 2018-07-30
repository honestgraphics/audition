import React, {
  Component,
  Fragment
} from 'react';
import Sound from 'react-sound'
import './playbtn.scss';

// create stateful component for modal play button
class PlayBtn extends Component {
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
        

      <button className="playBtn" onClick={() => {
        let playSong = this.state.playSong ? null : auditionSongLink
        this.setState({
          playSong 
        })
      }}> 
        <i className="fas fa-play text-success"></i>
      </button>
    </Fragment>
  }
}

  export default PlayBtn;