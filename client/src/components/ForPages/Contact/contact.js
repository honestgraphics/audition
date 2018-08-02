
import React
// , { Component } 
from 'react';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="wrapper">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h2 className="display-4">CONTACT US</h2>
            <h2 className="lead">Let's Audition your station !</h2>
          </div>
        </div>  

        <div className="formDiv">
          <form method="POST" action="https://formspree.io/hill341539@gmail.com" >
            <input className="formParts" type="email" name="email" placeholder="Your email"/>
            <textarea className="formParts" name="message" placeholder="Your message"></textarea>
            <input className="formParts" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;