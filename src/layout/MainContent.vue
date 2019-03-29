<template>
	<div class="layout__main-content">
		<div class="layout__main-view">
			<router-view></router-view>
		</div>
	</div>
</template>

<style>
.layout__main-content {
	width: 100%;
	padding: 15px;
	height: calc(100vh - 60px);
	overflow-y: scroll;
	background-color: #f5f8fa;
}
.layout__main-view {
	padding: 10px 10px 0;
	background-color: #fefefe;
}
</style>
