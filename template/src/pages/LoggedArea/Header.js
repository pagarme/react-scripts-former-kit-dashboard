import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { requestLogout } from '../Account/actions'
import Header from '../../containers/Header'

const mapDispatchToProps = {
  requestLogout,
}

const mapStateToProps = ({ account: { token: username } }) => ({
  avatar: 'https://randomuser.me/api/portraits/thumb/men/12.jpg',
  username,
})

const enhance = connect(mapStateToProps, mapDispatchToProps)

const HeaderContainer = ({
  avatar,
  requestLogout: onLogout,
  username,
}) => (
  <Header avatar={avatar} username={username} onLogout={onLogout} />
)

HeaderContainer.propTypes = {
  avatar: PropTypes.string,
  requestLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

HeaderContainer.defaultProps = {
  avatar: null,
}

export default enhance(HeaderContainer)
