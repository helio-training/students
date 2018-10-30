import React, { Fragment } from 'react'
import Students from '../components/Students'

export const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <Students />
  </Fragment>
)

export const NotFound = () => (
  <Fragment>
    <h1>Doh! Page not found!</h1>
    <p>The page you requested is not found.</p>
  </Fragment>
)
