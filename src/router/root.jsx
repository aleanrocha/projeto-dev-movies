import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default Root
