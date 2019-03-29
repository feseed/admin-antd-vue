<template>
<div class="layout__breadcrumb">
	<v-breadcrumb>
		<v-breadcrumb-item v-for="item in breadcrumbList" :key="item.name">{{item.name}}</v-breadcrumb-item>
	</v-breadcrumb>
</div>
</template>

<script>
export default {
	name: 'ShBreadcrumb',
	props: {
		breadcrumbList: {
			type: Array,
			default: () => {},
		},
	},
}
</script>

<style scoped>
.layout__breadcrumb {
	flex: 1;
	height: 40px;
	line-height: 40px;
	border-top: 1px solid #e7ecf1;
	padding: 0 20px;
	text-align: left;
}
</style>
