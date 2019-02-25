import React from 'react'

import Button from '../../common/Button'

import { AWS_LOGO } from '../../globals'
import { classNames, componentClassNames } from '../../helpers'

import './hamburgers.min.css'
import './index.css'

const bem = componentClassNames('Header')

const Hamburger = ({ hamburger, toggleHamburger }) => (
  <button
    {...bem(
      'hamburger',
      { ignore: true, className: hamburger ? 'is-active' : undefined },
      { ignore: true, className: 'hamburger' },
      { ignore: true, className: 'hamburger-boring' }
    )}
    onClick={toggleHamburger}
    type="button"
    children={(
      <span {...classNames('box', 'hamburger-box')}>
        <span {...bem('hamburger-inner', { ignore: true, className: 'hamburger-inner' })} />
      </span>
    )}
  />
)

const Logo = () => (
  <a {...bem('logo-link')} href="/">
    <img
      {...bem('logo')}
      src={AWS_LOGO}
      alt="google-keep"
    />
  </a>
)

const Title = () => <h1 {...bem('title')}>Keep</h1>

const Header = ({ hamburger, toggleHamburger }) => (
  <div {...bem('')}>
    <div {...bem('left')}>
      <Hamburger {...{ hamburger, toggleHamburger }} />
      <Logo />
      <Title />
    </div>
    <div {...bem('right')}>
      <Button
        icon="turned_in_not"
        iconClassName="Header__foo"
        padding={8}
      />
    </div>
  </div>
)

export default Header
