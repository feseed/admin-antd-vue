<template>
	<section class="demo">
		<!-- 头部所搜 -->
			<header-nav title="Demo 测试页" @on-refresh="handleRefresh" refresh></header-nav>
	</section>
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
