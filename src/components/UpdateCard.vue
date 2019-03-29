<template>
	<div class="update-card">
		<h2 class="update-card__title">{{itemTitle}}</h2>
		<div class="update-card__body">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UpdateCard',
	props: {
		itemTitle: {
			type: String,
			required: true,
		},
	},
}
</script>

<style scoped>
.update-card {
	width: 100%;
	padding-left: 15px;
}

.update-card__title {
	height: 60px;
	line-height: 60px;
	font-weight: 650px;
}

.update-card .update-card__body {
	display: flex;
	flex-wrap: wrap;
}
.update-card >>> .ant-form-vertical {
	display: flex;
	flex-wrap: wrap;
}
.update-card >>> .ant-form-item
{
	width: 3rem !important;
}
.update-card >>> .ant-form-item .ant-calendar-picker {
	width: 100% !important;
}
.update-card >>> .ant-form-item .ant-select-selection,
.update-card >>> .ant-form-item .ant-select-selection__rendered
{
	height: 40px;
	line-height: 40px;
}
.update-card >>> .ant-form-item {
	margin-left: 0.72rem;
}
/* 每行 3 个，每行第一项 margin-left: 0; */
.update-card >>> .ant-form-item:nth-child(3n + 1) {
	margin-left: 0;
}
.update-card >>> .ant-form-item .ant-input,
.update-card >>> .ant-form-item-control .ant-btn
{
	height: 40px;
}
</style>
