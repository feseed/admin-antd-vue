import axios from 'axios'

export function fetchDemoList (params) {
	return axios.get('mock/getList', params)
}
