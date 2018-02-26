import { createAction } from 'redux-actions'

export { default } from './reducer'
export { default as epic } from './epic'

export const LOGIN_REQUEST = 'pilot/account/LOGIN_REQUEST'
export const requestLogin = createAction(LOGIN_REQUEST)

export const LOGOUT_REQUEST = 'pilot/account/LOGOUT_REQUEST'
export const requestLogout = createAction(LOGOUT_REQUEST)

export const LOGIN_RECEIVE = 'pilot/account/LOGIN_RECEIVE'
export const receiveLogin = createAction(LOGIN_RECEIVE)

export const LOGOUT_RECEIVE = 'pilot/account/LOGOUT_RECEIVE'
export const receiveLogout = createAction(LOGOUT_RECEIVE)
