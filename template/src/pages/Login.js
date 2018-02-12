import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'

import { compose } from 'ramda'

import Login from '../containers/Login'

const enhanced = compose(
  translate(),
  withRouter
)

class LoginPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleResetPassword = this.handleResetPassword.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleLanguageChange (lang) {
    this.props.i18n.changeLanguage(lang)
  }

  handleLogin () {
    this.props.history.replace('/home')
  }

  handleResetPassword () {
    this.props.history.push('/reset_password')
  }

  handleSignup () {
    this.props.history.push('/signup')
  }

  render () {
    return (
      <Login
        t={this.props.t}
        history={this.props.history}
        availableLanguages={['en-US', 'pt']}
        selectedLanguage={this.props.i18n.language}
        onLanguageChange={this.handleLanguageChange}
        onLogin={this.handleLogin}
        onResetPassword={this.handleResetPassword}
        onSignup={this.handleSignup}
      />
    )
  }
}

LoginPage.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func,
    language: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
}

export default enhanced(LoginPage)
