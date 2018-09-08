import { createStore } from 'redux'
import mapReducer from './reducer/mapReducer'

const store = createStore(
	mapReducer
)

export default store