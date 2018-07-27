import React, {
    // Component, 
    Fragment 
  } from 'react'
  
import SignUpBox from '../components/SignUpBox/SignUpBox';
  
  class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      return (
          <SignUpBox />
      );
    }
  }
  
  export default Signup;