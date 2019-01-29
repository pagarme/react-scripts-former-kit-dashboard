import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'

import {
  Card,
  CardContent,
  CardTitle,
  CardActions,
  Button,
  FormInput,
  FormDropdown,
  RadioGroup,
} from 'former-kit'

import { required, isNumber } from './validations'
import style from './style.css'

class FormExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <Card>
          <Form
            onSubmit={result => this.setState({ result })}
            customErrorProp="error"
            validation={{
              name: required,
              projectCount: [required, isNumber],
            }}
          >
            <CardTitle title="Form input style" />
            <CardContent className={style.form}>
              <FormInput type="text" name="name" label="Name" />
              <FormInput
                type="number"
                name="projectCount"
                label="Number of projects"
                placeholder="Type the number of projects"
              />
              <FormDropdown
                name="companies"
                options={this.props.companies}
                placeholder="Select a company"
              />
              <RadioGroup
                name="projects"
                options={this.props.projects}
                label="Select another project"
              />
            </CardContent>
            <CardActions>
              <Button type="submit">Submit!</Button>
            </CardActions>
          </Form>
        </Card>
        <Card>
          <CardTitle title="Form Data" />
          {this.state.result &&
            <CardContent>
              <pre>
                <code>{JSON.stringify(this.state.result, null, 2)}</code>
              </pre>
            </CardContent>
          }
        </Card>
      </Fragment>
    )
  }
}

FormExample.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
}

export default FormExample
