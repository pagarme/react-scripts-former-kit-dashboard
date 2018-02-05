import React from 'react'

import {
  ThemeProvider,
  Typeset,
  Layout,
} from 'former-kit'
import theme from 'former-kit-skin-pagarme'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './pages/Home'

const App = () => (
  <ThemeProvider theme={theme}>
    <Typeset>
      <Layout
        sidebar={<Sidebar />}
        header={<Header />}
        footer={<Footer />}
      >
        <Home />
      </Layout>
    </Typeset>
  </ThemeProvider>
)

export default App
