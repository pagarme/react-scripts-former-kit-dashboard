import React from 'react'
import {
  ThemeProvider,
} from 'former-kit'
import theme from 'former-kit-skin-pagarme'
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom'

import Account from './pages/Account'
import LoggedArea from './pages/LoggedArea'

const App = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route
          path="/account"
          component={Account}
        />
        <Route
          component={LoggedArea}
        />
      </Switch>
    </HashRouter>
  </ThemeProvider>
)

export default App
