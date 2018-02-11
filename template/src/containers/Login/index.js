import React from 'react'
import PropTypes from 'prop-types'

import {
  Landing,
  LandingPrimarySection,
  LandingSecondarySection,
} from 'former-kit'

import Promo from './Promo'
import Form from './Form'

import styles from './style.css'

const LoginContainer = ({
  availableLanguages,
  onLanguageChange,
  onLogin,
  onResetPassword,
  onSignup,
  selectedLanguage,
  t,
}) => (
  <Landing className={styles.container}>
    <LandingPrimarySection>
      <div className={styles.columnContainer}>
        <Form
          onLogin={onLogin}
          onResetPassword={onResetPassword}
          t={t}
        />
      </div>
    </LandingPrimarySection>
    <LandingSecondarySection>
      <div className={styles.columnContainer}>
        <Promo
          onSignup={onSignup}
          onLanguageChange={onLanguageChange}
          selectedLanguage={selectedLanguage}
          availableLanguages={availableLanguages}
          t={t}
        />
      </div>
    </LandingSecondarySection>
  </Landing>
)

LoginContainer.propTypes = {
  t: PropTypes.func.isRequired,
  onLanguageChange: PropTypes.func,
  onLogin: PropTypes.func,
  onResetPassword: PropTypes.func,
  onSignup: PropTypes.func,
  selectedLanguage: PropTypes.string,
  availableLanguages: PropTypes.arrayOf(PropTypes.string),
}

LoginContainer.defaultProps = {
  availableLanguages: [],
  selectedLanguage: '',
  onLanguageChange: null,
  onLogin: null,
  onResetPassword: null,
  onSignup: null,
}

export default LoginContainer
