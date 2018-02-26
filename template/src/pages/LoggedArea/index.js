import React from 'react'

import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom'

import { Layout } from 'former-kit'

import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

import routes from './routes'

const LoggedArea = () => (
  <Layout
    sidebar={<Sidebar />}
    header={<Header />}
    footer={<Footer />}
  >
    <Switch>
      {Object.values(routes).map(({ component, path }) => (
        <Route path={path} component={component} />
      ))}
      <Redirect to="/home" />
    </Switch>
  </Layout>
)

export default withRouter(LoggedArea)
