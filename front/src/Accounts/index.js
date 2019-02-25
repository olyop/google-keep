import React, { Component, Fragment } from 'react'

import App from '../App'
import Form from '../common/Form'
import Loading from '../common/Loading'
import AxiosError from '../common/AxiosError'
import AccountsList from './AccountsList'
import formConfig from './formConfig'

import axios from 'axios'
import { componentClassNames } from '../helpers'
import { concat, isNull, isArray, isError, find } from 'lodash'
import { API_ACCOUNTS as url, AXIOS_CONFIG as config } from '../globals'
import initState from './initState'

import './index.css'

const bem = componentClassNames('Accounts')

class Accounts extends Component {
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
      .then(res => this.setState(
        ({ accounts }) => ({ accounts: concat(accounts, res.data) }),
        callback(res)
      ))
      .catch(err => this.setState({ accounts: err }))
  }
  deleteAccount = _id => () => {
    axios.delete(url, { data: { _id }, ...config })
      .then(res => this.setState(
        ({ accounts }) => ({ accounts: accounts.filter(account => account._id !== res.data._id) })
      ))
      .catch(err => this.setState({ accounts: err }))
  }
  render() {
    const { state, toggleCreateAccount, logIn, addAccount } = this
    const { accounts, createAccount, isLoggedIn, account } = state
    if (isLoggedIn) {
      return <App account={account} />
    } else if (isError(accounts)) {
      return <AxiosError err={accounts} />
    } else if (isNull(accounts)) {
      return <Loading />
    } else if (isArray(accounts)) {
      return (
        <div {...bem('')}>
          <div {...bem('inner')}>
            {createAccount ? <Fragment>
              <h1 {...bem('heading')}>Add Account</h1>
              <Form
                fields={formConfig}
                handleSubmit={addAccount}
                handleClose={toggleCreateAccount}
              />
            </Fragment> : <Fragment>
              <AccountsList
                accounts={accounts}
                logIn={logIn}
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

export default Accounts
