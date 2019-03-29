import axios from 'axios'
import { notification } from 'ant-design-vue'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API

// http request 拦截器
axios.interceptors.request.use(config => {
	let accessToken = localStorage.getItem('AccessToken')
	if (config.url.indexOf('loginGetPermissions') !== -1 || config.url.indexOf('firstPage') !== -1) {
		return config
	} else if (accessToken) {
		config.headers['token'] = accessToken
		// config.headers['userId'] = userId
		// config.headers['path'] = localStorage.getItem('CRMPath')
	}
	return config
},
err => Promise.reject(err),
)

// 响应拦截器
axios.interceptors.response.use(function (resp) {
	if (resp.data.code === 1 && resp.data.msg.indexOf('非法请求') > -1) {
		localStorage.clear()
		notification.warning({
			description: '非法请求或 token 失效',
		})
		window.setTimeout(() => {
			// window.location.href = API.Member_rms_middleGround_login
		}, 1000 * 2)
	} else if (resp.data.code === 1) {
		notification.warning({
			message: '提示',
			description: resp.data.data,
		})
	}
	return resp.data
}, function (error) {
	// 对响应错误做点什么
	console.error(error)
	notification.error({
		message: '提示',
		duration: 2,
		description: '响应失败！',
	})
	return Promise.reject(error)
})
