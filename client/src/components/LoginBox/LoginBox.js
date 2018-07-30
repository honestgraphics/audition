import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/auditionlogo.png';
// import GoogleBtn from "../Google+/googleBtn";
import axios from 'axios'
import './LoginBox.scss'
import '../../api/api.js'
import {withRouter} from 'react-router'

class LoginBox extends React.Component {

 constructor (props){
   super(props);
  this.state = {
    username: '',
    password: ''
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

//  componentDidMount() {
//   axios.get('/api/users')
//     .then(res => {
//       const users = res.data;
//       this.setState({ users });
//     })
// }


  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    console.log(value)
  };

  handleSubmit(event) {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    let userFormData = {username,password};

    if(username === '' && password === ''){ 
      alert('invalid username or password');
      return;
    }

    // console.log(typeof userFormData);
    // console.log(userFormData);
  
    axios.post('/api/users/login', userFormData)
    .then((res) =>{
      window.isAuthenticated = true
      // console.log('this is the axios response: ' , res.data)
        this.props.history.push("/audition")
    }) 
    .catch(err=> {
      window.isAuthenticated = false
    })

  }



  render () {
return (
    <div className="container-fluid bg">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-12"></div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <form className="form-container">
              <img className="logo" src={logo} alt="Logo" />
              <h3 className="brand">Audition</h3>
              <div className="form-group">
                <label htmlFor="exampleDropdownFormEmail2">Email</label>
                <input type="email" 
                onChange={this.handleChange}
                name="username" value= {this.state.username} className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleDropdownFormPassword2">Password</label>
                <input         
                onChange={this.handleChange}
                name="password" value= {this.state.password}
                type="text" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
              </div>
              {/* <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                <label className="form-check-label" htmlFor="dropdownCheck2">
                  Remember me
                </label>
              </div> */}
              <button type="submit" value="Log In" className="btn btn-success btn-block" 
                  onClick={this.handleSubmit}>Sign in</button>
              {/* <GoogleBtn /> */}
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

export default withRouter(LoginBox)