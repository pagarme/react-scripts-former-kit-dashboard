import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'

import UnregisteredPresentation from '../../containers/Account/UnregisteredPresentation'

const enhanced = compose(translate(), withRouter)

class UnregisteredPresentationPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin () {
    this.props.history.push('/account/login')
  }

  render () {
    return (
      <UnregisteredPresentation
        onBackToLogin={this.handleLogin}
        t={this.props.t}
      />
    )
  }
}

UnregisteredPresentationPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhanced(UnregisteredPresentationPage)
