
import React, { Component } from 'react';


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
          <h2 className="lead">Let's Audition your stattion !</h2>
        </div>
      </div>  

      <form method="POST" action="https://formspree.io/hill341539@gmail.com" >
        <input type="email" name="email" placeholder="Your email"/>
        <br/>
        <textarea name="message" placeholder="Your message"></textarea>
        <br/>
        <input type="submit" value="Send" />
      </form>
      </div>
    );
  }
}

export default Contact;