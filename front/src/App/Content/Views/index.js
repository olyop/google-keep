import React from 'react'

import { Switch, Route } from 'react-router-dom'
import Notes from './Notes'

import { componentClassNames } from '../../../helpers'

const bem = componentClassNames('Views')

const Views = props => (
  <div className={bem('')}>
    <Switch>
      <Route exact path="/" render={() => (
        <Notes {...props} />
      )} />
      <Route exact path="/about" render={() => (
        <p>About</p>
      )} />
    </Switch>
  </div>
)

export default Views
