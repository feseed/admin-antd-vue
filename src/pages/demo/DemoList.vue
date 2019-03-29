<template>
	<div class="demo" id="demo">
		<!-- 头部所搜 -->
		<div class="demo__content__header">
			<v-form>
				<v-form-item label="账户">
					<v-input placeholder="请输入账户名" v-model="user.username"></v-input>
				</v-form-item>
				<v-form-item label="密码">
					<v-input placeholder="请输入密码" v-model="user.userPassword"></v-input>
				</v-form-item>
				<v-form-item label="状态" :label-col="labelCol" :wrapper-col="wrapperCol">
					<v-select size="lg" style="width: 200px;" :data="statusOptions" v-model="user.status"></v-select>
				</v-form-item>
			</v-form>
			<v-form>
				<v-form-item>
					<span>时间：</span>
					<v-date-picker v-model="rangeDate" range clearable @confirm="confirm" @change="rangeChange"></v-date-picker>
				</v-form-item>
				<v-form-item>
					<v-input placeholder="用户名">
						<v-icon type="user" slot="before"></v-icon>
					</v-input>
				</v-form-item>
				<v-form-item>
					<v-button type="primary" html-type="submit" @click="handleActionSearch" style="margin-right: 10px">查 询</v-button>
					<v-button type="ghost" @click.prevent="resetForm()">重 置</v-button>
				</v-form-item>
			</v-form>
		</div>
		<!-- 表格部分 -->
		<div class="demo__content__table">
			<v-data-table :data='fetchTableDataList' :columns='columns'>
				<template slot="td" slot-scope="props">
					<strong v-if="props.column.field === 'operate'">
						<v-button type="primary" style="margin-right: 6px;" @click.prevent="add()">add</v-button>
						<v-button type="warning">del</v-button>
					</strong>
					<strong v-else v-html="props.content"></strong>
				</template>
			</v-data-table>
		</div>
	</div>
</template>

<script>
import {
	fetchDemoList,
} from '@/api/demo'

export default {
	name: 'Demo',
	data () {
		return {
			user: {
				username: '',
				userPassword: '',
				status: '1',
			},
			// 面包屑导航
			breadcrumbList: [
				{ name: '一级导航' },
				{ name: '二级导航' },
				{ name: '三级导航' },
			],
			statusOptions: [
				{ value: '1', label: '状态 1' },
				{ value: '2', label: '状态 2' },
			],
			rangeDate: ['2019-02-04', '2019-02-28'],
			tableList: [],
			labelCol: {
				span: 6,
			},
			wrapperCol: {
				span: 14,
			},
			columns: [
				{ title: 'ID', field: 'id' },
				{ title: '商品名', field: 'goodsName' },
				{ title: '商品编码', field: 'goodsCode' },
				{ title: '价格', field: 'goodsPrice' },
				{ title: '操作', field: 'operate' },
			],
		}
	},
	components: {

	},
	mounted () {
	},
	methods: {
		// 查询事件
		handleActionSearch () {
			console.log('demo 查询数据：', this.user)
		},
		resetForm () {

		},
		fetchTableDataList (params) {
			console.log('on change pageNum: ', params)
			return fetchDemoList(params).then(res => {
				return {
					result: res.data.records,
					totalCount: res.data.total,
					pageSize: res.data.size,
					pageNo: res.data.current,
				}
			}).catch(err => {
				console.log('err: ', err)
			})
		},
		add () {
			this.$router.push('demoAdd')
		},
		confirm () {
			console.log('confirm: ', this.rangeDate)
		},
		rangeChange (startTime, endTime) {
			console.log('rangeChange: ', startTime, endTime)
		},
	},
}
</script>

<style>
.demo__content__header .ant-form-inline {
	margin-bottom: 15px;
}
</style>
