import React from 'react'

import { Route } from 'react-router-dom'
import Notes from './Notes'

import { componentClassNames } from '../../../helpers'

const bem = componentClassNames('Views')

const Views = props => (
  <div {...bem('')}>
    <Route exact path="/" render={() => (
      <Notes {...props} />
    )} />
  </div>
)

export default Views
