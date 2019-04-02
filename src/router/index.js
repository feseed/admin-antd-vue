import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'
// 路由辅助组件
import LayoutAider from '@/layout/LayoutAider'

Vue.use(Router)

// 所有路由规则
export const routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/Login'),
	},
	{
		path: '/',
		component: Layout,
		children: [
			// Demo Page
			{
				path: '/demoM',
				name: 'demoM',
				component: LayoutAider,
				children: [
					{
						path: '/demoM/demo',
						name: 'demo',
						component: () => import('@/pages/demo/Demo'),
					},
					{
						path: '/demoM/demoInfo',
						name: 'demoInfo',
						component: () => import('@/pages/demo/DemoInfo'),
					},
					{
						path: '/demoM/demoUpdate/:id?',
						name: 'demoUpdate',
						component: () => import('@/pages/demo/DemoUpdate'),
					},
					{
						path: '/demoM/demoTemp',
						name: 'demoTemp',
						component: LayoutAider,
						children: [
							{
								path: '/demoM/demoTemp/demoChild',
								name: 'demoChild',
								component: () => import('@/pages/demo/DemoChild')
							},
							{
								path: '/demoM/demoTemp/demoChildUpdate',
								name: 'demoChildUpdate',
								component: () => import('@/pages/demo/DemoChildUpdate')
							},
						],
					},
					// {
					// 	path: 'demoAdd',
					// 	name: 'demoAdd',
					// 	component: () => import('@/pages/demo/DemoAdd'),
					// },
				],
			}
		],
	},
	// 404 Page
	{
		path: '*',
		name: 'NotFound',
		hidden: true,
		component: () => import('@/pages/NotFound'),
	},
]

export default new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior: () => ({ y: 0 }),
	routes,
})
