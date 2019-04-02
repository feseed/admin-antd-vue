<template>
	<header class="layout__header" :style="headerCollapsedWidth">
		<div class="header-content">
			<div>
				<a-icon class="header-trigger" :type="this.collapsed ? 'menu-unfold' : 'menu-fold'" @click.native="handlerToggle"></a-icon>
				<a class="header__rollback" href="javascript:void(0);" @click="rollBackToOther">
					<!-- <a-icon type="rollback"></a-icon> -->
				</a>
			</div>
			<div class="header__userInfo">
				<img class="userInfo__avatar" :src="avatarImg">
				<span class="userInfo__username">{{userInfo.name}}</span>
			</div>
		</div>
	</header>
</template>

<script>
import { storage } from '@gauseen/tools'
import { UPDATE_COLLAPSE } from '@/store/mutation-types'

export default {
	name: 'ShHeader',
	data () {
		return {
			// 微信扫码登录人信息
			WXInfo: storage().get('WXInfo'),
			userInfo: storage().get('UserInfo') || {},
		}
	},
	computed: {
		collapsed () {
			return this.$store.state.collapsed
		},
		// 头部根据侧边导航收起状态计算 width
		headerCollapsedWidth () {
			return { width: `calc(100% - ${this.$store.getters.siderBarCollapsedWidth}px)` }
		},
		// 头像 URL
		avatarImg () {
			return this.WXInfo ? this.WXInfo.headimgurl : require('@/assets/avatar.jpg')
		},
	},
	methods: {
		handlerToggle () {
			this.$store.commit(UPDATE_COLLAPSE)
		},
		rollBackToOther () {
			window.location.href = process.env.VUE_APP_member_rms_middleGround
		},
	},
}
</script>

<style>
.layout__header {
	position: fixed;
	top: 0;
	right: 0;
	height: 60px;
	z-index: 9;
	background-color: #fff;
}
.layout__header .header-content .header-trigger {
	font-size: 22px;
	cursor: pointer;
}
.layout__header .header-content {
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 0 20px;
}
.layout__header .header__rollback {
	font-size: 18px;
	color: #999;
	margin-left: 20px;
}
.layout__header .header__userInfo {
	display: flex;
	align-items: center;
}
.layout__header .header__userInfo .userInfo__avatar {
	width: 44px;
	height: 44px;
	border-radius: 50%;
}
.layout__header .header__userInfo .userInfo__username {
	margin-left: 10px;
}
</style>
