<template>
	<div class="info-card">
		<div class="info-card__header">{{title}}</div>
		<slot v-if="isTableList"></slot>
		<table class="info-card__body" v-else>
			<slot></slot>
		</table>
	</div>
</template>

<script>
export default {
	name: 'InfoCard',
	props: {
		isTableList: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
		},
	},
}
</script>

<style scoped>
.info-card {
	background-color: #fff;
	margin: 15px 0;
	padding-bottom: 20px;
}
.info-card__header {
	height: 50px;
	line-height: 50px;
	font-size: 16px;
	font-weight: 650px;
	padding-left: 20px;
	border-bottom: 1px solid #E4E4E4;
	margin-bottom: 20px;
}
.info-card__body {
	table-layout: fixed;
	margin: 0 auto;
	margin-left: 0.295rem;
}
.info-card__body tr td {
	padding: 10px;
	width: 1.3rem;
	border: 1px  solid #E4E4E4;
}
.info-card__body tr td:nth-child(odd) {
	width: 1.3rem;
	text-align: right;
	background-color: #F2F2F2;
}
.info-card__body tr td:nth-child(even) {
	width: 2.17rem;
}
</style>
