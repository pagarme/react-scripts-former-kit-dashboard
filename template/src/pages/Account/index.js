import React from 'react'
import PropTypes from 'prop-types'
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'
import {
  always,
  anyPass,
  contains,
  ifElse,
} from 'ramda'

import Account from '../../containers/Account'
import UnregisteredPresentation from './UnregisteredPresentation'
import InvalidEmailError from './SignUp/InvalidEmailError'
import Login from './Login'
import PasswordRecovery from './PasswordRecovery'
import PasswordRecoveryConfirmation from './PasswordRecovery/Confirmation'
import SignUp from './SignUp'
import SignUpConfirmation from './SignUp/Confirmation'
import RegisteredPresentation from './RegisteredPresentation'

const getBaseByPath = ifElse(
  anyPass([
    contains('account/login'),
    contains('account/password'),
  ]),
  always('dark'),
  always('light')
)

const AccountArea = ({ history: { location } }) => (
  <Account
    base={getBaseByPath(location.pathname)}
    primaryContent={
      <Switch>
        <Route
          path="/account/login"
          component={Login}
        />
        <Route
          path="/account/password/recovery/confirmation"
          component={PasswordRecoveryConfirmation}
        />
        <Route
          path="/account/password/recovery"
          component={PasswordRecovery}
        />
        <Route
          path="/account/signup/confirmation"
          component={SignUpConfirmation}
        />
        <Route
          path="/account/signup/error"
          component={InvalidEmailError}
        />
        <Route
          path="/account/signup"
          component={SignUp}
        />
      </Switch>
    }
    secondaryContent={
      <Switch>
        <Route
          path="/account/login"
          component={RegisteredPresentation}
        />
        <Route
          path="/account/password"
          component={RegisteredPresentation}
        />
        <Route
          path="/account/signup"
          component={UnregisteredPresentation}
        />
      </Switch>
    }
  />
)

AccountArea.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
}

export default withRouter(AccountArea)
