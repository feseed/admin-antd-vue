<template>
	<div class="login">
		<a-form direction="horizontal" :model="customForm" :form="form">
			<a-form-item label="用户名" :label-col="labelCol" :wrapper-col="wrapperCol">
				<a-input type="text" v-decorator="customRules.username"></a-input>
			</a-form-item>
			<a-form-item label="密码" :label-col="labelCol" :wrapper-col="wrapperCol">
				<a-input type="password" v-decorator="customRules.password"></a-input>
			</a-form-item>
			<a-form-item :wrapper-col="{ offset:6, span: 14 }">
				<a-button type="primary" style="margin-right:10px" @click.prevent="submitForm()">提交</a-button>
			</a-form-item>
		</a-form>
	</div>
</template>

<script>
import { storage } from '@gauseen/tools'
import { actionLogin } from '@/api/permission.js'
const localStore = storage()

export default {
	data () {
		return {
			form: this.$form.createForm(this),
			customForm: {
				username: '',
				password: '',
			},
			customRules: {
				username: [
					'username',
					{
						rules: [
							{
								required: true,
								message: '请输入用户名',
							}
						],
					},
				],
				password: [
					'password',
					{
						rules: [
							{
								required: true,
								message: '请输入密码',
							}
						],
					},
				],
			},
			labelCol: {
				span: 6,
			},
			wrapperCol: {
				span: 14,
			},
		}
	},
	methods: {
		// 提交验证
		submitForm (formName) {
			this.form.validateFields((err, values) => {
				if (!err) {
					// 开始登陆
					actionLogin(this.customForm).then(res => {
						if (res.code === 0) {
							localStore.set('AccessToken', res.data.token)
							localStore.set('Expires', res.data.expires)
							this.$router.push('/demoM/demo')
						}
					})
				} else {
					this.$notification.warning({
						message: '提示',
						description: '请输入用户名或密码！',
					})
					return false
				}
			})
		},
	},
}
</script>

<style scoped>
.login {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
