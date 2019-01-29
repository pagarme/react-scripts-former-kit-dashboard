import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { translate } from 'react-i18next'
import { compose } from 'ramda'
import RegisteredPresentation from '../../containers/Account/RegisteredPresentation'

const enhanced = compose(translate(), withRouter)

class RegisteredPresentationPage extends PureComponent {
  constructor (props) {
    super(props)
    this.handleSignup = this.handleSignup.bind(this)
    this.handleLanguageChange = this.handleLanguageChange.bind(this)
  }

  handleLanguageChange (lang) {
    this.props.i18n.changeLanguage(lang)
  }

  handleSignup () {
    this.props.history.push('/account/signup')
  }

  render () {
    return (
      <RegisteredPresentation
        onGotoSignup={this.handleSignup}
        availableLanguages={[
          {
            title: 'English',
            value: 'en-US',
          },
          {
            title: 'Portuguese',
            value: 'pt',
          },
        ]}
        selectedLanguage={this.props.i18n.language}
        onLanguageChange={this.handleLanguageChange}
        t={this.props.t}
      />
    )
  }
}

RegisteredPresentationPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
  i18n: PropTypes.shape({
    changeLanguage: PropTypes.func,
    language: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  t: PropTypes.func.isRequired,
}

export default enhanced(RegisteredPresentationPage)
