<template>
	<div @click="onClick" class="data-status">
		<p class="status__item">
			<dot-color :bgColor="color"></dot-color>&nbsp;
			<span>{{text}} ({{value}})</span>
		</p>
	</div>
</template>

<script>
import DotColor from './DotColor'

export default {
	name: 'DataStatus',
	props: {
		color: {
			type: String,
			default: '#58A3F7',
		},
		text: {
			type: String,
			required: true,
		},
		value: {
			type: Number,
			required: true,
		},
	},
	components: {
		DotColor,
	},
	methods: {
		onClick () {
			this.$emit('click', this.text)
		},
	},
}
</script>

<style scoped>
.data-status {
	width: 1.64rem;
	height: 32px;
	line-height: 32px;
	font-size: 0;
	text-align: center;
	background: #fff;
	display: inline-block;
	/* margin-top: 10px; */
	margin-right: 0.19rem;
	overflow: hidden;
}
.data-status .status__item {
	font-size: 14px;
	font-weight: 400px;
}
</style>
