import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'
import { Button, FormInput } from 'former-kit'

import styles from '../style.css'

const SignUpForm = ({ onSubmit, t }) => (
  <Form
    data={{
      company: '',
      email: '',
      name: '',
      password: '',
    }}
    onSubmit={onSubmit}
    className={styles.primaryContent}
  >
    <div className={styles.signIn}>
      <FormInput label={t('sign_up.name')} name="name" type="text" />
      <FormInput label={t('sign_up.company')} name="company" type="text" />
      <FormInput label={t('email')} name="email" type="text" />
      <FormInput label={t('password')} name="password" type="password" />
    </div>
    <div className={styles.actions}>
      <div className={styles.hugeButton}>
        <Button type="submit" size="large" fill="gradient">
          {t('sign_up.sign_up_action')}
        </Button>
      </div>
    </div>
  </Form>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default SignUpForm
