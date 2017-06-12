import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  typeOf window === 'object' && typeOf window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
