import React from 'react'

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

const HeaderContainer = () => (
  <Header>
    <HeaderTitle>Transactions</HeaderTitle>
    <HeaderContent>
      <HeaderLink icon={<Mail24 />} />
      <HeaderLink icon={<Alert24 />} />
      <HeaderMenu>
        <Avatar
          photo="https://randomuser.me/api/portraits/thumb/men/12.jpg"
          icon={<User24 />}
        />
        <span>User Name</span>
      </HeaderMenu>
    </HeaderContent>
  </Header>
)

export default HeaderContainer
