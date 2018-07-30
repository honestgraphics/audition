import React, {
    // Component, 
    Fragment 
  } from 'react';
// import components
import SignUpBox from '../components/ForPassport/SignUpBox/signupbox';
  

class SignupPage extends React.Component {
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

export default SignupPage;