import React from 'react'

import {
  Sidebar,
  SidebarHeader,
  SidebarLinks,
  SidebarLink,
} from 'former-kit'
import defaultTheme from 'former-kit-skin-pagarme'

import Menu32 from 'emblematic-icons/svg/Menu32'
import Transaction32 from 'emblematic-icons/svg/Transaction32'
import Money32 from 'emblematic-icons/svg/Money32'

export default class SidebarContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
    }

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this)
  }

  handleToggleSidebar () {
    this.setState({ collapsed: !collapsed })
  }

  render () {
    const { collapsed } = this.state

    return (
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          {!collapsed &&
            <h1>FormerKit</h1>
          }
          <button onClick={this.handleToggleSidebar}>
            <Menu32 width={16} height={16} />
          </button>
        </SidebarHeader>

        <SidebarLinks>
          <SidebarLink
            title="Home"
            active={false}
            icon={<Home32 width={16} height={16} />}
            collapsed={collapsed}
          />
          <SidebarLink
            title="Transactions"
            active={false}
            icon={<Transaction32 width={16} height={16} />}
            collapsed={collapsed}
          />
          <SidebarLink
            title="Extract"
            active={false}
            icon={<Money32 width={16} height={16} />}
            collapsed={collapsed}
          />
        </SidebarLinks>
      </Sidebar>
    )
  }
}
