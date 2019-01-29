import { isNil } from 'ramda'

const isNumber = value =>
  (isNil(value) || value === ''
    ? 'Should be a number'
    : null
  )

const minimumAge = (value) => {
  if (!isNil(value) && value !== '') {
    return value < 21
      ? 'You are not allowed to drink'
      : null
  }

  return null
}

const required = value =>
  (isNil(value) || value === ''
    ? 'This field is required'
    : false
  )

export { isNumber, minimumAge, required }
