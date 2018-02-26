import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'

import { receiveLogin, LOGIN_REQUEST } from '.'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}
const method = 'POST'

const throwError = body => new Error(body.error)

const accountEpic = action$ =>
  action$
    .ofType(LOGIN_REQUEST)
    .mergeMap(action =>
      fetch(
        'https://reqres.in/api/login',
        { body: JSON.stringify(action.payload), headers, method }
      )
        .then((res) => {
          if (res.ok) return res.json()
          return res.json().then(throwError)
        })
        .catch(body => throwError({ body }))

    )
    .map(receiveLogin)

export default accountEpic
