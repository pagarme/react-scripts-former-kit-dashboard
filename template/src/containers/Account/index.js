import React from 'react'
import PropTypes from 'prop-types'

import {
  Landing,
  LandingPrimarySection,
  LandingSecondarySection,
} from 'former-kit'

import styles from './style.css'

const Account = ({
  base,
  logo: Logo,
  primaryContent,
  secondaryContent,
}) => (
  <Landing className={styles.container}>
    <LandingPrimarySection base={base}>
      <div className={styles.columnContainer}>
        <div className={styles.logo}>
          <Logo height="200px" />
        </div>
        {primaryContent}
      </div>
    </LandingPrimarySection>
    <LandingSecondarySection>
      <div className={styles.columnContainer}>
        {secondaryContent}
      </div>
    </LandingSecondarySection>
  </Landing>
)

Account.propTypes = {
  base: PropTypes.string,
  logo: PropTypes.func.isRequired,
  primaryContent: PropTypes.node.isRequired,
  secondaryContent: PropTypes.node.isRequired,
}

Account.defaultProps = {
  base: 'dark',
}

export default Account
