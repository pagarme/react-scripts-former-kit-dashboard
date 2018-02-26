import {
  applyMiddleware,
  createStore,
} from 'redux'

import { createEpicMiddleware } from 'redux-observable'

import { rootEpic, rootReducer } from './pages/actions'

export default function configureStore () {
  return createStore(
    rootReducer,
    applyMiddleware(createEpicMiddleware(rootEpic))
  )
}
