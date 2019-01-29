import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './style.css'

const UnregisteredPresentationContainer = ({ onBackToLogin, t }) => (
  <div className={styles.secondaryContent}>
    <div>
      <h1 className={styles.title}>{t('landing.title')}</h1>
      <span className={styles.uppercase}>{t('landing.subtitle')}</span>
    </div>
    <p className={styles.paragraph}>{t('landing.body')}</p>
    <div className={classNames(styles.uppercase, styles.signInBlock)}>
      <p>
        <span>
          {t('sign_up.login_call')}
          <button
            role="link"
            onClick={onBackToLogin}
            className={styles.signInLink}
          >
            {t('sign_up.login_action')}
          </button>
        </span>
      </p>
    </div>
  </div>
)

UnregisteredPresentationContainer.propTypes = {
  onBackToLogin: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default UnregisteredPresentationContainer
