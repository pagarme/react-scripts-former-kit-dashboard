import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import Alert24 from 'emblematic-icons/svg/Alert24.svg'
import Mail24 from 'emblematic-icons/svg/Mail24.svg'

import {
  Avatar,
  Header,
  HeaderContent,
  HeaderLink,
  HeaderMenu,
  HeaderTitle,
  PopoverContent,
  PopoverMenu,
  Spacing,
} from 'former-kit'

const HeaderContainer = ({
  avatar,
  onLogout,
  username,
}) => (
  <Header>
    <HeaderTitle>Transactions</HeaderTitle>
    <HeaderContent>
      <HeaderLink
        icon={<Mail24 />}
        onClick={() => {
          console.log('mail click') // eslint-disable-line no-console
        }}
      />
      <Spacing size="small" />
      <HeaderLink
        icon={<Alert24 />}
        onClick={() => {
          console.log('alert click') // eslint-disable-line no-console
        }}
      />
      <Spacing size="small" />
      <HeaderMenu
        title={
          <Fragment>
            <Avatar alt={username} photo={avatar} />
            <span>{username}</span>
          </Fragment>
        }
      >
        <PopoverContent>
          <strong>
            {username}
          </strong>
        </PopoverContent>
        <PopoverMenu
          items={[
            {
              action: onLogout,
              title: 'Logout',
            },
          ]}
        />
      </HeaderMenu>
    </HeaderContent>
  </Header>
)

HeaderContainer.propTypes = {
  avatar: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

export default HeaderContainer
