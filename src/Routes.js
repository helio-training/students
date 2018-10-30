import React, { Fragment } from 'react'
import { Home, NotFound } from './pages'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

export default () => (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Fragment>
)
