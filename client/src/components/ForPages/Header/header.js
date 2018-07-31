import React from 'react';
import { Link, NavLink } from 'react-router-dom'
// import logo
import logo from '../../../assets/images/auditionlogo.png';
// import buttons
import UploadBtn from '../../ForButtons/UploadBtn/uploadbtn';
import axios from 'axios';

class Header extends React.Component {
  constructor (props){
    super(props);
    this.state = {
         search: ''
         
   };
     this.handleChange = this.handleChange.bind(this);
    //  this.handleSubmit = this.handleSubmit.bind(this);
     this.onKeyPress = this.onKeyPress.bind(this)
  }

  fetchTrack = () => {
    let fetchTrack = this.state.fetchTrack
  }

  handleChange = event => {
      const value = event.target.value;
      const name = event.target.name;
      this.setState({
        [name]: value

      });
      console.log(value)
    };

    onKeyPress(event){
      event.preventDefault();
      let search = this.state.search;
      if(event.keyCode == 13){
        console.log('enter press here! ')
     
      axios.get('/api/auditions/search', search).then((res) =>{
        console.log('this is the axios response: ' , res.data)
        })
      }
    }

    // handleSubmit(event){
    //   event.preventDefault();
    //   let search = this.state.search;

    //   axios.post('/api/auditions/search', search).then((res) =>{

    //     console.log('this is the axios response: ' , res.data)
        
    //     })
    //   };

    
    
 

  render(){
    return (
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
            <NavLink  className="nav-link" to="/Manager">Manager Approval</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/Database">View All</NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/logout">Logout</NavLink>
          </li>
          <li>
            <input type="text" name='search' value={this.state.search} 
            onChange={this.handleChange} onClick={this.onKeyPress}
            className="form-control" id="exampleDropdownFormPassword1" placeholder="Search Track"/>
          </li>
          <li>
          <UploadBtn fetchTrack={this.fetchTrack} />
          </li>
        </ul>
      </div>
    </nav>
  </div>

    )
  }
  
}
export default Header;