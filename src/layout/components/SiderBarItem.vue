<template>
		<a-sub-menu key="sub1">
			<span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
			<a-menu-item key="sub1/1">Option 1</a-menu-item>
			<a-menu-item key="2">Option 2</a-menu-item>
			<a-menu-item key="3">Option 3</a-menu-item>
			<a-menu-item key="4">Option 4</a-menu-item>
		</a-sub-menu>
			<!-- <a-sub-menu v-for="childMenu in itemMenu.childen" :key="childMenu.right_id">
				<span slot="title">
					<a-icon type="mail" />
					<span>{{itemMenu.right_name}}</span>
				</span>
				<a-menu-item :key="childMenu.right_id">
					{{childMenu.right_name}}
				</a-menu-item>
			</a-sub-menu> -->
		<!-- <template v-else>
			<a-menu-item key="sub1/1">Option 1</a-menu-item>
		</template> -->
</template>

<script>
export default {
	name: 'SiderBarItem',
	props: {
		itemMenu: {
			type: Object,
		},
	},
	mounted () {
		console.log('itemMenu: ', this.itemMenu)
	},
}
</script>

