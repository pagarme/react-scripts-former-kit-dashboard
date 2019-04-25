import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'

class FormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const { result } = this.state
    const {
      children,
      className,
      customErrorProp,
      data,
      validation,
    } = this.props
    return (
      <div>
        <Form
          onSubmit={formResult => this.setState({ result: formResult })}
          data={data}
          customErrorProp={customErrorProp}
          validation={validation}
          className={className}
        >
          {children}
        </Form>

        {result && (
          <pre>
            <code>
              Result:<br />
              {JSON.stringify(result, null, 2)}
            </code>
          </pre>
        )}
      </div>
    )
  }
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  customErrorProp: PropTypes.string,
  data: PropTypes.shape({}),
  validation: PropTypes.shape({}),
}

FormContainer.defaultProps = {
  className: '',
  customErrorProp: '',
  data: {},
  validation: {},
}

export default FormContainer
