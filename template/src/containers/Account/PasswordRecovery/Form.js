import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'
import { Button, FormInput } from 'former-kit'

import styles from '../style.css'

const PasswordRecoveryForm = ({ onBackToLogin, onSubmit, t }) => (
  <Form
    data={{
      email: '',
    }}
    onSubmit={onSubmit}
    className={styles.primaryContent}
  >
    <div className={styles.login}>
      <p className={styles.paragraph}>{t('password_recovery.recovery_call')}</p>
      <FormInput label={t('email')} name="email" />
    </div>
    <div className={styles.actions}>
      <div className={styles.hugeButton}>
        <Button type="submit" size="large" fill="gradient">
          {t('password_recovery.recovery_action')}
        </Button>
      </div>
      <button role="link" onClick={onBackToLogin}>
        {t('back_login_action')}
      </button>
    </div>
  </Form>
)

PasswordRecoveryForm.propTypes = {
  onBackToLogin: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default PasswordRecoveryForm
