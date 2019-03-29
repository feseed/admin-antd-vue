import axios from 'axios'
import { obj2Params } from '@gauseen/tools'

// 登录接口
export const actionLogin = (params) => {
	return axios.post('mock/memberPermission/loginGetPermissions', params)
}

// 获取侧边菜单导航 && 权限列表（菜单、按钮权限）
export const fetchMenusAndPermission = () => {
	let accessToken = localStorage.getItem('AccessToken')
	let expires = localStorage.getItem('Expires')
	let params = {
		access_token: accessToken,
		expires: expires,
	}
	return axios.get(`mock/memberPermission/firstPage?${obj2Params(params)}`).then(res => res.data)
}
