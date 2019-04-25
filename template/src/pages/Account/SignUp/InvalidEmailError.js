import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'
import { InvalidEmailError } from '../../../containers/Account/SignUp'

const enhanced = compose(translate(), withRouter)

class InvalidEmailErrorPage extends PureComponent {
  constructor (props) {
    super(props)

    this.handleBackToSignUp = this.handleBackToSignUp.bind(this)
  }

  handleBackToSignUp () {
    const { history } = this.props
    history.replace('/account/signup')
  }

  render () {
    const { t } = this.props
    return (
      <InvalidEmailError
        onBackToSignUp={this.handleBackToSignUp}
        t={t}
      />
    )
  }
}

InvalidEmailErrorPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhanced(InvalidEmailErrorPage)
