import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, withRouter } from 'react-router-dom'
import { always, anyPass, compose, contains, ifElse } from 'ramda'
import { translate } from 'react-i18next'

import Account from '../../containers/Account'
import InvalidEmailError from './SignUp/InvalidEmailError'
import Login from './Login'
import PasswordRecovery from './PasswordRecovery'
import PasswordRecoveryConfirmation from './PasswordRecovery/Confirmation'
import RegisteredPresentation from './RegisteredPresentation'
import SignUp from './SignUp'
import SignUpConfirmation from './SignUp/Confirmation'
import UnregisteredPresentation from './UnregisteredPresentation'

const getBaseByPath = ifElse(
  anyPass([contains('account/login'), contains('account/password')]),
  always('dark'),
  always('light')
)

const enhance = compose(withRouter, translate())

const AccountArea = ({ history: { location }, t }) => (
  <Account
    base={getBaseByPath(location.pathname)}
    primaryContent={
      <Switch>
        <Route path="/account/login" component={Login} />
        <Route
          path="/account/password/recovery/confirmation"
          component={PasswordRecoveryConfirmation}
        />
        <Route path="/account/password/recovery" component={PasswordRecovery} />
        <Route
          path="/account/signup/confirmation"
          component={SignUpConfirmation}
        />
        <Route path="/account/signup/error" component={InvalidEmailError} />
        <Route path="/account/signup" component={SignUp} />
      </Switch>
    }
    secondaryContent={
      <Switch>
        <Route path="/account/login" component={RegisteredPresentation} />
        <Route path="/account/password" component={RegisteredPresentation} />
        <Route path="/account/signup" component={UnregisteredPresentation} />
      </Switch>
    }
    t={t}
  />
)

AccountArea.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhance(AccountArea)
