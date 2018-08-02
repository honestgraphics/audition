import React from 'react';
import { Link, NavLink } from 'react-router-dom'
// import logo
import logo from '../../../assets/images/auditionlogo.png';
// import buttons
import UploadBtn from '../../ForButtons/UploadBtn/uploadbtn';


// $('.navbar-lower').affix({
//   offset: {top: 50}
// });

const Header = ({ fetchTrack }) => (
  <div>


    <nav className="navbar 
    navbar-expand-sm
    // navbar-default 
    navbar-fixed-top">
        
        <div className="row">
        <div className="col-12-lg">
          <ul className="navbar-nav ml-auto topNav">
            
            <li className="nav-item top">
              <UploadBtn className="uploadBtn" fetchTrack={fetchTrack} />
            </li>

            <li className="nav-item top">
              <NavLink  className="nav-link" to="/logout">
                <i className="fas fa-sign-out-alt text-danger logoutBtn"></i>
              </NavLink>
            </li>

          </ul>
          </div>
        </div>
      
    </nav>




{/* second nav */}
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-lower">
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
            <NavLink  className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/audition">Audition</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/manager">Manage</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink  className="nav-link" to="/Database">Database</NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink  className="nav-link" to="/contact">Contact</NavLink>
          </li>
          
          {/* <li className="nav-item">
            <NavLink  className="nav-link" to="/logout">Logout</NavLink>
          </li>
          <li>
          <UploadBtn fetchTrack={fetchTrack} />
          </li> */}
        </ul>
      </div>
      
    </nav>
  </div>
)

export default Header;