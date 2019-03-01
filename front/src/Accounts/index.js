import React, { Component, Fragment } from 'react'

import AxiosError from '../common/AxiosError'
import AccountsList from './AccountsList'
import Loading from '../common/Loading'
import formConfig from './formConfig'
import Form from '../common/Form'
import App from '../App'

import { API_ACCOUNTS as url, AXIOS_CONFIG as config } from '../globals'
import { concat, isNull, isArray, isError, find } from 'lodash'
import { componentClassNames } from '../helpers'
import initState from './initState'
import axios from 'axios'

import './index.css'

const bem = componentClassNames('Accounts')

export default class Accounts extends Component {
  constructor(props) {
    super(props)
    this.state = initState
    this.toggleCreateAccount = this.toggleCreateAccount.bind(this)
    this.logIn = this.logIn.bind(this)
    this.addAccount = this.addAccount.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
  }
  componentDidMount() {
    axios.get(url, config)
      .then(res => this.setState({ accounts: res.data }))
      .catch(err => this.setState({ accounts: err }))
  }
  toggleCreateAccount = () => this.setState(
    ({ createAccount }) => ({ createAccount: !createAccount })
  )
  logIn = _id => () => this.setState(
    ({ accounts, isLoggedIn, createAccount }) => ({
      account: find(accounts, { _id }),
      isLoggedIn: true
    })
  )
  addAccount = (data, callback) => {
    axios.post(url, data, config)
      .then(res => {
        this.setState(
          ({ accounts }) => ({ accounts: concat(accounts, res.data) }),
          callback
        )
        this.toggleCreateAccount()
      })
      .catch(err => this.setState({ accounts: err }))
  }
  deleteAccount = _id => () => this.setState(
    ({ deleteLoading }) => ({ deleteLoading: concat(deleteLoading, _id) }),
    () => {
      axios.delete(url, { data: { _id }, ...config })
        .then(res => this.setState(
          ({ accounts, deleteLoading }) => ({
            accounts: accounts.filter(account => account._id !== res.data._id),
            deleteLoading: deleteLoading.filter(_id => _id !== res.data._id)
          })
        ))
        .catch(err => this.setState({ accounts: err }))
    }
  )
  render() {
    const { state, toggleCreateAccount, logIn, addAccount, deleteAccount } = this
    const { accounts, createAccount, isLoggedIn, account, deleteLoading } = state
    if (isLoggedIn) {
      return <App account={account} />
    } else if (isError(accounts)) {
      return <AxiosError err={accounts} />
    } else if (isNull(accounts)) {
      return <Loading />
    } else if (isArray(accounts)) {
      return (
        <div className={bem('')}>
          <div className={bem('inner')}>
            {createAccount ? <Fragment>
              <h1 className={bem('heading')}>Add Account</h1>
              <Form
                fields={formConfig}
                handleSubmit={addAccount}
                handleClose={toggleCreateAccount}
                className={bem('form')}
              />
            </Fragment> : <Fragment>
              <AccountsList
                accounts={accounts}
                logIn={logIn}
                toggleCreateAccount={toggleCreateAccount}
                deleteAccount={deleteAccount}
                deleteLoading={deleteLoading}
              />
            </Fragment>}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}
