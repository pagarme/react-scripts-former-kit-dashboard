import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import {
  compose,
  always,
  anyPass,
  contains,
  ifElse,
} from 'ramda'

import { translate } from 'react-i18next'

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

const enhance = compose(
  withRouter,
  translate()
)

const AccountArea = ({ t, history: { location } }) => (
  <Account
    logo={props => (
      <a href="https://openclipart.org/detail/270878/datacubes">
        <img
          src="https://openclipart.org/download/270878/Datacubes.svg"
          alt={t('landing.logo')}
          height="160px"
          {...props}
        />
      </a>
    )}
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
  t: PropTypes.func.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
}

export default enhance(AccountArea)
