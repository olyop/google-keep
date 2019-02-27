import React from 'react'

import { componentClassNames } from '../../helpers'
import CircularProgress  from '@material-ui/core/CircularProgress'

import './index.css'

const bem = componentClassNames('Loading')

const Loading = () => (
  <div className={bem('')}>
    <CircularProgress size={50} />
  </div>
)

export default Loading
