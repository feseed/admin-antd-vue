const configUtils = require('./vue.config.utils')

module.exports = {
	// 基地址
	baseUrl: '/admin/',
	// runtimeCompiler: true,
	// webpack 配置
	chainWebpack: config => {
		config
			.externals('BMap')
		config.resolve
			.alias
			.set('rootDir', configUtils.resolve('./'))
	},
	// 代理
	devServer: {
		proxy: configUtils.proxyTable,
	},
	// css loader options
	css: {
		loaderOptions: {
			stylus: configUtils.stylusOptions,
		},
	},
	lintOnSave: false,
}
