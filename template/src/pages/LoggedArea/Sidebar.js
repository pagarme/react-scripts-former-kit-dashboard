import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar, SidebarHeader, SidebarLinks, SidebarLink } from 'former-kit'
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
    const {
      history,
      location: { pathname },
    } = this.props

    return (
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          {!collapsed && <h1>FormerKit</h1>}
          <button onClick={this.handleToggleSidebar}>
            <Menu32 width={16} height={16} />
          </button>
        </SidebarHeader>

        <SidebarLinks>
          {Object.values(routes).map(({ icon: Icon, path, title }) => (
            <SidebarLink
              key={path}
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

SidebarContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default withRouter(SidebarContainer)
