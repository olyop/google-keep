import React, { Fragment } from 'react'

import Account from './Account'

import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('AccountsList')

const AccountsList = ({ accounts, logIn }) => (
  <div className={bem('')}>
    <h1 className={bem('heading')}>Accounts</h1>
    {accounts.length === 0 ? (
      <p className={bem('no-accounts')}>No Accounts.</p>
    ) : <Fragment>
      {accounts.map(account => (
        <Account
          {...account}
          logIn={logIn}
          key={account._id}
        />
      ))}
    </Fragment>}
  </div>
)

export default AccountsList
