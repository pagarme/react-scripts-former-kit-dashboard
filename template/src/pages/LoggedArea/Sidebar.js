/* eslint-disable */

import React from 'react'

import {
  Sidebar,
  SidebarHeader,
  SidebarLinks,
  SidebarLink,
} from 'former-kit'

import { withRouter } from 'react-router-dom'

import Menu32 from 'emblematic-icons/svg/Menu32.svg'

import routes from './routes'

class SidebarContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
    }

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this)
  }

  handleToggleSidebar () {
    const { collapsed } = this.state
    this.setState({ collapsed: !collapsed })
  }

  render () {
    const { collapsed } = this.state
    const { location: { pathname }, history } = this.props

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
          {Object.values(routes).map(({ title, path, icon: Icon }) => (
            <SidebarLink
              title={title}
              active={path === pathname}
              icon={<Icon width={16} height={16} />}
              collapsed={collapsed}
              onClick={() => history.push(path)}
            />
          ))}
        </SidebarLinks>
      </Sidebar>
    )
  }
}

export default withRouter(SidebarContainer)
