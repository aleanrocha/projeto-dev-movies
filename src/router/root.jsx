import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer/'
import Header from '../components/Header'

const Root = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  )
}

export default Root
