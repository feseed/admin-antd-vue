<template lang="pug">
	a-locale-provider(:locale="locale")
		div#app
			router-view
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
	name: 'App',
	data () {
		return {
			locale: zhCN,
		}
	},
}
</script>


<style lang="stylus">
	#app
		font-family 'Avenir', Helvetica, Arial, sans-serif
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
		color #2c3e50
</style>
