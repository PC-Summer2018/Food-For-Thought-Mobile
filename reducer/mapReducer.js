const initialState = {
	addresses: []
}

export default function(state = initialState, action) {
	switch(aciton.type) {
		case 'GET_ADDRESSES':
			return {...state, donate: action.payload}
		default:
			return state
	}
}