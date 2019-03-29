const path = require('path')
const baseApi = process.env.VUE_APP_BASE_API
const mockProjectId = process.env.VUE_APP_MOCK_PROJECT_ID

module.exports = {
	resolve (dir) {
		return path.join(__dirname, dir)
	},
	proxyTable: {
		// 开发环境代理
		[`${baseApi}/(?!mock)`]: {
			target: process.env.VUE_APP_DOMAIN || 'https://domain.com', // 测试环境
			changeOrigin: true,
		},
		// mock 数据代理
		[`${baseApi}/mock`]: {
			target: 'http://yapi.demo.qunar.com',
			changeOrigin: true,
			pathRewrite: {
				[`${baseApi}/mock`]: `/mock/${mockProjectId}${baseApi}`,
			},
		},
	},
	stylusOptions: {
		import: [
			path.join(__dirname, './src/styles/common/variables.styl'), // 一次性引入全局样式
		],
		paths: [
			path.join(__dirname, './src/styles/common/'),
			path.join(__dirname, './'),
		],
	},
}
