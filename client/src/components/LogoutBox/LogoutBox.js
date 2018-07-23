import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/auditionlogo.png';
import './LogoutBox.scss'

const LogoutBox = () => (
  <div className="container-fluid bg">
  <div className="row">
    <div className="col-md-4 col-sm-4 col-xs-12"></div>
    <div className="col-md-4 col-sm-4 col-xs-12">
      <form className="form-container">
        <img className="logo" src={logo} alt="Logo" />
        <h3 className="brand">Audition</h3>
        
        <div>
        <p className="brand">You Signed Out</p>
        </div>
        <Link to="/login"><button type="submit" className="btn btn-success btn-block">Sign Back In</button></Link>
        
      </form>
    </div>
    <div class="col-md-4 col-sm-4 col-xs-12"></div>
  </div>
</div>
)

export default LogoutBox