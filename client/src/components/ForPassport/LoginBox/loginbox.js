import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import logo
import logo from '../../../assets/images/auditionlogo.png';
// import buttons
import GoogleBtn from '../GoogleBtn/googlebtn';


class LoginBox extends React.Component {
 constructor (){
   super();
  this.state = {
    username: '',
    password: ''
  }
 }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  processForm(event) {
    event.preventDefault();
    const username = this.state.user.username;
    const password = this.state.user.password;
    const formData = `username=${username}&password=${password}`;
    // axios route
    axios.post('/login', formData)
  }

  render () {
    return (
        <div className="container-fluid bg">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12"></div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <form className="form-container" action="/audition">
                  <img className="logo" src={logo} alt="Logo" />
                  <h3 className="brand">Audition</h3>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail2">Email</label>
                    <input type="email" 
                    onChange={this.handleInputChange}
                    name="username" value= {this.state.username} className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword2">Password</label>
                    <input         
                    onChange={this.handleInputChange}
                    name="password" value= {this.state.password}
                    type="text" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                  </div>
                  {/* <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                    <label className="form-check-label" htmlFor="dropdownCheck2">
                      Remember me
                    </label>
                  </div> */}
                  <button type="submit" value="Log In" className="btn btn-success btn-block">Sign in{this.state.processForm}</button>
                  <GoogleBtn />
                  <div>
                    Or <Link to="/signup">Sign up</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )
      } 
}

export default LoginBox