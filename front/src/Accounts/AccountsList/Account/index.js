import React from 'react'

import { componentClassNames } from '../../../helpers'
import { AWS_DEFAULT_DP } from '../../../globals'

import './index.css'

const bem = componentClassNames('Account')

const Account = ({ logIn, _id, firstName, familyName }) => (
  <div {...bem('')} onClick={logIn(_id)}>
    <div {...bem('content')}>
      <img
        {...bem('dp')}
        src={AWS_DEFAULT_DP}
        alt="default-dp"
      />
      <div {...bem('info')}>
        <h1 {...bem('firstName')}>{firstName}</h1>
        <h2 {...bem('familyName')}>{familyName}</h2>
      </div>
    </div>
    <div {...bem('actions')}>

    </div>
  </div>
)

export default Account
