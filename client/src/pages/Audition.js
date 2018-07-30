import React, { 
  // Component, 
  Fragment 
} from 'react';
import api from "../api/api";
// import components
import Header from '../components/ForPages/Header/header';
import AssocTable from '../components/ForTables/1-AssocTable/assoctable';
import Footer from '../components/ForPages/Footer/footer';


class AuditionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
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
        <AssocTable fetchTrack={this.fetchTrack} tracks={this.state.tracks} />
        <Footer />
    </Fragment>
    );
  }
}

export default AuditionPage;