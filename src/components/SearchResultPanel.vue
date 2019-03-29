<template>
	<div class="search-result-panel">
		<div class="search-result__header">
			<span>查询结果</span>
			<div class="search-result__header__action">
				<slot name="actionHeader"></slot>
			</div>
		</div>
		<!-- table 表格数据插槽 -->
		<slot></slot>
		<!-- table 尾部插槽 -->
		<div class="search-result__footer__action">
			<slot name="actionFooter"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SearchResultPanel',
}
</script>

<style scoped>
.search-result-panel {
	margin-top: 20px;
	padding-bottom: 20px;
	background-color: #fff;
}
.search-result-panel .search-result__header {
	display: flex;
	height: 60px;
	font-weight: 650px;
	font-size: 14px;
	padding-left: 10px;
	padding-right: 15px;
	align-items: center;
	justify-content: space-between;
}
.search-result__header__action,
.search-result__header__action >>> .ant-select,
.search-result__header__action >>> .ant-select-selection,
.search-result__header__action >>> .ant-select-selection__rendered
{
	height: 35px !important;
}
.search-result__header__action {
	display: flex;
	align-items: center;
	overflow: hidden;
}

.search-result__header__action >>> .ant-btn {
	height: 35px;
	line-height: 35px;
	margin-left: 10px;
	margin-bottom: 0 !important;
}
.search-result__footer__action {
	padding: 0 8px;
}
.search-result__footer__action > label {
	padding: 4px 8px;
	border-radius: 4px;
	border: 1px solid rgb(217, 217, 217);
}
.search-result-panel >>> .ant-table-footer {
	padding: 10px;
}
</style>
