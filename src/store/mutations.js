import {
	UPDATE_COLLAPSE,
	UPDATE_BREADCRUMBLIST,
	ADD_DYNAMIC_MENUS,
	ADD_DYNAMIC_PERMISSIONS,
} from '@/store/mutation-types'

export default {
	[UPDATE_COLLAPSE] (state) {
		state.collapsed = !state.collapsed
	},
	// 更新面包屑导航数据
	[UPDATE_BREADCRUMBLIST] (state, breadcrumbList) {
		state.breadcrumbList = breadcrumbList
	},
	// 添加侧边菜单
	[ADD_DYNAMIC_MENUS] (state, dynamicMenus) {
		state.dynamicMenus = dynamicMenus
	},
	// 添加所有权限数据
	[ADD_DYNAMIC_PERMISSIONS] (state, dynamicPermissions) {
		state.dynamicPermissions = dynamicPermissions
	},
}
