import React, { Component, Fragment  } from 'react';
// Externals
import Header from '../components/ForPages/Header/header';
import Contact from '../components/ForPages/Contact/contact';
import Footer from '../components/ForPages/Footer/footer';



class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Contact />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;