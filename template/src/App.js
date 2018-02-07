import React from 'react'

import {
  ThemeProvider,
  Typeset,
  Layout,
} from 'former-kit'
import theme from 'former-kit-skin-pagarme'

import { HashRouter, Route } from 'react-router-dom'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <Typeset>
        <div>
          <Route
            path="/login"
            component={Login}
          />
          <Route
            path="/home"
            component={
              () => (
                <Layout
                  sidebar={<Sidebar />}
                  header={<Header />}
                  footer={<Footer />}
                >
                  <Home />
                </Layout>
              )
            }
          />
        </div>
      </Typeset>
    </HashRouter>
  </ThemeProvider>
)

export default App
