import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'

class FormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={result => this.setState({ result })}
          data={this.props.data}
          customErrorProp={this.props.customErrorProp}
          validation={this.props.validation}
          className={this.props.className}
        >
          {this.props.children}
        </Form>

        {this.state.result && (
          <pre>
            <code>
              Result:<br />
              {JSON.stringify(this.state.result, null, 2)}
            </code>
          </pre>
        )}
      </div>
    )
  }
}

FormContainer.propTypes = {
  data: PropTypes.shape({}),
  customErrorProp: PropTypes.string,
  validation: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

FormContainer.defaultProps = {
  data: {},
  customErrorProp: '',
  validation: {},
  className: '',
}

export default FormContainer
