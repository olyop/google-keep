import React from 'react'

import Views from './Views'
import Footer from './Footer'

import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('Content')

export default props => (
  <div className={bem('')}>
    <Views {...props} />
    <Footer />
  </div>
)
