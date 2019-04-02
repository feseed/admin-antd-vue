<template>
	<section class="sh-table">
		<a-table
			:dataSource="tableDataList"
			:pagination="localPagination"
			:columns="columns"
			:loading="loading"
			v-bind="$attrs"
			@change="onTableChange"
		>
			<!-- 自定义表格渲染项 -->
			<template v-for="colCustom in columnsCustom" :slot="colCustom.customRender" slot-scope="item">
				<slot :name="colCustom.customRender" :tableRow="item"></slot>
			</template>
		</a-table>
	</section>
</template>

<script>
export default {
	name: 'ShTable',
	props: {
		columns: {
			type: Array,
			required: true,
		},
		fetchData: {
			type: Function,
			required: true,
		},
		pagination: {
			type: [Object, Boolean],
			default: () => ({
				total: 0,
				pageSize: 10,
				current: 1,
			}),
		},
		showSizeChanger: {
			type: Boolean,
			default: true,
		},
		showQuickJumper: {
			type: Boolean,
			default: true,
		},
	},
	data () {
		return {
			loading: false,
			tableDataList: [],
			localPagination: typeof this.pagination === 'object'
				? Object.assign({}, {
					...this.pagination,
					showSizeChanger: this.showSizeChanger,
					showQuickJumper: this.showQuickJumper,
				})
				: this.pagination,
		}
	},
	computed: {
		columnsCustom () {
			return this.columns.filter(item => {
				return item.scopedSlots
			}).map(item => item.scopedSlots)
		},
	},
	created () {
		this.actionLoadData()
	},
	methods: {
		// 列表接口请求成功回调
		fetchDataCallback (res) {
			this.tableDataList = res.result
			this.loading = false
			if (typeof this.localPagination === 'boolean') return
			this.localPagination.total = res.total
			this.localPagination.pageSize = res.pageSize
			this.localPagination.current = res.current
		},
		// 开始加载列表数据
		actionLoadData (pagination = this.localPagination) {
			this.loading = true
			this.fetchData(pagination).then(this.fetchDataCallback)
		},
		// 重新加载数据
		reload (isGoFirstPage = false) {
			let pagination = isGoFirstPage ? { ...this.localPagination, ...{ current: 1 } } : { ...this.localPagination }
			this.actionLoadData(pagination)
		},
		// 切换页数、跳转页、切换每页条数时调用
		onTableChange (pagination, filters, sorter) {
			this.actionLoadData(pagination, filters, sorter)
		},
	},
}
</script>

