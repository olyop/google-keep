import React from 'react'

import Button from '../../../common/Button'

import { componentClassNames } from '../../../helpers'
import { AWS_DEFAULT_DP } from '../../../globals'
import { includes } from 'lodash'

import './index.css'

const bem = componentClassNames('Account')

const Account = ({ logIn, deleteAccount, deleteLoading, _id, firstName, familyName }) => (
  <div className={bem('')}>
    <div className={bem('content')}>
      <Button
        onClick={logIn(_id)}
        className={bem('log-in')}
        icon={'arrow_forward'}
        text={'Log In'}
        textClassName={bem('log-in-text')}
        border={'1px solid #E0E0E0'}
        padding={13}
      />
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
      <Button
        onClick={deleteAccount(_id)}
        className={bem('delete')}
        icon={'delete'}
        loading={includes(deleteLoading, _id)}
        padding={10}
      />
    </div>
  </div>
)

export default Account
