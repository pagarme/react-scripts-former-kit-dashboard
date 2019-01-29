import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Col } from 'former-kit'

import Example1 from './Example1'
import Example2 from './Example2'
import style from './style.css'

const FormContainer = ({ companies, projects }) => (
  <Fragment>
    <Col className={style.column}>
      <Example1 companies={companies} projects={projects} />
    </Col>
    <Col className={style.column}>
      <Example2 companies={companies} projects={projects} />
    </Col>
  </Fragment>
)

FormContainer.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

export default FormContainer
