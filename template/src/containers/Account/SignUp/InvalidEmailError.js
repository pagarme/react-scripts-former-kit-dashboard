import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from 'former-kit'

import styles from '../style.css'

const InvalidEmailError = ({ onBackToSignUp, t }) => (
  <div
    className={classNames(styles.primaryContent, styles.confirmationContent)}
  >
    <div className={styles.login}>
      <p className={styles.paragraph}>
        <b>{t('sign_up.invalid_email_emphasis')}</b>{' '}
        <span>{t('sign_up.invalid_email_error')}</span>
      </p>
    </div>
    <div className={styles.actions}>
      <div className={styles.hugeButton}>
        <Button
          type="button"
          size="large"
          fill="gradient"
          onClick={onBackToSignUp}
        >
          {t('sign_up.back_signup_action')}
        </Button>
      </div>
    </div>
  </div>
)

InvalidEmailError.propTypes = {
  onBackToSignUp: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default InvalidEmailError
