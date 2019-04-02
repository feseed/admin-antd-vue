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
								<a-select defaultValue="gauseen" @change="handleChange">
									<a-select-option v-for="item in selectList" :key="item.value" :value="item.value" :disabled="item.disabled">
										{{item.text}}
									</a-select-option>
								</a-select>
							</a-form-item>
						</a-col>
					</a-row>
				</a-form>
			</query-conditions>

			<!-- 表格部分 -->
		<search-result-panel>
			<template slot="actionHeader">
				<a-button @click="handleEdit" icon="edit">修 改</a-button>
				<a-button icon="to-top">SAP 提报导出</a-button>
				<a-button icon="download">导入</a-button>
				<a-button @click="handleAdd" type="primary" icon="plus">新增</a-button>
			</template>

			<sh-table
				ref="shTable"
				:columns="columns"
				:loading="loading"
				:rowKey="record => record.id"
				:fetchData="fetchTableData"
				:rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
			>
				<div slot="operate" slot-scope="{ tableRow }">
					<a @click="handleTableInfo(tableRow)" href="javascript:void(0);"> Info </a>
					<a @click="handleTableUpdate(tableRow)" href="javascript:void(0);"> Update </a>
					<a @click="handleTableDelete(tableRow)" href="javascript:void(0);"> Delete </a>
				</div>
				<div slot="emmm" slot-scope="{ tableRow }">
					<a @click="handleTableEmmm(tableRow)" href="javascript:void(0);"> emmm </a>
				</div>
			</sh-table>
		</search-result-panel>
		</div>
	</section>
</template>

<script>
import { obj2Params } from '@gauseen/tools'
import { fetchDemoList } from '@/api/demo'

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
			selectList: [
				{ text: 'gauseen', value: 'gauseen' },
				{ text: 'iras', value: 'iras' },
				{ text: 'disabled', value: 'disabled', disabled: true },
				{ text: 'yimi', value: 'yimi' },
			],
			// 表格 列
			columns: [
				{ title: '操作', scopedSlots: { customRender: 'operate' } },
				{ title: '名字', dataIndex: 'goodsName' },
				{ title: '价格', dataIndex: 'goodsPrice' },
				{ title: '类型', dataIndex: 'goodsType' },
				{ title: '质量', dataIndex: 'quantity' },
				{ title: 'emmm', scopedSlots: { customRender: 'emmm' } },
			],
			selectedRowKeys: [],
			loading: false,
			rules: {
				query01: [
					'query01',
					{
						rules: [{
							message: 'Input something!',
						}],
					}
				],
			},
		}
	},
	mounted () {
	},
	methods: {
		handleRefresh () {
			console.log('handle Refresh')
			this.$refs.shTable.reload()
		},
		onStatusClick (statusItem) {
			console.log('onStatusClick: ', statusItem)
		},
		actionSearch () {
			console.log('actionSearch: ')
			this.$refs.shTable.reload(true)
		},
		resetForm () {
			console.log('resetForm: ')
		},
		onChange(date, dateString) {
			console.log('date change', date, dateString);
		},
		handleChange(value) {
			console.log(`selected ${value}`);
		},
		handleEdit () {
			window.alert('handleEdit')
		},
		handleAdd () {
			window.alert('handleAdd')
		},
		// 表格详情
		handleTableInfo (item) {
			let params = {
				id: item.id,
			}
			// 通过 URL?key=value 传参
			this.$router.push(`/demoM/demoInfo?${obj2Params(params)}`)
			console.log('table Info: ', item)
		},
		// 表格更新
		handleTableUpdate (item) {
			// 通过路由声明 /:id 传参
			this.$router.push('/demoM/demoUpdate/123')
			console.log('table Update: ', item)
		},
		// 表格删除
		handleTableDelete (item) {
			console.log('table Delete: ', item)
		},
		// 表格其他自定义设置
		handleTableEmmm (item) {
			console.log('table Emmm: ', item)
		},
		onSelectChange (selectedRowKeys) {
			console.log('selectedRowKeys changed: ', selectedRowKeys)
			this.selectedRowKeys = selectedRowKeys
		},
		fetchTableData (params) {
			console.log('Demo pagination: ', JSON.stringify(params))
			return fetchDemoList(params).then(res => {
				return {
					result: res.data.records,
					total: res.data.total,
					pageSize: res.data.size,
					current: res.data.current,
				}
			})
		},
	},
}
</script>
