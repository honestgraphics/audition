import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import homecard from '../../assets/images/homecard.png';
import managerapprovalcard from '../../assets/images/managerapprovalcard.png';
import databasecard from '../../assets/images/databasecard.png';
import auditioncard from '../../assets/images/auditioncard.png';

import './HomeCards.scss'

const HomeCards = () => (
      <div className="container">
        <div className="card" style={{width: '18rem'}}>
        <Link to="/"><img className="card-img-top homecard" src={homecard} alt="Home Card" /></Link>
        </div>
        <div className="card" style={{width: '18rem'}}>
        <Link to="/Audition"><img className="card-img-top auditioncard" src={auditioncard} alt="Audition Card" /></Link>
        </div>
        <div className="card" style={{width: '18rem'}}>
        <Link to="/Manager"><img className="card-img-top managerapprovalcard" src={managerapprovalcard} alt="Manager Approval Card" /></Link>
        </div>
        <div className="card" style={{width: '18rem'}}>
        <Link to="/Database"><img className="card-img-top databasecard" src={databasecard} alt="Database Card" /></Link>
        </div>
      </div>
)

export default HomeCards