const initialState = {
	addresses: [],
	donate: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'GET_ADDRESSES':
			return {...state, donate: action.payload}
		case 'GET_DONATIONS':
    	return {...state, donate: action.payload}
		default:
			return state
	}
}