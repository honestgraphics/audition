import React from 'react';
import { Link } from 'react-router-dom';


const GoogleBtn = ()=> (
  <main>
    <Link className="google-btn btn-block" to='/auth/google'>
      Google+
    </Link>
  </main>
)

export default GoogleBtn;