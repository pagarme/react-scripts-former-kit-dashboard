import React from 'react'

import {
  ThemeProvider,
  Typeset,
  Layout,
  Header,
} from 'former-kit'
import defaultTheme from 'former-kit-skin-pagarme'

import Sidebar from './containers/Sidebar'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './pages/Home'

class App extends React.Component {

  render () {
    return (
      <ThemeProvider theme={defaultTheme}>
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
  }
}

export default App
