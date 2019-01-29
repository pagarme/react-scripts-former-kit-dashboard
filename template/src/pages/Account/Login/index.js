import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'

import { compose } from 'ramda'
import { connect } from 'react-redux'

import Login from '../../../containers/Account/Login'
import { requestLogin } from '../actions'

const mapStateToProps = (state) => {
  const {
    account: { errors, loading, token },
  } = state

  return {
    errors,
    loading,
    token,
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: (data) => {
    dispatch(requestLogin(data))
  },
})

const enhanced = compose(
  connect(mapStateToProps, mapDispatchToProps),
  translate(),
  withRouter
)

class LoginPage extends PureComponent {
  constructor (props) {
    super(props)

    this.handlePasswordRecovery = this.handlePasswordRecovery.bind(this)
  }

  handlePasswordRecovery () {
    this.props.history.push('/account/password/recovery')
  }

  render () {
    return (
      <Login
        t={this.props.t}
        errors={this.props.errors}
        loading={this.props.loading}
        onLogin={this.props.onLogin}
        onPasswordRecovery={this.handlePasswordRecovery}
      />
    )
  }
}

LoginPage.propTypes = {
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  loading: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

LoginPage.defaultProps = {
  errors: {},
  loading: false,
}

export default enhanced(LoginPage)
