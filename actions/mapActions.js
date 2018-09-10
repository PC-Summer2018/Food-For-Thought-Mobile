import axios from 'axios'
import store from '../store'

export function getAddresses() {
	axios.get('/api/donating/pending/addresses').then(data => {
		store.dispatch({
			type: 'GET_ADDRESSES',
			payload: data
		})
	})
}
