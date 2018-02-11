import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  SegmentedSwitch,
} from 'former-kit'

import styles from './style.css'

const LoginPromo = ({
  onSignup,
  onLanguageChange,
  selectedLanguage,
  availableLanguages,
  t,
}) => (
  <div className={styles.content}>
    <div>
      <h1 className={styles.title}>
        {t('landing.title')}
      </h1>
      <span className={styles.uppercase}>
        {t('landing.subtitle')}
      </span>
      <div className={styles.languageSwitcher}>
        <SegmentedSwitch
          name="language-chooser"
          items={availableLanguages}
          selected={selectedLanguage}
          onChange={onLanguageChange}
        />
      </div>
    </div>
    <p className={styles.paragraph}>
      {t('landing.body')}
    </p>
    <div className={classNames(styles.uppercase, styles.signIn)}>
      <p>
        <span>{t('landing.login_call')}</span>
        <span>
          {t('landing.signup_call')}
          <button
            role="link"
            onClick={onSignup}
            className={styles.signInLink}
          >
            {t('landing.signup_action')}
          </button>
        </span>
      </p>
    </div>
  </div>
)

LoginPromo.propTypes = {
  onSignup: PropTypes.func.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  availableLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
  t: PropTypes.func.isRequired,
}

export default LoginPromo
