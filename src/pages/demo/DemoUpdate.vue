<template>
	<v-form direction="horizontal" :model="ruleForm" :rules="rules" ref="ruleForm">
		<v-form-item label="活动名称" :label-col="labelCol" :wrapper-col="wrapperCol" prop="name" has-feedback>
			<v-input size="large" v-model="ruleForm.name"></v-input>
		</v-form-item>
		<v-form-item label="活动区域" :label-col="labelCol" :wrapper-col="wrapperCol" prop="region">
			<v-select v-model="ruleForm.region" placeholder="请选择活动区域" notfound="无法找到" :data="[{value: '1', label: '区域1'}, {value: '2', label: '区域2'}]"></v-select>
		</v-form-item>
		<v-form-item label="活动时间" :label-col="labelCol" :wrapper-col="wrapperCol" prop="date">
			<v-date-picker v-model="ruleForm.date"></v-date-picker>
		</v-form-item>
		<v-form-item label="即时配送" :label-col="labelCol" :wrapper-col="wrapperCol">
			<v-switch v-model="ruleForm.delivery"></v-switch>
		</v-form-item>
		<v-form-item label="活动性质" :label-col="labelCol" :wrapper-col="wrapperCol" prop="type">
			<v-checkbox-group v-model="ruleForm.type" :data="checkboxOpt"></v-checkbox-group>
		</v-form-item>
		<v-form-item label="特殊资源" :label-col="labelCol" :wrapper-col="wrapperCol" prop="resource">
			<v-radio-group v-model="ruleForm.resource" :data="[{value: '1', text: '线上品牌商赞助'},{value: '2', text: '线下场地免费'}]"></v-radio-group>
		</v-form-item>
		<v-form-item label="活动形式" :label-col="labelCol" :wrapper-col="wrapperCol" prop="desc">
			<v-input v-model="ruleForm.desc" type="textarea"></v-input>
		</v-form-item>
		<v-form-item :wrapper-col="{offset:6, span: 14 }">
			<v-button type="primary" style="margin-right:10px" @click.prevent="submitForm('ruleForm')">立即创建</v-button>
			<v-button type="ghost" @click.prevent="resetForm('ruleForm')">重置</v-button>
		</v-form-item>
	</v-form>
</template>
<script>
export default {
	data: () => ({
		ruleForm: {
			name: '',
			region: '',
			date: '',
			delivery: false,
			type: [],
			resource: '',
			desc: '',
		},
		rules: {
			name: [{
				required: true,
				message: '请输入活动名称',
			}],
			region: [{
				required: true,
				message: '请选择活动区域',
			}],
			date: [{
				required: true,
				message: '请选择日期',
			}],
			type: [{
				type: 'array',
				required: true,
				message: '请至少选择一个活动性质',
			}],
			resource: [{
				required: true,
				message: '请选择活动资源',
			}],
			desc: [{
				required: true,
				message: '请填写活动形式',
			}],
		},
		checkboxOpt: [{
			label: '美食/餐厅线上活动',
			value: '1',
		},
		{
			label: '地推活动',
			value: '2',
		},
		{
			label: '线下主题活动',
			value: '3',
		},
		{
			label: '单纯品牌曝光',
			value: '4',
		},
		],
		labelCol: {
			span: 6,
		},
		wrapperCol: {
			span: 14,
		},
	}),
	methods: {
		submitForm (formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!')
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		resetForm (formName) {
			this.$refs[formName].resetFields()
		},
	},
}
</script>
