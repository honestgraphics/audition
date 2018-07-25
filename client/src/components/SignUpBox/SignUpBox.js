import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import logo from '../../assets/images/auditionlogo.png';
import GoogleBtn from "../Google+/googleBtn"
import axios from 'axios'
import './SignUpBox.css'

class SignUpBox extends React.Component {
 
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: ''
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

//make handle submit axios to login 
processForm(event) {
  event.preventDefault();

  const username = this.state.user.username;
  const password = this.state.user.password;
  const formData = `username=${username}&password=${password}`;

axios.post('/login', formData)

}
  render (){

    return (
<div className="container-fluid bg">
    <div className="row">
      <div className="col-md-4 col-sm-4 col-xs-12"></div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <form className="form-container">
          <img className="logo" src={logo} alt="Logo" />
          <h3 className="brand">Audition</h3>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">First Name</label>
            <input type="Name" 
            onChange={this.handleInputChange}
            name="firstname" value= {this.state.firstname}
            className="form-control" id="SignupFirstName" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Last Name</label>
            <input 
            onChange={this.handleInputChange}
            name="lastname" value= {this.state.lastname}
            type="text" className="form-control" id="SignupLasttName" placeholder="Last Name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">User Name</label>
            <input 
            onChange={this.handleInputChange}
                name="username" value= {this.state.username}
                type="text" className="form-control" id="SignupEmail" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input 
            onChange={this.handleInputChange}
                name="password" value= {this.state.password}
                type="text" className="form-control" id="SignupPassword" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Confirm Password</label>
            <input 
            onChange={this.handleInputChange}
                name="confirmpassword" value= {this.state.confirmpassword}
                type="text" className="form-control" id="SignupConfirmPassword" placeholder="Confirm Password" />
          </div>
         
          <button type="submit" className="btn btn-success btn-block">Sign up</button>
          <GoogleBtn />
        </form>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12">test</div>
    </div>
  </div>
)
  }
  }


export default SignUpBox