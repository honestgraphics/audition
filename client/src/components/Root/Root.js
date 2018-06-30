import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import LoginBox from '../LoginBox/LoginBox'
import Table from '../Table/Table'


const Root = () => (
  <div>
    <Header />
    <LoginBox />
    <Table />
    <Footer />
  </div>
)

export default Root