// @ts-nocheck
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './_helpers'
import { App } from './containers'

// theme, custom and ready-to-use bootstrap css
import './_assets/css/theme.css'
import './_assets/css/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// third party fonts
import './_assets/vendor/nucleo/css/nucleo.css'
import './_assets/vendor/fortawesome/fontawesome-free/css/all.min.css'

// setup fake backend
import { configureFakeBackend } from './_helpers'
configureFakeBackend()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
