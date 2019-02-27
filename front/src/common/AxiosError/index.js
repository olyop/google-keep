import React from 'react'
import { instanceOf } from 'prop-types'

import { upperFirst } from 'lodash'
import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('AxiosError')

const AxiosErrorPre = ({ obj }) => (
  <pre className={bem('pre')}>
    {JSON.stringify(obj, undefined, 2)}
  </pre>
)

const AxiosErrorListItem = ({ item, err }) => (
  <div className={bem('item')}>
    <h2 className={bem('h2')}>{upperFirst(item)}</h2>
    <AxiosErrorPre obj={err[item === 'request' ? 'config' : item] || {}} />
  </div>
)

const AxiosError = ({ err }) => {
  if (err.response) { console.error(err.response.data) }
  return (
    <div className={bem('')}>
      <h1 className={bem('h1')}>Axios Error</h1>
      <div className={bem('list')}>
        {['request', 'response'].map(item => (
          <AxiosErrorListItem
            key={item}
            item={item}
            err={err}
          />
        ))}
      </div>
    </div>
  )
}

AxiosError.propTypes = {
  err: instanceOf(Error)
}

export default AxiosError
