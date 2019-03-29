import axios from 'axios'

export default {
	// 登陆
	Member_loginPage ({ commit }, params) {
		return axios.post(`${params.url}`, params)
			.then(function (response) {
				return response
			}).catch(error => {
				console.log(error)
			})
	}, // 退出登陆
	Member_logOut ({ commit }, params) {
		return axios.get(`${params.url}?access_token=` + params.access_token)
			.then(function (response) {
				return response
			}).catch(error => {
				console.log(error)
			})
	},
	// 修改权限端用户密码
	Member_ModifyPwd ({ commit }, params) {
		return axios.post(`${params.url}`, params)
			.then(function (response) {
				return response
			}).catch(error => {
				console.log(error)
			})
	}, //  聚合到首页面
	Member_firstPage ({ commit }, params) {
		return axios.get(`${params.url}?access_token=` + params.access_token + '&business_id=' + params.business_id + '&expires=' + params.expires)
			.then(function (response) {
				return response
			}).catch(error => {
				console.log(error)
			})
	},
	// 修改权限端用户密码
	Find_Page ({ commit }, params) {
		return axios.post(`${params.url}`, params)
			.then(function (response) {
				return response
			}).catch(error => {
				console.log(error)
			})
	},
}
