<template>
	<header class="layout__header">
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
	display: flex;
	align-items: center;
	height: 60px;
	width: 100%;
	background-color: #fff;
}
.layout__header .header-trigger {
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
