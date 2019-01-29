import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from 'former-kit'

import styles from '../style.css'

const Confirmation = ({ onBackToLogin, t }) => (
  <div
    className={classNames(styles.primaryContent, styles.confirmationContent)}
  >
    <div className={styles.login}>
      <p className={styles.paragraph}>
        <b>{t('sign_up.confirmation_emphasis')}</b>{' '}
        <span>{t('sign_up.confirmation')}</span>
      </p>
    </div>
    <div className={styles.actions}>
      <div className={styles.hugeButton}>
        <Button
          type="button"
          size="large"
          fill="gradient"
          onClick={onBackToLogin}
        >
          {t('back_login_action')}
        </Button>
      </div>
    </div>
  </div>
)

Confirmation.propTypes = {
  onBackToLogin: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default Confirmation
