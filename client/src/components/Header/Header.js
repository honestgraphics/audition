import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import logo from '../../assets/images/auditionlogo.png';
import { NavLink } from 'react-router-dom'
import UploadBtn from '../UploadBtn/uploadbtn';
import './Header.scss'

const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <img className="nav_logo" src={logo} alt="Logo" />
      <Link to="/">
        <div className="navbar-brand navbar_app_name">
          Audition
        </div>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
            <NavLink  className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Audition</a> */}
            <NavLink  className="nav-link" to="/audition">Audition</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Manager Approval</a> */}
            <NavLink  className="nav-link" to="/Manager">Manager Approval</NavLink>
          </li>
          <li className="nav-item">
            {/* <a  className="nav-link" href="#">Database</a> */}
            <NavLink  className="nav-link" to="/Database">Database</NavLink>
          </li>
          <li>
          <UploadBtn />
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header