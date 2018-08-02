import React, {
  // Component, 
  Fragment
} from 'react';
import api from "../api/api";
// import components
import Header from '../components/ForPages/Header/header';
import AssocTable from '../components/ForTables/1-AssocTable/assoctable';
// import SubmitBtn from '../components/ForButtons/SubmitBtn/submitbtn';
import Footer from '../components/ForPages/Footer/footer';
import axios from 'axios'

class AuditionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }

    this.addTrack = this.addTrack.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  fetchTrack = () => {
    api.getAuditions()
      .then((res) => {
        const { data } = res;
        // console.log("this is the tracks for assoctable", this.state)
        // console.log("this is the res for fetchtrack for assoctable", res)


        this.setState({ tracks: data }, () => {
          // console.log(this.state)
        });

      })
      .catch(err => {
        // console.log("this is a fetch track error", err)
      })
  }
  addTrack = (track) => {
    let tracks = this.state.tracks
    let data = [...tracks, track]
    this.setState({ tracks: data })
  }

  setSelected = (val, id) => {
    console.log('setSelected', val, id)

    let tracks = [...this.state.tracks]
    let track = tracks.find(t => t._id === id)
    track.selected = val
    var updateObject = {}

    if (track.selected === true && track.auditionApprovalStatus === true)
      this.updateObject = {
        auditionApprovalStatus: track.auditionApprovalStatus,
        selected: track.selected,
        readyForManager: true
      };

    else if (track.readyForManager === true && track.selected === false)
      this.updateObject = { readyForManager: false, selected: false }

    else
      this.updateObject = { readyForManager: false, selected: track.selected }

    // if at the time of selection both selected & auditionApprovalStatus are true, then readyfor
    console.log("Track before being updated", track, this.updateObject);
    api.updateAudition(track._id, this.updateObject).then(res => {
      console.log("ready for submission response", res);
    })




    this.setState({ tracks }, () => {
      console.log('setselected setstate', this.state.tracks)
    })
  }


  getSelected() {
    let selected = this.state.tracks.filter(t => t.selected)
    if (!selected) {
      return []
    }

    return selected
  }
  onSubmit = e => {
    let selected = this.getSelected()
    console.log(selected)

    let selectedIds = selected.map(i => i._id)

    axios.post('/api/auditions/submit', { selectedIds })
      .then(val => {
        console.log(val)
      })
      .catch(err => {
        console.error(err)
      })
  }
  componentDidMount = () => {
    this.fetchTrack();
  }

  render() {
    //console.log("rendered")
    console.log('audition render', this.state.tracks)
    return (
      <Fragment>
        {/* <h1 style={sectionStyle}>AUDITION PAGE</h1> */}
        <Header fetchTrack={this.addTrack} />
        <AssocTable tracks={this.state.tracks}
          fetchTrack={this.fetchTrack}
          setSelected={this.setSelected} />
        {/* <SubmitBtn /> */}
        <button type="button"
          className="btn btn-primary submitBtn"
          onClick={this.onSubmit}
          disabled={this.getSelected().length <= 0}>Submit</button>
        <Footer />
      </Fragment>
    );
  }
}

export default AuditionPage;