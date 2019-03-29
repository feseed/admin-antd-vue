import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 侧边菜单栏是否折叠
		collapsed: false,
		// 面包屑导航数据
		breadcrumbList: [],
		// 侧边菜单栏数据
		dynamicMenus: [],
		// 所有权限数据
		dynamicPermissions: [],
	},

	actions,
	mutations,

	modules: {
		todo,
	},
})
