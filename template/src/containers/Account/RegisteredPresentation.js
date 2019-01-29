import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { SegmentedSwitch } from 'former-kit'

import styles from './style.css'

const RegisteredPresentationContainer = ({
  availableLanguages,
  onGotoSignup,
  onLanguageChange,
  selectedLanguage,
  t,
}) => (
  <div className={styles.secondaryContent}>
    <div>
      <h1 className={styles.title}>{t('landing.title')}</h1>
      <span className={styles.uppercase}>{t('landing.subtitle')}</span>
      <div className={styles.languageSwitcher}>
        <SegmentedSwitch
          name="language-chooser"
          onChange={onLanguageChange}
          options={availableLanguages}
          value={selectedLanguage}
        />
      </div>
    </div>
    <p className={styles.paragraph}>{t('landing.body')}</p>
    <div className={classNames(styles.uppercase, styles.signInBlock)}>
      <p>
        <span>{t('landing.login_call')}</span>
        <span>
          {t('landing.signup_call')}
          <button
            role="link"
            onClick={onGotoSignup}
            className={styles.signInLink}
          >
            {t('landing.signup_action')}
          </button>
        </span>
      </p>
    </div>
  </div>
)

RegisteredPresentationContainer.propTypes = {
  availableLanguages: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onGotoSignup: PropTypes.func.isRequired,
  onLanguageChange: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

export default RegisteredPresentationContainer
