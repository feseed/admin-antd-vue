<template>
	<div class="data-status">
		<p v-for="item in statusList" @click="$emit('on-click', item)" :key="item.text" class="status__item">
			<dot-color :bgColor="item.color"></dot-color>&nbsp;
			<span>{{item.text}} ({{item.value}})</span>
		</p>
	</div>
</template>

<script>
import DotColor from './DotColor'

export default {
	name: 'DataStatusList',
	props: {
		statusList: {
			type: Array,
			required: true,
		},
	},
	components: {
		DotColor,
	},
}
</script>

<style scoped>
.data-status {
	font-size: 0;
	text-align: center;
	display: flex;
	/* margin-top: 10px; */
	overflow: hidden;
}
.data-status .status__item {
	cursor: pointer;
	width: 1.64rem;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	font-weight: 400px;
	margin-right: 0.19rem;
	margin-bottom: 0;
	background: #fff;
}
</style>
