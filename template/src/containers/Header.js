import React from 'react'
import PropTypes from 'prop-types'

import Alert24 from 'emblematic-icons/svg/Alert24.svg'
import Mail24 from 'emblematic-icons/svg/Mail24.svg'
import User24 from 'emblematic-icons/svg/User24.svg'

import {
  Avatar,
  Header,
  HeaderContent,
  HeaderLink,
  HeaderMenu,
  HeaderTitle,
} from 'former-kit'

const HeaderContainer = ({ avatar, username }) => (
  <Header>
    <HeaderTitle>Transactions</HeaderTitle>
    <HeaderContent>
      <HeaderLink icon={<Mail24 />} />
      <HeaderLink icon={<Alert24 />} />
      <HeaderMenu>
        <Avatar
          photo={avatar}
          icon={<User24 />}
        />
        <span>{username}</span>
      </HeaderMenu>
    </HeaderContent>
  </Header>
)

HeaderContainer.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default HeaderContainer
