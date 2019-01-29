import { applyMiddleware, createStore } from 'redux'

import { createEpicMiddleware } from 'redux-observable'

import { rootEpic, rootReducer } from './pages/actions'

const epicMiddleware = createEpicMiddleware()

export default function configureStore () {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)

  return store
}
