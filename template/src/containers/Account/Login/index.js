import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'

import { Button, FormInput } from 'former-kit'

import styles from '../style.css'

const LoginContainer = ({
  errors,
  loading,
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
    errors={errors}
    customErrorProp="error"
    onSubmit={onLogin}
    className={styles.primaryContent}
  >
    <div className={styles.login}>
      <FormInput disabled={loading} label={t('email')} name="email" />
      <FormInput
        disabled={loading}
        label={t('password')}
        type="password"
        name="password"
      />
      <FormInput disabled={loading} label={t('login.token')} name="token" />
    </div>
    <div className={styles.actions}>
      <div className={styles.hugeButton}>
        <Button disabled={loading} fill="gradient" size="huge" type="submit">
          {t('login.login_action')}
        </Button>
      </div>
      <button role="link" disabled={loading} onClick={onPasswordRecovery}>
        {t('login.password_recovery_action')}
      </button>
    </div>
  </Form>
)

LoginContainer.propTypes = {
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  loading: PropTypes.bool,
  onLogin: PropTypes.func.isRequired,
  onPasswordRecovery: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

LoginContainer.defaultProps = {
  errors: null,
  loading: false,
}

export default LoginContainer
