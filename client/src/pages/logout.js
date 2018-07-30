import React, {
    // Component, 
    // Fragment 
  } from 'react';
// import LogoutBox from '../components/ForPassport/LogoutBox/logoutbox';
import axios from 'axios'

class LogoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {
      axios.get('/api/users/logout')
      .then((res) =>{
      //  window.isAuthenticated = false
        // console.log('this is the axios response: ' , res.data)
          this.props.history.push("/login")
      }) 
      .catch(err=> {
        //window.isAuthenticated = false
      })
  }

  render() {
    return null
    // return (
    //     <LogoutBox />
    // );
  }
}

export default LogoutPage;