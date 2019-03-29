import { isEmpty, storage } from '@gauseen/tools'
import router from './index'
import store from '@/store'
import { isProd } from '@/utils/isEnv'
import {
	ADD_DYNAMIC_MENUS,
	ADD_DYNAMIC_PERMISSIONS,
} from '@/store/mutation-types'

import {
	fetchMenusAndPermission,
} from '@/api/permission'

const localStore = storage()

// 权限验证白名单（免验证路径）
const whitelist = [
	'/login',
]

const routerJumpControl = next => {
	if (isProd()) {
		window.location.href = process.env.VUE_APP_member_rms_middleGround_login
	} else {
		next({ path: '/login' })
	}
}

router.beforeEach(async (to, from, next) => {
	let accessToken = to.query.token
	if (accessToken) {
		localStore.set('AccessToken', accessToken)
	} else {
		accessToken = localStore.get('AccessToken')
	}
	// 生产环境根路径时，跳转到聚合登录页面
	if (to.path === '/') {
		routerJumpControl(next)
		return
	}
	console.log('to: ', to)
	// 权限验证
	let isWhitelistPage = whitelist.includes(to.path)
	// 加载菜单 && 权限
	if (accessToken && !store.state.dynamicPermissions.length && !isWhitelistPage) {
		let dynamicPermission = await fetchMenusAndPermission()
		if (isEmpty(dynamicPermission)) {
			routerJumpControl(next)
			return
		}
		// 添加侧边菜单
		store.commit(ADD_DYNAMIC_MENUS, dynamicPermission.memuPermissions)
		store.commit(ADD_DYNAMIC_PERMISSIONS, dynamicPermission.permissions)
		next({ path: to.path, replace: true })
		return
	}
	let hasPermission = store.state.dynamicPermissions.some(item => to.path.indexOf(item.right_action) !== -1)
	if (hasPermission || isWhitelistPage) {
		next()
	} else {
		localStore.clearAll()
		routerJumpControl(next)
	}
})
