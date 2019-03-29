<template>
	<nav class="header-nav">
		<div class="header-nav__content">
			<div class="nav__content__left">
				<span>{{title}}</span>
			</div>
			<div class="nav__content__right">
				<a-button @click="$emit('on-refresh')" v-if="refresh" type="ghost" icon="sync" class="nav__content__right__sync">刷新</a-button>
				<a-button @click="handleBack" type="ghost" icon="left" class="nav__content__right__back">返回</a-button>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'HeaderNav',
	props: {
		title: {
			type: String,
			required: true,
		},
		// 是否显示刷新按钮
		refresh: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleBack () {
			this.$router.go(-1)
		},
	},
}
</script>

<style scoped>
.header-nav {
	height: 50px;
	line-height: 50px;
	margin: 10px -16px;
	margin-top: 3px;
	background-color: #fff;
	padding: 0 16px;
}
.header-nav__content {
	display: flex;
	justify-content: space-between;
}
.header-nav__content .nav__content__left {
	font-size: 16px;
	font-weight: 650;
}
.header-nav__content .nav__content__left > span {
	border-left: 4px solid #58A3F7;
	padding: 2px 0;
	padding-left: 4px;
}
.header-nav__content .nav__content__right >>> .ant-btn {
	height: 30px;
	line-height: 30px;
}
.header-nav__content .nav__content__right .nav__content__right__back {
	margin-left: 8px;
}
</style>
