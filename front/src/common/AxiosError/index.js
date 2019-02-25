import React from 'react'

import { upperFirst } from 'lodash'
import { componentClassNames } from '../../helpers'

import './index.css'

const bem = componentClassNames('AxiosError')

const AxiosErrorPre = ({ obj }) => (
  <pre {...bem('pre')}>
    {JSON.stringify(obj, undefined, 2)}
  </pre>
)

const AxiosErrorListItem = ({ item, err }) => (
  <div {...bem('item')}>
    <h2 {...bem('h2')}>{upperFirst(item)}</h2>
    <AxiosErrorPre obj={err[item === 'request' ? 'config' : item] || {}} />
  </div>
)

const AxiosError = ({ err }) => {
  if (err.response) { console.error(err.response.data) }
  return (
    <div {...bem('')}>
      <h1 {...bem('h1')}>Axios Error</h1>
      <div {...bem('list')}>
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

export default AxiosError
