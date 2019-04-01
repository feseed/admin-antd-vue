<template>
	<div class="layout__main-content">
		<div class="main-content__header-mask"></div>
		<div class="layout__main-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<style scoped>
.layout__main-content {
	width: 100%;
	height: calc(100vh - 60px);
	position: relative;
	overflow-y: scroll;
	background-color: #f5f8fa;
}
.layout__main-content .main-content__header-mask {
	width: 100%;
	height: 50px;
	position: absolute;
	top: 3px;
	left: 0;
	background-color: #fff;
	z-index: 1;
}
.layout__main-view {
	position: relative;
	width: 11rem;
	margin: 0 auto;
	z-index: 2;
}
</style>
