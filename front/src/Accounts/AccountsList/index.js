import React from 'react'

import Account from './Account'

import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('AccountsList')

const AccountsList = ({ accounts, logIn }) => (
  <div {...bem('')}>
    <h1 {...bem('heading')}>Accounts</h1>
    {accounts.map(account => (
      <Account
        {...account}
        logIn={logIn}
        key={account._id}
      />
    ))}
  </div>
)

export default AccountsList
