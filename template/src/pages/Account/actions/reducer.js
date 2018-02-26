import {
  merge,
} from 'ramda'

import { LOGIN_REQUEST, LOGIN_RECEIVE, LOGOUT_REQUEST } from '.'

const initialState = {
  loading: false,
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return merge(state, { loading: true, errors: null })
    }

    case LOGIN_RECEIVE: {
      if (action.error) {
        return merge(
          state,
          {
            token: undefined,
            errors: { password: action.payload.message },
            loading: false,
          }
        )
      }

      return merge(
        state,
        {
          token: action.payload.token,
          errors: undefined,
          loading: false,
        }
      )
    }

    case LOGOUT_REQUEST: {
      return initialState
    }

    default:
      return state
  }
}
