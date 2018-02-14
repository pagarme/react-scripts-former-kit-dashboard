import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'

import { compose } from 'ramda'

import Login from '../../../containers/Account/Login'

const enhanced = compose(
  translate(),
  withRouter
)

class LoginPage extends PureComponent {
  constructor (props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.handlePasswordRecovery = this.handlePasswordRecovery.bind(this)
  }

  handleLogin () {
    this.props.history.replace('/home')
  }

  handlePasswordRecovery () {
    this.props.history.push('/account/password/recovery')
  }

  render () {
    return (
      <Login
        t={this.props.t}
        onLogin={this.handleLogin}
        onPasswordRecovery={this.handlePasswordRecovery}
      />
    )
  }
}

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
}

export default enhanced(LoginPage)
