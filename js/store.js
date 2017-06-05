import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, compose(
  typeOf window === 'object' && typeOf window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
))

export default store
