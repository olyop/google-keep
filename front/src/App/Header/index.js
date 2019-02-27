import React, { Fragment } from 'react'

import Button from '../../common/Button'

import { AWS_LOGO } from '../../globals'
import { classNames, componentClassNames } from '../../helpers'

import './hamburgers.min.css'
import './index.css'

const bem = componentClassNames('Header')

const Hamburger = ({ hamburger, toggleHamburger }) => (
  <button
    onClick={toggleHamburger}
    className={bem(
      'hamburger',
      { ignore: true, className: hamburger ? 'is-active' : undefined },
      { ignore: true, className: 'hamburger' },
      { ignore: true, className: 'hamburger--boring' }
    )}
    type="button"
    children={(
      <span {...classNames('hamburger-box')}>
        <span className={bem('hamburger-inner', { ignore: true, className: 'hamburger-inner' })} />
      </span>
    )}
  />
)

const Logo = () => (
  <a className={bem('logo-link')} href="/">
    <img
      className={bem('logo')}
      src={AWS_LOGO}
      alt="google-keep"
    />
  </a>
)

const Title = () => <h1 className={bem('title')}>Keep</h1>

const AccountButton = () => (
  <Button
    className={bem('account')}
    padding={0}
    html={<Fragment>
      <div className={bem('account-icon-container')}>
        <i className={bem('account-icon', { ignore: true, className: 'material-icons' })}>account_circle</i>
      </div>
    </Fragment>}
  />
)

const Header = ({ hamburger, toggleHamburger }) => (
  <div className={bem('')}>
    <div className={bem('left')}>
      <Hamburger {...{ hamburger, toggleHamburger }} />
      <Logo />
      <Title />
    </div>
    <div className={bem('right')}>
      <AccountButton />
    </div>
  </div>
)

export default Header
