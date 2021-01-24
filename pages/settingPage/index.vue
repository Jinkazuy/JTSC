<template>
	<div class="setting-page borderbox">
		<van-cell-group>
			<van-cell title="收货地址" is-link @click="toReceivingAddress" />
			<van-cell title="各种设置" is-link value="内容" />
		</van-cell-group>

		<van-cell-group>
			<van-cell title="各种设置" is-link />
			<van-cell title="各种设置" is-link value="内容" />
		</van-cell-group>


		<div class="logout">
			<van-button round type="info" color="#F1F1F1" style="color: #222;" @click="logOut">退出当前账号</van-button>
		</div>
		
		
		<div class="logo-box">
			<div class="logo-box__name">交小哇 V1.1.2</div>
			<div class="logo-box__slogan">slogansloganslogansloganslogan</div>
		</div>
		
		<!-- 确认退出弹窗 -->
		<van-dialog id="van-dialog" />
	</div>
</template>

<script>
	import Dialog from '@/wxcomponents/weapp/dist/dialog/dialog'
	import {
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {}
		},
		methods: {
			...mapMutations({
				// 这里映射了这个方法，那么在调用x的时候，就等于使用了this.$store.commit('SET_SINGER', value)这个方法；
				setUserPhone: 'setUserPhone',
				setUserInfoData: 'setUserInfoData',
				setToken: 'setToken',
				setTokenExpiration: 'setTokenExpiration',
			}),
			toReceivingAddress() {
				console.log('收货地址')
				// uni.navigateTo({
					// url: `/pages/registrationAgreement/index`
				// })
			},
			// 退出登录
			logOut() {
				Dialog.confirm({
				  title: '确认退出',
				  message: '退出后无法进行收藏、评论等操作',
				})
				  .then(() => {
				    // on confirm
					console.log('退出，清空token、用户信息、手机号、token过期时间')
					this.setUserInfoData({
						avatarUrl: null,
						city: null,
						country: null,
						gender: null,
						language: null,
						nickName: null,
						province: null,
					})
					this.setUserPhone(null)
					this.setToken(null)
					this.setTokenExpiration(null)
					// 跳转回 我的 页
					uni.switchTab({
						url: `/pages/me/index`
					})
				  })
				  .catch(() => {
				    // on cancel
				  });
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.setting-page {
		padding: 28rpx;

		.logout {
			margin-top: 60rpx;
			display: flex;
			justify-content: center;

			/deep/.van-button {
				color: #222 !important;
				/deep/.van-button__text{
					color: #222;
				}
			}
		}
		
		.logo-box {
			position: absolute;
			left: 50%;
			bottom: 40rpx;
			transform: translateX(-50%)
			text-align: center;
			
			.logo-box__name {
				color: #999999;
				font-weight: 700;
				font-size: 40rppx;
			}
			.logo-box__slogan {
				margin-top: 10px;
				color: #999999;
				font-size: 20rppx;
			}
		}
	}
</style>
<style>
	page {
		background-color: #f6f6f6;
	}
</style>
