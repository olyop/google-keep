import React from 'react'

import Views from './Views'
import Footer from './Footer'

import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('Content')

const Content = props => (
  <div className={bem('')}>
    <Views {...props} />
    <Footer />
  </div>
)

export default Content
