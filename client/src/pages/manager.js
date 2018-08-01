import React, {
  // Component, 
  Fragment 
} from 'react';
import axios from 'axios';
// import components
import Header from '../components/ForPages/Header/header';
import ManagerTable from '../components/ForTables/2-ManagerTable/managertable';
import SubmitBtn from '../components/ForButtons/SubmitBtn/submitbtn';
import Footer from '../components/ForPages/Footer/footer';


class ManagerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
    // console.log('hhhh')
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
        <Header />
        <ManagerTable fetchTrack={this.fetchTrack} tracks={this.state.tracks}/>
        <SubmitBtn />
        <Footer />
      </Fragment>
    );
  }
}

export default ManagerPage;