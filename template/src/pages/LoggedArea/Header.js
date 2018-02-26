import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import Header from '../../containers/Header'

const enhance = connect(
  ({ account: { token: username } }) => ({
    username,
    avatar: 'https://randomuser.me/api/portraits/thumb/men/12.jpg',
  })
)

const HeaderContainer = ({ avatar, username }) => (
  <Header
    avatar={avatar}
    username={username}
  />
)

HeaderContainer.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
}

HeaderContainer.defaultProps = {
  avatar: null,
}

export default enhance(HeaderContainer)
