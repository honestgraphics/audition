import React, { Component,   } from 'react';
// Externals
import Header from '../components/ForPages/Header/header';
import Contact from '../components/ForPages/Contact/contact';
import Footer from '../components/ForPages/Footer/footer';



class ContactPage extends Component {
  render() {
    return (
      <div classname='container'>
      <Header />
      <Contact />
      <Footer />
     </div>
    );
  }
}

export default ContactPage;