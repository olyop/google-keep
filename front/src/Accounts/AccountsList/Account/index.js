import React from 'react'

import { componentClassNames } from '../../../helpers'
import { AWS_DEFAULT_DP } from '../../../globals'

import './index.css'

const bem = componentClassNames('Account')

const Account = ({ logIn, _id, firstName, familyName }) => (
  <div className={bem('')} onClick={logIn(_id)}>
    <div className={bem('content')}>
      <img
        className={bem('dp')}
        src={AWS_DEFAULT_DP}
        alt="default-dp"
      />
      <div className={bem('info')}>
        <h1 className={bem('firstName')}>{firstName}</h1>
        <h2 className={bem('familyName')}>{familyName}</h2>
      </div>
    </div>
    <div className={bem('actions')}>

    </div>
  </div>
)

export default Account
