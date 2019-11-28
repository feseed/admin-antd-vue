import axios from 'axios'
import { notification } from 'ant-design-vue'

axios.defaults.baseURL = process.env.VUE_APP_BASE_API

// http request 拦截器
axios.interceptors.request.use(config => {
	// let accessToken = localStorage.getItem('AccessToken')
	return config
},
err => Promise.reject(err),
)

// 响应拦截器
axios.interceptors.response.use(function (res) {
	return res.data
}, function (error) {
	console.error(error)
	notification.error({
		message: '提示',
		duration: 2,
		description: '响应失败！',
	})
	return Promise.reject(error)
})
