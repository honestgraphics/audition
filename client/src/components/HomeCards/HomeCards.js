import React from 'react';
import PropTypes from 'prop-types';

import homecard from '../../../assets/images/homecard.png';
import managerapprovalcard from '../../../assets/images/managerapprovalcard.png';
import databasecard from '../../../assets/images/databasecard.png';
import auditioncard from '../../../assets/images/auditioncard.png';

import './HomeCards.scss'

const HomeCards = () => (
      <div className="container">
        <div class="card" style="width: 18rem;">
          <img className="card-img-top homecard" src={homecard} alt="Home Card" />
        </div>
        <div class="card" style="width: 18rem;">
        <img className="card-img-top auditioncard" src={auditioncard} alt="Audition Card" />
        </div>
        <div class="card" style="width: 18rem;">
        <img className="card-img-top managerapprovalcard" src={managerapprovalcard} alt="Manager Approval Card" />
        </div>
        <div class="card" style="width: 18rem;">
        <img className="card-img-top databasecard" src={databasecard} alt="Database Card" />
        </div>
      </div>
)

export default HomeCard