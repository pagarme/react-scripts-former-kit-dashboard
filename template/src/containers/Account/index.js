import React from 'react'
import PropTypes from 'prop-types'
import {
  Landing,
  LandingPrimarySection,
  LandingSecondarySection,
  Spacing,
} from 'former-kit'
import Logo from '../../components/Logo'
import styles from './style.css'

const Account = ({
  base,
  primaryContent,
  secondaryContent,
  t,
}) => (
  <Landing className={styles.container}>
    <LandingPrimarySection base={base}>
      <div className={styles.columnContainer}>
        <Spacing />
        <div className={styles.logo}>
          <Logo alt={t('landing.logo')} height="200px" />
        </div>
        <Spacing size="large" />
        {primaryContent}
        <Spacing />
      </div>
    </LandingPrimarySection>
    <LandingSecondarySection>
      <div className={styles.columnContainer}>
        <Spacing />
        {secondaryContent}
        <Spacing />
      </div>
    </LandingSecondarySection>
  </Landing>
)

Account.propTypes = {
  base: PropTypes.string,
  primaryContent: PropTypes.node.isRequired,
  secondaryContent: PropTypes.node.isRequired,
  t: PropTypes.func.isRequired,
}

Account.defaultProps = {
  base: 'dark',
}

export default Account
