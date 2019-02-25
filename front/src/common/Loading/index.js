import React from 'react'

import { classNames } from '../../helpers'
import CircularProgress  from '@material-ui/core/CircularProgress'

import './index.css'

const Loading = () => (
  <div {...classNames('Loading')}>
    <CircularProgress size={50} />
  </div>
)

export default Loading
