import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'
import { SingUpForm } from '../../../containers/Account/SignUp'

const enhanced = compose(translate(), withRouter)

class SignUpPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    const { history } = this.props
    history.replace('/account/signup/confirmation')
  }

  render () {
    const { t } = this.props
    return <SingUpForm onSubmit={this.handleSubmit} t={t} />
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhanced(SignUpPage)
