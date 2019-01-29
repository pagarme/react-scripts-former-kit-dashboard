import React from 'react'

import { Sidebar, SidebarHeader, SidebarLinks, SidebarLink } from 'former-kit'

import Menu32 from 'emblematic-icons/svg/Menu32.svg'
import Transaction32 from 'emblematic-icons/svg/Transaction32.svg'
import Wallet32 from 'emblematic-icons/svg/Wallet32.svg'
import Home32 from 'emblematic-icons/svg/Home32.svg'

export default class SidebarContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this)
  }

  handleToggleSidebar() {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
  }

  render() {
    const { collapsed } = this.state

    return (
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          {!collapsed && <h1>FormerKit</h1>}
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
            icon={<Wallet32 width={16} height={16} />}
            collapsed={collapsed}
          />
        </SidebarLinks>
      </Sidebar>
    )
  }
}
