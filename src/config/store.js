import { createStore, applyMiddleware } from 'redux'

import reducers from '../store'

export default createStore(reducers, {})