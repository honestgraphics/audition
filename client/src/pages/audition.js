import React, { 
  // Component, 
  Fragment 
} from 'react';
import api from "../api/api";
// import components
import Header from '../components/ForPages/Header/header';
import AssocTable from '../components/ForTables/1-AssocTable/assoctable';
import SubmitBtn from '../components/ForButtons/SubmitBtn/submitbtn';
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
      console.log("this is the tracks for assoctable", this.state.tracks)
      console.log("this is the res for fetchtrack for assoctable", res)
      this.setState(prevState => ({
        ...prevState,
        tracks: data
      }));
      
    })
    .catch(err => {
      debugger
    })
  }
  findTrack = () => {
    console.log(this.state)
  }
  componentDidMount = () => {
    this.fetchTrack();
  }

  render() {
    
    console.log("rendered")
    console.log(this.state.tracks)
    return (
      <Fragment>
        {/* <h1 style={sectionStyle}>AUDITION PAGE</h1> */}
        <Header fetchTrack={this.findTrack} />
        <AssocTable tracks={this.state.tracks} fetchTrack={this.fetchTrack} />
        <SubmitBtn />
        <Footer />
    </Fragment>
    );
  }
}

export default AuditionPage;