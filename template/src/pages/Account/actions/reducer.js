import { merge } from 'ramda'

import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGOUT_REQUEST } from '.'

const initialState = {
  loading: false,
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return merge(state, { errors: null, loading: true })
    }

    case LOGIN_RECEIVE: {
      if (action.error) {
        return merge(state, {
          errors: { password: action.payload.message },
          loading: false,
          token: undefined,
        })
      }

      return merge(state, {
        errors: undefined,
        loading: false,
        token: action.payload.token,
      })
    }

    case LOGOUT_REQUEST: {
      return initialState
    }

    default:
      return state
  }
}
