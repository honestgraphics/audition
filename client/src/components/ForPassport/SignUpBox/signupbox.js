import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../../api/api.js'
import logo from '../../../assets/images/auditionlogo.png';


class SignUpBox extends React.Component {
 constructor (props){
   super(props);
   this.state = {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        confirmpassword: ''
  };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 }
 
  handleChange = event => {
  // handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
      
    });
    // console.log(value)
  };

//make handle submit axios to login 
handleSubmit(event) {
  event.preventDefault();
  // alert('I get here process form sign up box ')
  let username = this.state.username;
  let firstname = this.state.firstname;
  let lastname = this.state.lastname;
  let password = this.state.password;
  let confirmpassword = this.state.confirmpassword
  let userFormData = {username,password,firstname,lastname,confirmpassword};

  // console.log(typeof userFormData);
  // console.log(userFormData);

  axios.post('/api/users/signup', userFormData).then((res) =>{

    // console.log('this is the axios response: ' , res.data)
    if(res.data === 'User already exist'){
      alert('User already exist')
      window.isAuthenticated = false;
      this.props.history.push('/login')
    }else{
      alert('registration successfull')
      window.isAuthenticated = true;
      this.props.history.push("/audition")
    }
  }); 
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
            onChange={this.handleChange}
            name="firstname" value= {this.state.firstname}
            className="form-control" id="SignupFirstName" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Last Name</label>
            <input 
            onChange={this.handleChange}
            name="lastname" value= {this.state.lastname}
            type="text" className="form-control" id="SignupLasttName" placeholder="Last Name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Email</label>
            <input 
            onChange={this.handleChange}
                name="username" value= {this.state.username}
                type="text" className="form-control" id="SignupEmail" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input 
            onChange={this.handleChange}
                name="password" value= {this.state.password}
                type="password" className="form-control" id="SignupPassword" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Confirm Password</label>
            <input 
            onChange={this.handleChange}
                name="confirmpassword" value= {this.state.confirmpassword}
                type="passport" className="form-control" id="SignupConfirmPassword" placeholder="Confirm Password" />
          </div>
         
          <button type="submit"  className="btn btn-success btn-block" 
          onClick={this.handleSubmit}>Sign up</button>
          {/* <GoogleBtn /> */}
        </form>
      </div>
      <div className="col-md-4 col-sm-4 col-xs-12"></div>
    </div>
  </div>
)
  }
  }


export default SignUpBox