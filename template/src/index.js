import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './initializeI18n'

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
