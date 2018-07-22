import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/auditionlogo.png';


import './LoginBox.scss'

const SignUpBox = () => (
<div className="container-fluid bg">
    <div className="row">
      <div className="col-md-4 col-sm-4 col-xs-12"></div>
      <div className="col-md-4 col-sm-4 col-xs-12">
        <form className="form-container">
          <img className="logo" src={logo} alt="Logo" />
          <h3 className="brand">Audition</h3>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">First Name</label>
            <input type="Name" className="form-control" id="exampleDropdownFormEmail2" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Last Name</label>
            <input type="LastName" className="form-control" id="exampleDropdownFormEmail2" placeholder="Last Name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="exampleDropdownFormEmail2">Email address</label>
            <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleDropdownFormPassword2">Password</label>
            <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
          </div>
         
          <button type="submit" className="btn btn-success btn-block">Sign in</button>
          
        </form>
      </div>
      <div class="col-md-4 col-sm-4 col-xs-12"></div>
    </div>
  </div>
)

export default SignUpBox