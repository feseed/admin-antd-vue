<template>
	<section class="layout">
		<sider-bar></sider-bar>
		<div class="layout__main">
			<sh-header></sh-header>
			<main-content></main-content>
		</div>
	</section>
</template>

<script>
import SiderBar from './components/SiderBar'
import ShHeader from './components/ShHeader'
// import ShBreadcrumb from './components/ShBreadcrumb'
import MainContent from './MainContent'

export default {
	name: 'Layout',

	computed: {
		// 获取当前路由层级
		currentPathLevel () {
			return this.generatePathLevel(this.$route)
		},
	},

	components: {
		SiderBar,
		ShHeader,
		// ShBreadcrumb,
		MainContent,
	},

	methods: {
		// 生成当前路由层级
		generatePathLevel (toRoute) {
			return toRoute.matched.filter(item => item.meta.title).map(matchedItem => {
				return {
					name: matchedItem.meta.title,
				}
			})
		},
	},
}
</script>

<style>
.layout {
	display: flex;
	flex-wrap: wrap;
}
.layout .layout__main {
	overflow: hidden;
	height: 100vh;
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	width: 100%;
}
</style>
