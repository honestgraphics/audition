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
import api from "../api/api"


class ManagerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    }
  }
  fetchTrack = () => {
    // console.log('hhhh')
    api.getAuditions()
    .then((res) => {
      const { data } = res;
      console.log("DB data for manager" +data);
      this.setState(prevState => ({
        ...prevState,
        tracks: data
      }));
    })
  }

  componentDidMount(){
    this.fetchTrack();
    console.log("Hello world");
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