<template>
	<div class="demo-info">
		<header-nav title="Demo 详情页"></header-nav>
		<info-card title="基本信息">
			<template>
				<tr>
					<td style="width: 130px;">证件编码</td>
					<td>ZJBM201902250001 -- ZJBM201902250001</td>
					<td>供应商编码</td>
					<td>ZJBM201902250001</td>
					<td>供应商名称</td>
					<td>上海旭耕农业科技有限公司</td>
				</tr>
				<tr>
					<td style="width: 130px;">证件编码 -- 证件编码</td>
					<td>ZJBM201902250001</td>
					<td>供应商编码</td>
					<td>ZJBM201902250001</td>
				</tr>
			</template>
		</info-card>

		<a-tabs defaultActiveKey="key1" @change="onTabChange" style="background-color: #fff;">
			<a-tab-pane key="key1" tab="选项卡一">
				<info-card title="选项卡一 Title">
					<template>
						<tr>
							<td>证件编码 01</td>
							<td>ZJBM201902250001</td>
							<td>供应商编码</td>
							<td>ZJBM201902250001</td>
							<td>供应商名称</td>
							<td>上海旭耕农业科技有限公司</td>
						</tr>
						<tr>
							<td>证件编码 02</td>
							<td>ZJBM201902250001</td>
							<td>供应商编码</td>
							<td>ZJBM201902250001</td>
							<td>供应商名称</td>
							<td>上海旭耕农业科技有限公司</td>
						</tr>
					</template>
				</info-card>
			</a-tab-pane>
			<a-tab-pane key="key2" tab="选项卡二">
				<info-card title="选项卡二 Title" :isTableList="true">
					<sh-table
						ref="shTable"
						:columns="columns"
						:rowKey="record => record.id"
						:fetchData="fetchTableData"
						:pagination="false"
					>
						<!-- <td slot="emmm" slot-scope="{ tableRow }">
							<tr>{{tableRow.goodsCode}}</tr>
						</td> -->
					</sh-table>
				</info-card>
			</a-tab-pane>
			<a-tab-pane key="key3" tab="选项卡三">
				<info-card title="选项卡三 Title">
					选项卡三内容，选项卡三内容，选项卡三内容，选项卡三内容
				</info-card>
			</a-tab-pane>
		</a-tabs>

		<info-card title="其它信息">
			<template>
				<tr>
					<td>证件编码</td>
					<td>ZJBM201902250001</td>
					<td>供应商编码</td>
					<td>ZJBM201902250001</td>
					<td>供应商名称</td>
					<td>上海旭耕农业科技有限公司</td>
				</tr>
				<tr>
					<td>证件编码</td>
					<td>ZJBM201902250001</td>
					<td>供应商编码</td>
					<td>ZJBM201902250001</td>
					<td>供应商名称</td>
					<td>上海旭耕农业科技有限公司</td>
				</tr>
			</template>
		</info-card>
	</div>
</template>

<script>

import {
	fetchDemoList,
} from '@/api/demo'

export default {
	name: 'DemoInfo',
	data () {
		return {
			// 表格 列
			columns: [
				{ title: '名字', dataIndex: 'goodsName' },
				{ title: '价格', dataIndex: 'goodsPrice' },
				{ title: '类型', dataIndex: 'goodsType' },
				{ title: '质量', dataIndex: 'quantity' },
				// { title: 'emmm', scopedSlots: { customRender: 'emmm' } },
			],
		}
	},
	mounted () {
		// 获取传参值
		console.log('DemoInfo Page item id = ', this.$route.query.id)
	},
	methods: {
		onTabChange (tabKey) {
			console.log('tab changed: ', tabKey)
		},
		fetchTableData (params) {
			console.log('DemoInfo pagination: ', JSON.stringify(params))
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

<style scoped>
.demo-info {
	/* background: #fff; */
}

.demo-info__table {
	border: 1px solid red;
}

</style>
