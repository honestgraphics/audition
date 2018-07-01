import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../assets/images/auditionlogo.png';


import './Header.scss'

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <img className="nav_logo" src={logo} alt="Logo" />
      <a className="navbar-brand navbar_app_name" href="#">Audition</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Audition</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Manager Approval</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Database</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header