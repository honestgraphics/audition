import React from 'react';
import { Link, NavLink } from 'react-router-dom'
// import logo
import logo from '../../../assets/images/auditionlogo.png';
// import buttons
import UploadBtn from '../../ForButtons/UploadBtn/uploadbtn';


const Header = ({ fetchTrack }) => (
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
          {/* <li className="nav-item">
            <NavLink  className="nav-link" to="/">Home</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink  className="nav-link" to="/audition">Audition</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/manager">Manager Approval</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/Database">View All</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/logout">Logout</NavLink>
          </li>
          <li>
          <UploadBtn fetchTrack={fetchTrack} />
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header;