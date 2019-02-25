import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import 'normalize.css/normalize.css'
import './index.css'

import Accounts from './Accounts'

ReactDOM.render(<Accounts />, document.getElementById('root'))

serviceWorker.register()
