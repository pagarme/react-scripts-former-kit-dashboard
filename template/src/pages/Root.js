import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import Account from './Account'
import { requestLogin } from './Account/actions'
import LoggedArea from './LoggedArea'

const mapDispatchToProps = {
  requestLogin,
}

const mapStateToProps = ({ account: { token } }) => ({ token })

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

class Root extends Component {
  componentDidMount () {
    // eslint-disable-next-line no-undef
    const localToken = window.localStorage.getItem('token')
    if (localToken && localToken !== 'undefined' && !this.props.token) {
      this.props.requestLogin()
    }
  }

  render () {
    const { location, token } = this.props
    const { pathname: path } = location
    return (
      <Fragment>
        {!token && !path.startsWith('/account') ? (
          <Redirect to="/account/login" />
        ) : (
          <Route path="/account" component={Account} />
        )}
        {token && path.startsWith('/account/login') && <Redirect to="/" />}
        {token && <LoggedArea />}
      </Fragment>
    )
  }
}

Root.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  requestLogin: PropTypes.func.isRequired,
  token: PropTypes.string,
}

Root.defaultProps = {
  location: {},
  token: null,
}

export default enhance(Root)
