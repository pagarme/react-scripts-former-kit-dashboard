import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'

import { connect } from 'react-redux'

import { compose } from 'ramda'

import Account from './Account'
import LoggedArea from './LoggedArea'

const enhance = compose(
  withRouter,
  connect(({ account: { token } }) => ({ token }))
)

function Root ({ token, location }) {
  const { pathname: path } = location
  return (
    <Fragment>
      {!token && !path.startsWith('/account')
        ? <Redirect to="/account/login" />
        : <Route path="/account" component={Account} />
      }
      {token && path.startsWith('/account/login') &&
        <Redirect to="/" />
      }
      {token &&
        <LoggedArea />
      }
    </Fragment>
  )
}

Root.propTypes = {
  token: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

Root.defaultProps = {
  token: null,
  location: {},
}

export default enhance(Root)
