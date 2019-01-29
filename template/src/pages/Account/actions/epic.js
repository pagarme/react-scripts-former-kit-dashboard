import { mergeMap } from 'rxjs/operators'
import { empty } from 'rxjs/index'
import { combineEpics, ofType } from 'redux-observable'
import {
  LOGIN_RECEIVE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  receiveLogin,
} from '.'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
const method = 'POST'

const throwError = body => new Error(body.error)

const loginEpic = action$ =>
  action$
    .pipe(
      ofType(LOGIN_REQUEST),
      mergeMap((action) => {
        // eslint-disable-next-line no-undef
        const token = window.localStorage.getItem('token')
        if (token && token !== 'undefined') {
          return Promise
            .resolve({ token })
            .then(receiveLogin)
        }
        // eslint-disable-next-line no-undef
        return window.fetch('https://reqres.in/api/login', {
          body: JSON.stringify(action.payload),
          headers,
          method,
        })
          .then((res) => {
            if (res.ok) return res.json()
            return res.json().then(throwError)
          })
          .then(receiveLogin)
          .catch(body => throwError({ body }))
      })
    )

const accountEpic = action$ =>
  action$
    .pipe(
      ofType(LOGIN_RECEIVE),
      mergeMap((action) => {
        if (action.payload.token) {
          // eslint-disable-next-line no-undef
          window.localStorage.setItem('token', action.payload.token)
        }

        return empty()
      })
    )

const logoutEpic = action$ =>
  action$
    .pipe(
      ofType(LOGOUT_REQUEST),
      mergeMap(() => {
        // eslint-disable-next-line no-undef
        window.localStorage.removeItem('token')

        return empty()
      })
    )

export default combineEpics(loginEpic, accountEpic, logoutEpic)
