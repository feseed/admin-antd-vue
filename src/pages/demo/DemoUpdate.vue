<template>
	<section class="demo-update">
		<header-nav title="Demo 更新页"></header-nav>
		<update-panel
			title="新增商品"
			@on-submit="submit"
			@on-save-as-draft="saveAsDraft"
			:isLoading="isLoading"
		>
			<a-form :form="form">
				<update-card itemTitle="情况一：">
					<a-form-item
						label="任务名"
					>
						<a-input placeholder="请输入任务名称" v-decorator="[ 'demoInfo.name', { initialValue: demoInfo.name, rules: [{ required: true, message: '请输入任务名称', whitespace: true}]} ]" />
					</a-form-item>
					<a-form-item
						label="任务描述"
					>
						<a-input placeholder="请输入任务描述" v-decorator="[ 'demoInfo.description', {rules: [{ required: true, message: '请输入任务描述', whitespace: true}]} ]" />
					</a-form-item>
					<a-form-item
						label="执行人"
					>
						<a-select
							placeholder="请选择执行人"
							v-decorator="[
								'demoInfo.executor',
								{rules: [{ required: true, message: '请选择执行人'}]}
							]"
						>
							<a-select-option value="iras">iras</a-select-option>
							<a-select-option value="gauseen">gauseen</a-select-option>
						</a-select>
					</a-form-item>
				</update-card>

				<update-card itemTitle="情况二：">
					<a-form-item
						label="Emmm"
					>
						<a-input placeholder="Emmm" v-decorator="[ 'demoInfo.emmm', { initialValue: demoInfo.emmm, rules: [{ required: true, message: 'Emmm', whitespace: true}] } ]" />
					</a-form-item>
				</update-card>
				<update-card itemTitle="情况三：">
					<a-form-item
						label="Haha"
					>
						<a-input placeholder="haha" v-decorator="[ 'demoInfo.haha', { initialValue: demoInfo.haha, rules: [{ required: true, message: '请键入 haha', whitespace: true}]} ]" />
					</a-form-item>
				</update-card>
			</a-form>
		</update-panel>
	</section>
</template>
<script>
export default {
	data () {
		return {
			form: this.$form.createForm(this),
			// 给提交按钮添加 loading 效果
			isLoading: false,
			demoInfo: {
				name: '初始化的 name',
			},
		}
	},
	mounted () {
		// 获取传参值
		console.log('DemoUpdate Page item id = ', this.$route.params.id)
		if (this.$route.params.id) {
			this.fetchInfo()
		}
	},
	methods: {
		fetchInfo () {
			window.setTimeout(() => {
				this.demoInfo = {
					name: '回显 name',
					emmm: '回显 emmm',
					haha: '回显 haha',
				}
			}, 2 * 1000)
		},
		// 提交事件
		submit () {
			// 验证是否通过
			// TODO: 更新于 2019-04-02
			 this.form.validateFieldsAndScroll((error, values) => {
				if (error) return
				this.isLoading = true
				console.log('表单数据: ', values)
				// 模拟异步操作
				window.setTimeout(() => {
					this.isLoading = false
					// this.$router.push('/demoM/demo')
				}, 1000 * 2)
			})

		},
		saveAsDraft () {
			window.alert('saveAsDraft')
		},
	},
}
</script>
