import React, {
  // Component, 
  Fragment 
} from 'react';
import axios from 'axios';
// import components
import Header from '../components/ForPages/Header/header';
import DatabaseTable from '../components/ForTables/3-DatabaseTable/databasetable';
import Footer from '../components/ForPages/Footer/footer';


class DatabasePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
    axios.get('/api/auditions')
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
        <Header />
        <DatabaseTable fetchTrack={this.fetchTrack} tracks={this.state.tracks}/>
        <Footer />
    </Fragment>
    );
  }
}

export default DatabasePage;