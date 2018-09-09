import { createStore, combineReducers } from 'redux'

import donateReducer from './reducers/donateReducer.js'

const rootReducer = combineReducers({
	donateReducer: donateReducer,
})

const store = createStore(rootReducer)

export default store