import { createStore, combineReducers } from 'redux'

import mapReducer from './reducer/mapReducer'

const rootReducer = combineReducers({
	mapReducer: mapReducer,
})

const store = createStore(rootReducer)

export default store