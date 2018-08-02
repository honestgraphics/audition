import React, {Fragment} from 'react';

import Header from '../components/ForPages/Header/header';
import About from '../components/ForPages/About/about';
import Footer from '../components/ForPages/Footer/footer';

class AboutPage extends React.Component {

    render(){
        return(
        <Fragment>
            <Header />
            <About />
            <Footer />
        </Fragment>
        )
    }
}


export default AboutPage;