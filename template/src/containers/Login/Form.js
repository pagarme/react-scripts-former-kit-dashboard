import React from 'react'
import PropTypes from 'prop-types'

import Form from 'react-vanilla-form'

import {
  Button,
  FormInput,
} from 'former-kit'

import styles from './style.css'

const LoginForm = ({
  onLogin,
  onResetPassword,
  t,
}) => (
  <Form
    data={{
      email: '',
      password: '',
      token: '',
    }}
    onSubmit={onLogin}
    className={styles.form}
  >
    <div className={styles.logo}>
      <img
        src=""
        alt={t('landing.logo')}
      />
    </div>
    <div className={styles.login}>
      <FormInput
        label={t('login.email')}
        name="email"
      />
      <FormInput
        type="password"
        label={t('login.password')}
        name="password"
      />
      <FormInput
        label={t('login.token')}
        name="token"
        placeholder="ABC123"
      />
    </div>
    <div className={styles.loginActions}>
      <div className={styles.hugeButton}>
        <Button
          type="submit"
          size="large"
          fill="gradient"
        >
          {t('login.login_action')}
        </Button>
      </div>
      <button role="link" onClick={onResetPassword}>
        {t('login.reset_password_action')}
      </button>
    </div>
  </Form>
)

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onResetPassword: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default LoginForm
