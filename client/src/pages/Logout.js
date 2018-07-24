import React, {
    // Component, 
    // Fragment 
  } from 'react'
  
import LogoutBox from '../components/LogoutBox/LogoutBox';
  
  class Logout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      return (
          <LogoutBox />
      );
    }
  }
  
  export default Logout;