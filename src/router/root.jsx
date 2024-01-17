import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

const Root = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}

export default Root
