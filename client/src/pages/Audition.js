import React, {
  // Component, 
  Fragment 
} from 'react'

// import axios from 'axios';
import Header from '../components/Header/Header'
import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'
import api from "../api/api"






class Audition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
    console.log('hhhh')
    api.getAuditions()
    .then((res) => {
      const { data } = res;
      this.setState(prevState => ({
        ...prevState,
        tracks: data
      }));
    })
  }
  render() {
    return (
      <Fragment>
        {/* <h1 style={sectionStyle}>AUDITION PAGE</h1> */}
        <Header fetchTrack={this.fetchTrack} />
        <Table fetchTrack={this.fetchTrack} tracks={this.state.tracks} />
        <Footer />
    </Fragment>
    );
  }
}

export default Audition;