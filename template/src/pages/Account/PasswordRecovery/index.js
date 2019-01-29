import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'
import { PasswordRecoveryForm } from '../../../containers/Account/PasswordRecovery'

const enhanced = compose(translate(), withRouter)

class PasswordRecoveryPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleBackToLogin = this.handleBackToLogin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBackToLogin () {
    this.props.history.replace('/account/login')
  }

  handleSubmit () {
    this.props.history.replace('/account/password/recovery/confirmation')
  }

  render () {
    return (
      <PasswordRecoveryForm
        onBackToLogin={this.handleBackToLogin}
        onSubmit={this.handleSubmit}
        t={this.props.t}
      />
    )
  }
}

PasswordRecoveryPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhanced(PasswordRecoveryPage)
