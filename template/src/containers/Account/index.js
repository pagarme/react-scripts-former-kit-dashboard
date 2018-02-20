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
  primaryContent,
  secondaryContent,
}) => (
  <Landing className={styles.container}>
    <LandingPrimarySection base={base}>
      <div className={styles.columnContainer}>
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
  primaryContent: PropTypes.node.isRequired,
  secondaryContent: PropTypes.node.isRequired,
}

Account.defaultProps = {
  base: 'dark',
}

export default Account
