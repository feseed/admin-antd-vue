<template>
	<section>
		<header-nav title="Demo 测试页" @on-refresh="handleRefresh" refresh></header-nav>
		<!-- 头部状态 -->
		<data-status-list :statusList="dataStatusList" @on-click="onStatusClick"></data-status-list>
		<!-- 头部搜所 -->
		<div class="demo__content__header">
			<query-conditions @on-search="actionSearch" @on-reset="resetForm">
				<a-form :form="form" layout="inline">
					<a-row :gutter="24">
						<a-col :span="8">
							<a-form-item label="条件 01">
								<a-input
									v-decorator="rules.query01"
									placeholder="请输入"
								/>
							</a-form-item>
						</a-col>
						<a-col :span="8">
							<a-form-item label="条件 02">
								<a-input
									v-decorator="rules.query01"
									placeholder="请输入"
								/>
							</a-form-item>
						</a-col>
						<a-col :span="8">
							<a-form-item label="条件 03">
								<a-input
									v-decorator="rules.query01"
									placeholder="请输入"
								/>
							</a-form-item>
						</a-col>
					</a-row>

					<a-row :gutter="24">
						<a-col :span="8">
							<a-form-item label="条件件件 04">
								<a-input
									v-decorator="rules.query01"
									placeholder="请输入"
								/>
							</a-form-item>
						</a-col>
						<a-col :span="8">
							<a-form-item label="时间">
								<a-date-picker @change="onChange" />
							</a-form-item>
						</a-col>
						<a-col :span="8">
							<a-form-item label="条件 06">
								<a-input
									v-decorator="rules.query01"
									placeholder="请输入"
								/>
							</a-form-item>
						</a-col>
					</a-row>
				</a-form>
			</query-conditions>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Demo',
	data () {
		return {
			form: this.$form.createForm(this),
			// 列表头部状态
			dataStatusList: [
				{ color: '#58A3F7', text: '全部信息', value: 2000 },
				{ color: '#FFA847', text: '未提交', value: 2000 },
				{ color: '#FFA847', text: '待审核', value: 2000 },
				{ color: '#8167F5', text: '已上架', value: 2000 },
				{ color: '#4BCED0', text: '未上架', value: 2000 },
				{ color: '#D9001B', text: '未通过', value: 2000 },
			],
			rules: {
				query01: [
					'query01',
					{
						rules: [{
							message: 'Input something!',
						}],
					}
				],
			}
		}
	},
	mounted () {

	},
	methods: {
		handleRefresh () {
			console.log('handle Refresh')
		},
		onStatusClick (statusItem) {
			console.log('onStatusClick: ', statusItem)
		},
		actionSearch () {
			console.log('actionSearch: ')
		},
		resetForm () {
			console.log('resetForm: ')
		},
		onChange(date, dateString) {
			console.log('date change', date, dateString);
		}
	},
}
</script>
