// rem 适配
import '@/utils/flexible'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'

import '@/plugins/axios'
import '@/router/hook'
// 初始化全局组件
import '@/components/index'

// global css
import './styles/common/minireset.css'
import 'ant-design-vue/dist/antd.css'

Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
