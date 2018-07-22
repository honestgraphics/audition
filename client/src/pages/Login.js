import React, {
    // Component, 
    Fragment 
  } from 'react'
  
import LoginBox from '../components/LoginBox/LoginBox';
  
  class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      }
    }
    render() {
      return (
          <LoginBox />
      );
    }
  }
  
  export default Login;