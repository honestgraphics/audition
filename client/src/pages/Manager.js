import React, {
  // Component, 
  Fragment 
} from 'react'

import axios from 'axios';
import Header from '../components/Header/Header'
import Table from '../components/Table/Table'
import Footer from '../components/Footer/Footer'


class Manager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
    console.log('hhhh')
    axios.get('http://localhost:3001/api/auditions')
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
        {/* <h1>MANAGER PAGE</h1> */}
        <Header />

        <Table fetchTrack={this.fetchTrack} tracks={this.state.tracks}/>

        <Footer />
    </Fragment>
    );
  }
}

export default Manager;