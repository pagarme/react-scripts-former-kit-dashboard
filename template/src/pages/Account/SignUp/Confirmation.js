import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'
import { SignUpConfirmation } from '../../../containers/Account/SignUp'

const enhanced = compose(translate(), withRouter)

class SignUpConfirmationPage extends PureComponent {
  constructor (props) {
    super(props)

    this.handleBackToLogin = this.handleBackToLogin.bind(this)
  }

  handleBackToLogin () {
    const { history } = this.props
    history.replace('/account/login')
  }

  render () {
    const { t } = this.props
    return (
      <SignUpConfirmation
        onBackToLogin={this.handleBackToLogin}
        t={t}
      />
    )
  }
}

SignUpConfirmationPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhanced(SignUpConfirmationPage)
