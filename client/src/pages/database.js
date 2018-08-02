import React, {
  // Component, 
  Fragment 
} from 'react';
import axios from 'axios';
// import components
import Header from '../components/ForPages/Header/header';
import DatabaseTable from '../components/ForTables/3-DatabaseTable/databasetable';
import Footer from '../components/ForPages/Footer/footer';
import api from "../api/api";

class DatabasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
    api.getDatabaseTracks()
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
        <Header  fetchTrack={this.addTrack} />
        <DatabaseTable  tracks={this.state.tracks} 
                    fetchTrack={this.fetchTrack}
        />
        <Footer />
    </Fragment>
    );
  }
}

export default DatabasePage;