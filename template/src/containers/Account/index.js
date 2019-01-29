import React from 'react'
import PropTypes from 'prop-types'
import {
  Landing,
  LandingPrimarySection,
  LandingSecondarySection,
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
        <div className={styles.logo}>
          <Logo alt={t('landing.logo')} height="200px" />
        </div>
        {primaryContent}
      </div>
    </LandingPrimarySection>
    <LandingSecondarySection>
      <div className={styles.columnContainer}>{secondaryContent}</div>
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
