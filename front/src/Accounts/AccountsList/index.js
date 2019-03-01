import React, { Fragment } from 'react'

import Account from './Account'
import Button from '../../common/Button'

import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('AccountsList')

const AccountsList = ({ accounts, logIn, toggleCreateAccount, deleteAccount, deleteLoading }) => (
  <div className={bem('')}>
    <h1 className={bem('heading')}>Accounts</h1>
    <div className={bem('list')}>
      {accounts.length === 0 ? (
        <p className={bem('no-accounts')}>No Accounts.</p>
      ) : <Fragment>
        {accounts.map(account => (
          <Account
            {...account}
            key={account._id}
            logIn={logIn}
            deleteAccount={deleteAccount}
            deleteLoading={deleteLoading}
          />
        ))}
      </Fragment>}
    </div>
    <Button
      onClick={toggleCreateAccount}
      text={'Add Account'}
      icon={'add'}
      padding={8}
    />
  </div>
)

export default AccountsList
