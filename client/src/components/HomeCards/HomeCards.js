import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './HomeCards.scss'
import pic1 from '../../assets/images/unsplash1.jpg';
import pic2 from '../../assets/images/unsplash2.jpg';
import pic3 from '../../assets/images/unsplash3.jpg';
import pic4 from '../../assets/images/unsplash4.jpg';
import pic5 from '../../assets/images/unsplash5.jpg';

import {Fade} from 'react-slideshow-image';

const images = [
  pic1, pic2, pic3, pic4, pic5
]

const HomeCards = () => (
      <div className="homeCards">
        {/* <div className="cards"> */}
          <div className="card1">
            <div className="cardTitle">
              <h1>Audition!</h1>
              <p>Making uploading and reviewing of audio tracks for radio approval easier since 2018!</p>
              <p>Created by: Jeannie, Waleed Hamza, John Woltz, and Tony Hill.</p>
            </div>

          </div>
          <div className="card2" >
            <div className="cardTitle">
              <p>This is a place holder for a link to a Contact form.</p>
            </div>
          </div>

          <div className="card3" >
            <div className="cardTitle">
              <p>This is a place holder for an "About" page.</p>
            </div>
          </div>
          <div className="card4" >
            <div className="cardTitle">
              <p>Placeholder for Passport</p>
            </div>
          </div>
        {/* </div> */}
      </div>
)

export default HomeCards