import React from 'react'

import { ThemeProvider, Typeset } from 'former-kit'
import defaultTheme from 'former-kit-skin-pagarme'

import logo from './logo.svg'
import style from './App.css'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Typeset>
      <div className={style.app}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Welcome to React</h1>
        </header>
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </Typeset>
  </ThemeProvider>
)

export default App
