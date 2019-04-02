<template>
	<div class="update-panel">
		<h2 class="update-panel__header">
			<span class="header__title">{{title}}</span>
			<span>
				<b>*</b>
				为必填项
			</span>
		</h2>
		<div class="update-panel__body">
			<slot></slot>
		</div>
		<div class="update-panel__footer">
			<a-button
				@click="handleSubmit"
				:loading="isLoading"
				type="primary"
				class="footer__submit"
			>
				提交
			</a-button>
			<!-- <a @click="handleSaveAsDraft">保存为草稿</a> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'UpdatePanel',
	props: {
		title: {
			type: String,
			required: true,
		},
		// 提交按钮是否可以点击
		isLoading: {
			type: Boolean,
			default: false,
			// required: true,
		},
	},
	methods: {
		handleSubmit () {
			if (this.isLoading) return
			this.$emit('on-submit')
		},
		// 保存为草稿
		handleSaveAsDraft () {
			this.$emit('on-save-as-draft')
		},
	},
}
</script>

<style scoped>
.update-panel {
	background: #fff;
	padding: 20px;
	padding-top: 0;
	font-size: 14px;
}
.update-panel__header .header__title {
	font-weight: 650px;
}
.update-panel__header {
	font-size: 14px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.update-panel__header b {
	color: red;
}
.update-panel__footer {
	display: flex;
	justify-content: center;
	align-items: center;
}
.update-panel__footer .footer__submit {
	width: 140px;
	height: 40px;
	font-size: 14px;
}
</style>
