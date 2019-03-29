import Menu from 'ant-design-vue/es/menu'
import Icon from 'ant-design-vue/es/icon'

const { Item, SubMenu } = Menu

export default {
	name: 'ShMenu',
	props: {
		menu: {
			type: Array,
			required: true
		},
		theme: {
			type: String,
			required: false,
			default: 'dark'
		},
		mode: {
			type: String,
			required: false,
			default: 'inline'
		},
		collapsed: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data () {
		return {
			openKeys: [],
			selectedKeys: [],
			cachedOpenKeys: []
		}
	},
	computed: {
		rootSubmenuKeys (vm) {
			const keys = []
			vm.menu.forEach(item => keys.push(item.path))
			return keys
		}
	},
	created () {
		this.updateMenu()
	},
	watch: {
		collapsed (val) {
			if (val) {
				this.cachedOpenKeys = this.openKeys.slice()
				this.openKeys = []
			} else {
				this.openKeys = this.cachedOpenKeys
			}
		},
		'$route': function () {
			this.updateMenu()
		}
	},
	methods: {
		// select menu item
		onOpenChange (openKeys) {
			// 仅在水平模式时执行
			if (this.mode === 'horizontal') {
				this.openKeys = openKeys
				return
			}
			// 在非水平模式时执行
			const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
			if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
				this.openKeys = openKeys
			} else {
				this.openKeys = latestOpenKey ? [latestOpenKey] : []
			}
		},
		updateMenu () {
			const routes = this.$route.matched.slice()
			console.log('updateMenu routes: ', routes.slice())

			this.selectedKeys = [routes.pop().path]

			const openKeys = []
			if (this.mode === 'inline') {
				routes.forEach(item => {
					openKeys.push(item.path)
				})
			}

			this.collapsed ? (this.cachedOpenKeys = openKeys) : (this.openKeys = openKeys)
			console.log('this.openKeys: ', this.openKeys)
			console.log('this.selectedKeys: ', this.selectedKeys)
		},

		// render
		renderItem (menu) {
			return menu.children ? this.renderSubMenu(menu) : this.renderMenuItem(menu)
		},
		renderMenuItem (menu) {
			const props = {
				to: { path: menu.path },
			}
			return (
				<Item {...{ key: menu.path }}>
					<router-link {...{ props }}>
						{this.renderIcon(menu.meta.icon)}
						<span>{menu.meta.title}</span>
					</router-link>
				</Item>
			)
		},
		renderSubMenu (menu) {
			const itemArr = []
			menu.children.forEach(item => itemArr.push(this.renderItem(item)))
			return (
				<SubMenu {...{ key: menu.path }}>
					<span slot="title">
						{this.renderIcon(menu.meta.icon)}
						<span>{menu.meta.title}</span>
					</span>
					{itemArr}
				</SubMenu>
			)
		},
		renderIcon (icon) {
			if (icon === 'none' || icon === undefined) {
				return null
			}
			const props = {}
			typeof (icon) === 'object' ? props.component = icon : props.type = icon
			return (
				<Icon {... { props } }/>
			)
		}
	},
	render () {
		const { mode, theme, menu } = this
		const props = {
			mode: mode,
			theme: theme,
			openKeys: this.openKeys,
		}
		const on = {
			select: obj => {
				this.selectedKeys = obj.selectedKeys
				this.$emit('select', obj)
			},
			openChange: this.onOpenChange
		}

		const menuTree = menu.map(item => {
			return this.renderItem(item)
		})

		// console.log('menuTree: ', menuTree)
		// {...{ props, on: on }}
		return (
			<Menu selectedKeys={this.selectedKeys} {...{ props, on: on }}>
				{menuTree}
			</Menu>
		)
	}
}
