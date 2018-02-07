/* eslint-disable */

import React from 'react'
import classNames from 'classnames'

import {
  Button,
  FormInput,
  Login,
  LoginPrimarySection,
  LoginSecondarySection,
} from 'former-kit'

import styles from './style.css'

const LoginContainer = ({
  email,
  emailError,
  handleEmailChange,
  handleLogIn,
  handlePasswordChange,
  handleTokenChange,
  hasToken,
  password,
  passwordError,
  token,
  tokenError,
}) => (
  <Login className={styles.container}>
    <LoginPrimarySection>
      <div className={styles.columnContainer}>
        <form
          onSubmit={handleLogIn}
          className={styles.form}
        >
          <div className={styles.logo}>
            <img
              src=""
              alt="Pagar.me"
            />
          </div>
          <div className={styles.login}>
            <FormInput
              error={emailError}
              label="Email"
              name="email"
              onChange={handleEmailChange}
              placeholder="emaillegal@pagar.me"
              type="text"
              value={email}
            />
            <FormInput
              error={passwordError}
              label="Senha"
              name="password"
              onChange={handlePasswordChange}
              placeholder=""
              type="password"
              value={password}
            />
            { hasToken &&
              <Input
                error={tokenError}
                label="Token"
                name="token"
                onChange={handleTokenChange}
                placeholder="ABC123"
                type="text"
                value={token}
              />
            }
          </div>
          <div className={styles.loginActions}>
            <div className={styles.hugeButton} >
              <Button
                type="submit"
                size="large"
                fill="gradient"
              >
                Login
              </Button>
            </div>
            <a href="https://dashboard.pagar.me/#/forgot_password" >
              Redefinir senha
            </a>
          </div>
        </form>
      </div>
    </LoginPrimarySection>
    <LoginSecondarySection>
      <div className={styles.columnContainer}>
        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>
              Seja bem-vindo
            </h1>
            <span className={styles.uppercase}>
              à dashboard Pagar.me
            </span>
          </div>
          <p className={styles.paragraph}>
            A Dashboard Pagar.me é o painel de controle da sua operação.
            Através dela você tem acesso a diversos dados relevantes para
            seu dia a dia de trabalho, e também pode realizar diferentes
            ações cotidianas com facilidade, como estornos, consulta de
            saldo e mais.
          </p>
          <div className={classNames(styles.uppercase, styles.signIn)}>
            <p>
              <span>Faça login ao lado para acessar sua conta</span>
              <span>
                Ainda não tem uma conta?
                <a
                  href="https://dashboard.pagar.me/#/signup"
                  className={styles.signInLink}
                >
                  Cadastre-se
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </LoginSecondarySection>
  </Login>
)

export default LoginContainer
