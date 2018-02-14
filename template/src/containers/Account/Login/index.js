import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'
import {
  Button,
  FormInput,
} from 'former-kit'

import styles from '../style.css'

const LoginContainer = ({
  onLogin,
  onPasswordRecovery,
  t,
}) => (
  <Form
    data={{
      email: '',
      password: '',
      token: '',
    }}
    onSubmit={onLogin}
    className={styles.primaryContent}
  >
    <div className={styles.logo}>
      <img
        src=""
        alt={t('landing.logo')}
      />
    </div>
    <div className={styles.login}>
      <FormInput
        label={t('email')}
        name="email"
      />
      <FormInput
        type="password"
        label={t('password')}
        name="password"
      />
      <FormInput
        label={t('login.token')}
        name="token"
      />
    </div>
    <div className={styles.actions}>
      <div className={styles.hugeButton}>
        <Button
          type="submit"
          size="large"
          fill="gradient"
        >
          {t('login.login_action')}
        </Button>
      </div>
      <button role="link" onClick={onPasswordRecovery}>
        {t('login.password_recovery_action')}
      </button>
    </div>
  </Form>
)

LoginContainer.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onPasswordRecovery: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default LoginContainer
