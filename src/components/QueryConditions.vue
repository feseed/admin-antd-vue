<template>
	<!-- 头部查询条件 -->
	<div class="query-conditions">
		<div class="query-conditions__header">查询条件</div>
		<div class="query-conditions__form">
			<div class="conditions__form__left" :class="styleIsExpand">
				<slot></slot>
			</div>
			<div class="conditions__form__right">
				<a-button type="primary" @click="handleActionSearch">查 询</a-button>
				<a-button @click.prevent="resetForm()" class="form__right__reset">重 置</a-button>
				<a @click="handleExpand" href="javascript:void(0);">
					<span class="conditions__form__right--color">{{isExpandText}}</span>&nbsp;
					<a-icon :type="iconType"></a-icon>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QueryConditions',
	data () {
		return {
			// 是否展开查询条件
			isExpand: false,
		}
	},
	computed: {
		iconType () {
			return this.isExpand ? 'up' : 'down'
		},
		// 展开 OR 收起
		isExpandText () {
			return this.isExpand ? '收起' : '展开'
		},
		styleIsExpand () {
			return [ this.isExpand ? 'conditions__form__left--expand' : 'conditions__form__left--close' ]
		},
	},
	methods: {
		handleExpand () {
			this.isExpand = !this.isExpand
		},
		handleActionSearch () {
			this.$emit('on-search')
		},
		resetForm () {
			this.$emit('on-reset')
		},
	},
}
</script>

<style scoped>
.query-conditions {
	margin-top: 10px;
	background-color: #fff;
}
.query-conditions a {
	text-decoration: none;
}
.query-conditions__header {
	height: 50px;
	line-height: 50px;
	font-weight: 650px;
	font-size: 14px;
	padding-left: 10px;
	border-bottom: 1px solid rgb(233, 233, 233);
}
.query-conditions__form {
	display: flex;
}

.conditions__form__left {
	flex: 1;
	overflow: hidden;
	padding-left: 20px;
	padding-right: 10px;
}
/* 展开 */
.conditions__form__left--expand {
	height: auto;
}
/* 收起 */
.conditions__form__left--close {
	height: 74px;
}

.conditions__form__left >>> .ant-form-inline > .ant-row {
	margin: 20px 0;
}
.conditions__form__left >>> .ant-form-item {
	display: flex;
	margin: 0;
}
.conditions__form__left >>> .ant-form-item-control-wrapper {
	flex: 1;
}
.conditions__form__left >>> .ant-form-item-control-wrapper .ant-form-item-children,
.conditions__form__left >>> .ant-form-item-control-wrapper .ant-calendar-picker
{
	width: 100%;
}

.conditions__form__left >>> .ant-input,
.conditions__form__left >>> .ant-select-selection,
.conditions__form__left >>> .ant-select-selection__rendered,
.conditions__form__right >>> .ant-btn
{
	height: 35px !important;
	line-height: 35px !important;
}
.conditions__form__right {
	padding-top: 20px;
	width: 200px;
}
.conditions__form__right .form__right__reset {
	margin: 0 10px;
}
.conditions__form__right--color {
	color: rgb(24, 144, 255);
}
</style>
