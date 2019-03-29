<template>
	<!-- #f75e5e -->
	<i class="dot-color" :style="dotStyle"></i>
</template>

<script>
export default {
	name: 'DotColor',
	props: {
		bgColor: {
			type: String,
			default: '#4a90e2',
		},
	},
	computed: {
		dotStyle () {
			return {
				backgroundColor: this.bgColor,
			}
		},
	},
}
</script>

<style scoped>
.dot-color {
	padding: 0;
	display: inline-block;
	width: 7px;
	height: 7px;
	border-radius: 50%;
}
</style>
