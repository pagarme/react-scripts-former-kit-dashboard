/* eslint-disable */

import React, { PureComponent } from 'react'
import {
  Button,
  Input,
} from 'former-kit'

import { withRouter } from 'react-router-dom'

import Login from '../containers/Login'

class LoginPage extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: '',
      emailError: null,
      passwordError: null,
      tokenError: '',
      hasToken: !!(props.hasToken),
    }
    this.clearState = this.clearState.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleTokenChange = this.handleTokenChange.bind(this)
  }

  clearState () {
    this.setState({
      email: '',
      password: '',
      token: '',
      emailError: null,
      passwordError: null,
    })
  }

  handleLogIn (event) {
    event.preventDefault()
    this.props.history.replace('/home')
    this.clearState()
  }

  handleEmailChange (event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange (event) {
    this.setState({ password: event.target.value })
  }

  handleTokenChange (event) {
    this.setState({ token: event.target.value })
  }

  render () {
    return (
      <Login
        {...this.state}
        handleLogIn={this.handleLogIn}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleTokenChange={this.handleTokenChange}
      />
    )
  }
}

export default withRouter(LoginPage)
