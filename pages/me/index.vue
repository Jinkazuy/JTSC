<template>
	<div class="page-me-wrapper">
		<!-- 个人中心 -->
		<div class="page-me" v-show="userIsLogin">
			<!-- 用户信息 -->
			<div class="user-info-wrapper borderbox" :style="{ backgroundImage: 'url('+store_UserInfoData.avatarUrl+')' }">
				<div class="user-info-wrapper__userinfo">
					<div class="user-info-wrapper__userinfo-avater">
						<img :src="store_UserInfoData.avatarUrl">
					</div>
					<div class="user-info-wrapper__userinfo-text-wrapper">
						<div class="user-info-wrapper__userinfo-text-wrapper__username nowrap">{{store_UserInfoData.nickName}}</div>
						
						<!-- 手机号先隐藏 -->
						<!-- <div class="user-info-wrapper__userinfo-text-wrapper__userphone">{{store_UserInfoData.mobile}}</div> -->
						<!-- 手机号先隐藏 -->
						
						<!-- 用户积分先隐藏 -->
						<!-- <span class="user-info-wrapper__userinfo-text-wrapper__userintegral-wrapper borderbox">
							<FontAwesome type="fas fa-atom" size="20" color="#FFD80A"></FontAwesome>
							<span class="user-info-wrapper__userinfo-text-wrapper__userintegral-wrapper-num">999999999</span>
						</span> -->
						<!-- 用户积分先隐藏 -->
						
					</div>
					<div class="user-info-wrapper__setting-wrapper" @click="toSetting">
						<FontAwesome type="fas fa-cog" size="28" color="#fff"></FontAwesome>
						<span class="user-info-wrapper__setting-wrapper-btn">设置</span>
					</div>
				</div>
				<div class="user-info-wrapper__gbmask"></div>
			</div>
			<!-- 功能区 -->
			<!-- <div class="user-actions-wrapper borderbox"> -->
				<!-- <div class="user-actions-wrapper__num-box"> -->
					<!-- <div class="user-actions-wrapper__num-box-time"> -->
						<!-- <div class="user-actions-wrapper__num-box-time__num">7</div> -->
						<!-- <div class="user-actions-wrapper__num-box-time__desc">优惠券</div> -->
					<!-- </div> -->
					<!-- <div class="user-actions-wrapper__num-box-line"></div> -->
					<!-- <div class="user-actions-wrapper__num-box-time"> -->
						<!-- <div class="user-actions-wrapper__num-box-time__num">99</div> -->
						<!-- <div class="user-actions-wrapper__num-box-time__desc">购物车</div> -->
					<!-- </div> -->
					<!-- <div class="user-actions-wrapper__num-box-line"></div> -->
					<!-- <div class="user-actions-wrapper__num-box-time"> -->
						<!-- <div class="user-actions-wrapper__num-box-time__num">0</div> -->
						<!-- <div class="user-actions-wrapper__num-box-time__desc">收藏夹</div> -->
					<!-- </div> -->
				<!-- </div> -->
				<!-- <div class="user-actions-wrapper__active-box"> -->
					<!-- <div class="user-actions-wrapper__active-box__item borderbox"> -->
						<!-- <span class="user-actions-wrapper__active-box__item-l-text">普通会员</span> -->
						<!-- <span class="user-actions-wrapper__active-box__item-r-text">还差10积分升级xxx会员</span> -->
					<!-- </div> -->
					<!-- <div class="user-actions-wrapper__active-box__item borderbox"> -->
						<!-- <span class="user-actions-wrapper__active-box__item-l-text">积分钱包</span> -->
						<!-- <span class="user-actions-wrapper__active-box__item-r-text">9999999</span> -->
					<!-- </div> -->
					<!-- <div class="user-actions-wrapper__active-box__item borderbox"> -->
						<!-- <span class="user-actions-wrapper__active-box__item-l-text">VIP会员</span> -->
						<!-- <span class="user-actions-wrapper__active-box__item-r-text">顺丰物流极速达</span> -->
					<!-- </div> -->
				<!-- </div> -->
				<!-- <div class="user-actions-wrapper__order-box"> -->
					<!-- <div class="user-actions-wrapper__order-box-title">我的订单</div> -->
					<!-- <div class="user-actions-wrapper__order-box-body"> -->
						<!-- /// 待付款 -->
						<!-- <div class="user-actions-wrapper__order-box-body__item"> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-icon"> -->
								<!-- <FontAwesome type="fas fa-credit-card" size="48" color="#EB5946"></FontAwesome> -->
							<!-- </div> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-text">待付款</div> -->
						<!-- </div> -->
						<!-- /// 代发货 -->
						<!-- <div class="user-actions-wrapper__order-box-body__item"> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-icon"> -->
								<!-- <FontAwesome type="fas fa-shipping-fast" size="48" color="#EB5946"></FontAwesome> -->
							<!-- </div> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-text">待发货</div> -->
						<!-- </div> -->
						<!-- /// 待收货 -->
						<!-- <div class="user-actions-wrapper__order-box-body__item"> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-icon"> -->
								<!-- <FontAwesome type="fas fa-dolly-flatbed" size="48" color="#EB5946"></FontAwesome> -->
							<!-- </div> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-text">待收货</div> -->
						<!-- </div> -->
						<!-- /// 待评价 -->
						<!-- <div class="user-actions-wrapper__order-box-body__item"> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-icon"> -->
								<!-- <FontAwesome type="fas fa-comment-alt" size="48" color="#EB5946"></FontAwesome> -->
							<!-- </div> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-text">待评价</div> -->
						<!-- </div> -->
						<!-- 全/// 部订单 -->
						<!-- <div class="user-actions-wrapper__order-box-body__item"> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-icon"> -->
								<!-- <FontAwesome type="fas fa-layer-group" size="48" color="#EB5946"></FontAwesome> -->
							<!-- </div> -->
							<!-- <div class="user-actions-wrapper__order-box-body__item-text">全部订单</div> -->
						<!-- </div> -->
					<!-- </div> -->
				<!-- </div> -->
			<!-- </div> -->
			
			<!-- 收藏区 -->
			<p class="user-collection-wrapper__title">我的收藏</p>
			<div class="user-collection-wrapper">
				<div class="user-collection-wrapper__content">
					<van-tabs offset-top="0" z-index="20" swipeable sticky v-if="userIsLogin">
						<van-tab title="招标信息">
							<newsList :newsListData="newsListData" v-show="!loadingFlag"></newsList>
						</van-tab>
						<van-tab title="中标信息">
							<newsList :newsListData="newsListData" v-show="!loadingFlag"></newsList>
						</van-tab>
						<van-tab title="商品">
							<goodsList :goodsListData="goodsListData" class="user-collection-wrapper__content-goodslist"></goodsList>
						</van-tab>
					</van-tabs>
				</div>
			</div>
		</div>

		<!-- 登录 -->
		<div class="no-login-wrapper" v-if="!userIsLogin">
			<div class="no-login-wrapper__logo-box">
				<div class="no-login-wrapper__logo-box-logo">
					<img :src="logoUrl">
				</div>
				<div class="no-login-wrapper__logo-box-text">
					交小哇
				</div>
			</div>
			<!-- 这个@getuserinfo是uniapp提供的处理事件，只适用于微信小程序，在点击这个按钮后，会触发bindGetUserInfo，然后拿到用户点击弹窗授权的回调函数 -->
			<!-- 不同于@click，这个@getuserinfo只能在用户授权的弹窗，当用户点击拒绝或接受才会触发这个事件，并且这个事件只能用在小程序 -->
			<div class="no-login-wrapper__login-box">
				<van-button round type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" v-if="onLoginBTN">登 录</van-button>
				<van-button round type="primary" open-type="getPhoneNumber" @getphonenumber="bindgetphonenumber" v-if="getPhoneBTN">获取手机号</van-button>
			</div>
			<!-- <div class="no-login-wrapper__login-box" @click="_login">微 信 登 录</div> -->
			<div class="no-login-wrapper__agreement-box">
				<span style="color: #999;margin-right: 16rpx;">登录代表您已同意</span>
				<span style="color: #EB5946;" @click="toRegistrationAgreement">交小哇用户协议、</span>
				<span style="color: #EB5946;" @click="toPrivacyPolicy">隐私协议</span>
			</div>
		</div>
		<van-toast id="van-toast" />
		<van-dialog id="van-dialog" />
	</div>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	import newsList from '@/components/newsList/index.vue'
	import goodsList from '@/components/goodsList/index.vue'

	import logoUrl from '@/static/images/logo.png'

	import Dialog from '@/wxcomponents/weapp/dist//dialog/dialog';

	// 用户是否已登录
	import {
		isLogin,
		formatDate
	} from '@/utils/index.js'


	import API_me from '@/api/me/API_me.js'

	// toast组件，拿到的不是组件，是方法；
	// 如此这般：Toast('我是提示文案，建议不超过十五字~');
	import Toast from '../../wxcomponents/weapp/dist/toast/toast'

	// 拿到vuex中的函数
	import {
		mapGetters,
		mapMutations
	} from 'vuex'

	export default {
		// 挂载
		onLoad() {
			console.log('我的 onLoad')
		},
		// 显示
		async onShow() {
			console.log('我的 Show')
			// 判断当前页的 userIsLogin 是否是 false，如果是的话，说明用户未登录，那么
			this.userIsLogin = await this._checkUserLogin()
			// 如果用户没登录，就执行后续登录流程
			if (!this.userIsLogin) {
				// 获取用户设置
				this.getSetting()
			} else {
				// 用户已经登录，获取相关数据
				// 获取列表收据
				this.userIsLogin = true
				this._http_get_newsListData()
			}
		},
		// 隐藏
		async onHide() {
			console.log('我的 Hide')
		},
		components: {
			FontAwesome,
			newsList,
			goodsList,
		},
		computed: {
			// vuex提供的辅助函数，拿到store/getters.js向外暴露的内容；
			...mapGetters([
				'store_UserInfoData', // 用户详细数据
				'store_token'
			])
		},

		data() {
			return {
				// 用户是否已登录
				userIsLogin: false,
				// http 请求中
				loadingFlag: false,
				// 授权按钮是否显示，当没有获取用户授权时，显示授权按钮
				onLoginBTN: false,
				// 获取用户手机号按钮
				getPhoneBTN: false,
				// logo 图片
				logoUrl: logoUrl,
				// 列表数据
				newsListData: [{
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, {
					title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题',
					local: '浙江省',
					time: '一小时前',
					viewCount: '99999',
				}, ],
				goodsListData: [{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: logoUrl,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '会员专享 先到先得 会员专享 先到先得',
							_v: '满千包邮满千包邮',
							_price: '200200',
						}
					},
					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: logoUrl,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '会员专享 先到先得 会员专享 先到先得',
							_v: '满千包邮满千包邮',
							_price: '200200',
						}
					},
					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: logoUrl,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '会员专享 先到先得 会员专享 先到先得',
							_v: '满千包邮满千包邮',
							_price: '200200',
						}
					},
					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: logoUrl,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '',
							_v: '',
							_price: '',
						}
					},
					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: logoUrl,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '',
							_v: '',
							_price: '',
						}
					},
				]
			}
		},
		methods: {
			...mapMutations({
				// 这里映射了这个方法，那么在调用x的时候，就等于使用了this.$store.commit('SET_SINGER', value)这个方法；
				setUserPhone: 'setUserPhone',
				setUserInfoData: 'setUserInfoData',
				setToken: 'setToken',
				setTokenExpiration: 'setTokenExpiration',
			}),
			// 获取列表数据
			_http_get_newsListData() {
				console.log('http 获取列表数据')

				this.loadingFlag = true

				setTimeout(() => {
					this.loadingFlag = false
					// 获取完了之后，清空搜索框文字
					this.searchValue = ''
				}, 2000)

			},
			// 检查用是否已登录
			_checkUserLogin() {
				return new Promise((res, rej) => {
					this.isLogin = isLogin()
					if (this.isLogin) {
						res(true)
					} else {
						res(false)
					}
				})
			},
			bindGetUserInfo(e) {
				console.log(e)
				if (e.target.userInfo) {
					console.log(e.target.userInfo)

					// Toast.loading({
					// 	message: '正在登陆....',
					// 	duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
					// })


					// 拿到用户基本信息此时的操作，
					// 将用户基本信息储存到本地，这步其实没什么用，因为用户登录后，会获取用户更详细的信息
					this.setUserInfoData(e.target.userInfo)

					// 用户登录后，向后台换取token存储到本地
					// 这里不去效验本地是否有token，因为：用户信息可能更新、变动，
					// 所以，这里把当前操作用户的加密数据发送给后台，后台解码后将用户信息和最终登录日期等数据入库；
					this.loginAndGetToken(e.detail.encryptedData, e.detail.iv)


				} else {
					Toast('需要您的授权才能登录')
				}
			},

			/*
			 * 获取用户设置
			 */
			getSetting() {

				// Toast.loading({
				// 	message: '正在登陆....',
				// 	duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失
				// })

				uni.getSetting({
					success: (res) => {
						console.log(res)
						if (res.authSetting["scope.userInfo"]) {
							console.log('已获取用户“用户信息授权，直接获取用户信息（非敏感数据）”')
							// 用户已授权：用户信息
							// 获取用户信息
							// 这里禁止页面自动登录
							this.getUserInfo()
						} else {
							// Toast.clear()
							Toast('需要您的授权')
							// 未授权用户信息,显示授权用户信息按钮，隐藏其他按钮；
							this.onLoginBTN = true
							this.getPhoneBTN = false
						}
					}
				})
			},
			/**
			 * 获取用户信息授权
			 * 获取用户信息
			 */
			getUserInfo() {
				uni.getUserInfo({
					success: (res) => {

						// todo: 调试code，完事记得注释掉
						// console.log('========encryptedData & iv==========')
						// console.log(res)

						// Dialog.alert({
						//   title: 'encryptedData',
						//   message: 'encryptedData: '+res.encryptedData+ '---- iv: '+res.iv,
						// }).then(() => {
						//   // on close
						// });


						// console.log(res)
						// 获取成功，存本地
						// 将用户基本信息储存到本地，这步其实没什么用，因为用户登录后，会获取用户更详细的信息
						this.setUserInfoData(res.userInfo)

						// 获取token，将用户加密信息发送给后台
						this.loginAndGetToken(res.encryptedData, res.iv)
					}
				})
			},
			/*
			 * 获取token，将用户加密信息发送给后台
			 */
			async loginAndGetToken(encryptedData, iv) {


				// 用户登录后，向后台换取token存储到本地
				uni.login({
					success: (loginRes) => {

						// todo: 调试code，完事记得注释掉
						console.log('========code==========')
						console.log(loginRes)

						// Dialog.alert({
						// 	title: '点确定复制',
						// 	message: 'code & login的IV & logind的EncryptedData',
						// }).then(() => {

						// 	// 点击确定复制文字
						// 	uni.setClipboardData({
						// 		data: 'code: ' +loginRes.code +'     iv: ' + iv + '     encryptedData: '+encryptedData,
						// 		success: function() {
						// 			//重点~做笔记
						// 			//在success中加入uni.hideToast()可以解决
						// 			uni.hideToast();
						// 			//以下就可自定义操作了~
						// 		},
						// 		fail: function(err) {
						// 			uni.showToast({
						// 				title: '复制失败',
						// 				duration: 2000,
						// 				icon: 'none'
						// 			});
						// 		}
						// 	});
						// });






						// 拿到用户登录Code，发送给后台，后台返回token值，将token存储到本地中；
						if (loginRes.code) {

							API_me.http_login({
								code: loginRes.code,
								encryptedData,
								iv
							}).then(res => {
								console.log('======++++=======')
								console.log(res)

								if (res.data.code === 200) {

									// console.log('登录，获取token')
									// console.log('todo: 设置token 和 token过期时间')

									this.setToken(res.data.data.token)
									console.log(this.store_token)
									
									// 设置token过期时间，当前时间+7天
									let expiration = new Date().getTime() + res.data.data.expiretime
									this.setTokenExpiration(expiration)
									this.userIsLogin = true
									console.log('====== store_UserInfoData ==========')
									console.log(this.store_UserInfoData)
									
									console.log('====== token过期时间 ==========')
									console.log(formatDate(new Date(this.$store.getters.store_tokenExpiration)))
									
									// let httpRes = true

									// 登录成功，执行获取手机号步骤
									// 登录 & 获取token成功

									// 获取token成功后，获取用户详细数据
									// let getUD = await http_getUserInfoData()
									// todo 获取token成功后，将用户敏感信息存储到vuex
									// this.setUserInfoData({
									// 	nickName: 'testUserNickName----------'
									// })
									// console.log('================')
									// console.log(this.store_UserInfoData)
									// let getUD = true
									
									

									// // 如果获取用户详细信息成功，就判断是否有手机号
									// if (getUD) {
									// 	// 如果获取到的用户详细信息中没有手机号，说明用户之前登陆没有设置手机号，其实逻辑上是不通的，应该是设置手机号了
									// 	if (this.store_UserInfoData.mobile === '' || this.store_UserInfoData.mobile === null || !this.store_UserInfoData
									// 		.mobile) {
									// 		Toast.clear()

									// 		// 显示获取手机号
									// 		this.onLoginBTN = false
									// 		this.getPhoneBTN = true
									// 		// 然后检测本地用户手机号
									// 		this.ifStoreUserPhone()
									// 	} else {

									// 		// 进入到里，此时，用户信息、用户手机号、token都获取成功，确认用户登录
									// 		if (this.store_UserInfoData.nickName !== null) {
									// 			// this.backOnePage()
									// 			this.userIsLogin = true
									// 		}
									// 	}
									// }


								} else if (res.data.code === 301) {
									// 用户没有绑定过手机号
									
									
									this.setToken(res.data.data.token)
									console.log(this.store_token)
									
									// 设置token过期时间，当前时间+7天
									let expiration = new Date().getTime() + res.data.data.expiretime
									this.setTokenExpiration(expiration)
									
									// 同样设置token，但不显示个人中心
									// this.userIsLogin = true
									console.log('====== store_UserInfoData ==========')
									console.log(this.store_UserInfoData)
									
									console.log('====== token过期时间 ==========')
									console.log(formatDate(new Date(this.$store.getters.store_tokenExpiration)))
									
									

									// 显示获取手机号
									this.onLoginBTN = false
									this.getPhoneBTN = true

								} else {
									// 登录失败
									// 显示登录按钮，隐藏其他按钮
									this.onLoginBTN = true
									this.getPhoneBTN = false

									Toast.clear()

									Toast('登录失败')
								}
							}).catch(e=>{
								console.log('requireErr')
								console.log(e)
								
								this.onLoginBTN = true
								this.getPhoneBTN = false
								
								Toast.clear()
								
								Toast('登录失败，请重新登录')
							})






							// console.log(httpRes)
							// if (!httpRes) {

							// } else {

							// }
						} else {
							Toast('需要您的授权才可以登录')
						}
					}
				})
			},
			/**
			 * 检查本地是否能获取用户手机号
			 */
			async ifStoreUserPhone() {
				// 用户基本信息和详细信息中都有手机号

				if (this.store_UserInfoData.mobile !== '' && this.store_UserInfoData.mobile !== null) {
					console.log('拿到手机号，本地用户手机号↓')
					console.log(this.store_UserInfoData.mobile)
					// 拿到用户信息、拿到手机号，登录
					// 检查本地用户信息，这里就用用户名做检测，如果手机号、用户新都存在，那么视为登录
					if (this.store_UserInfoData.nickName !== null && this.store_UserInfoData.nickName !== "") {
						// this.backOnePage()
						this.userIsLogin = true
					}
					this.userIsLogin = true
				} else {
					// 本地用户手机号为空
					this.getPhoneBTN = true
					Toast('请允许获取您的手机号')
					console.log('本地手机号获取为空，显示获取手机号按钮')
				}
			},
			/**
			 * @param obj[auto]
			 * @return null
			 * 备注：点击open-type="getPhoneNumber"按钮时 触发@getphonenumber事件，将参数自动传递至bindgetphonenumber (e) 中
			 */
			async bindgetphonenumber(e) {
				console.log('用户点击获取手机号按钮')
				console.log(e)
				if (e.detail.encryptedData) {

					// todo: 调试code，完事记得注释掉
					// console.log('========code==========')

					// Dialog.alert({
					// 	title: '点确定复制',
					// 	message: 'code & login的IV & logind的EncryptedData',
					// }).then(() => {

					// 	// 点击确定复制文字
					// 	uni.setClipboardData({
					// 		data: 'iv: ' + e.detail.iv + '     encryptedData: '+ e.detail.encryptedData,
					// 		success: function() {
					// 			//重点~做笔记
					// 			//在success中加入uni.hideToast()可以解决
					// 			uni.hideToast();
					// 			//以下就可自定义操作了~
					// 		},
					// 		fail: function(err) {
					// 			uni.showToast({
					// 				title: '复制失败',
					// 				duration: 2000,
					// 				icon: 'none'
					// 			});
					// 		}
					// 	});
					// });

					// console.log('用户授权手机号，拿到加密数据，发送给后台换取手机号')
					// // let phoneRes = await http_getPhone(e.detail.encryptedData, e.detail.iv)
					// // todo: 这里需要将手机号发送给后台，成功后，再存在本地
					// this.setUserPhone(1880)
					// console.log(this.store_UserInfoData)

					// if (1) {
					// 	// 等待换取手机号结束，检测本地手机号
					// 	this.ifStoreUserPhone()
					// } else {
					// 	Toast('服务器正在调整，暂不提供登录，抱歉')
					// 	console.log('服务器解码手机号失败')
					// }

					API_me.http_bindMobile({
						encryptedData: e.detail.encryptedData,
						iv: e.detail.iv
					}).then(res => {
						console.log('绑定手机号res')
						console.log(res)

						if (res.data.code === 200) {
							
							// 绑定手机号成功
							console.log('绑定手机号 成功')
							this.userIsLogin = true
							
						} else if(res.data.code === 301) {
							// token失效 重新登录
							this.onLoginBTN = true
							this.getPhoneBTN = false
							Toast('登录时间过长，请重新登录')
						} else {
							// 服务器错误
							this.onLoginBTN = true
							this.getPhoneBTN = false
							Toast('登录失败，服务器错误')
						}
					})
					
					


				} else {
					Toast('请您授权获取手机号')
					console.log('用户拒绝授权获取手机号')
				}
			},
			// 跳转用户协议
			toRegistrationAgreement() {
				uni.navigateTo({
					url: `/pages/registrationAgreement/index`
				})
			},
			// 隐私政策
			toPrivacyPolicy() {
				uni.navigateTo({
					url: `/pages/privacyPolicy/index`
				})
			},
			// 设置页
			toSetting() {
				uni.navigateTo({
					url: `/pages/settingPage/index`
				})
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.page-me {
		background-color: #f2f2f2;
		padding-bottom: 60rpx;

		.user-info-wrapper {
			position: relative;
			width: 100%;
			// 这里暂时改成250，等后续功能区开放后，改成400
			// height: 400rpx;
			height: 250rpx;
			background-size: cover;
			background-position: center;
			padding: 40rpx 28rpx;

			.user-info-wrapper__userinfo {
				position: absolute;
				top: 40rpx;
				left: 28rpx;
				right: 28rpx;
				z-index: 2;
				color: #fff;

				.user-info-wrapper__userinfo-avater {
					position: absolute;
					left: 0;
					width: 160rpx;
					height: 160rpx;
					border-radius: 80rpx;
					border: 2rpx solid #FFF;
					overflow: hidden;
					margin-right: 30rpx;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.user-info-wrapper__userinfo-text-wrapper {
					position: absolute;
					left: 180rpx;
					right: 40rpx;

					.user-info-wrapper__userinfo-text-wrapper__username {
						width: 70%;
						font-size: 40rpx;
						font-weight: 700;
						line-height: 1;
						margin-bottom: 20rpx;
					}

					.user-info-wrapper__userinfo-text-wrapper__userphone {
						font-size: 22rpx;
						line-height: 1;
						margin-bottom: 20rpx;
					}

					.user-info-wrapper__userinfo-text-wrapper__userintegral-wrapper {
						display: inline;
						padding: 8rpx 22rpx;
						font-size: 22rpx;
						line-height: 1;
						font-weight: 700;
						margin-bottom: 20rpx;
						background-color: rgba(255, 255, 255, .3);
						border-radius: 22rpx;

						.user-info-wrapper__userinfo-text-wrapper__userintegral-wrapper-num {
							margin-left: 8rpx;
						}

					}

					.user-info-wrapper__userinfo-text-wrapper__userintegral-wrapper:active {
						background-color: rgba(255, 255, 255, .1);
					}
				}

				.user-info-wrapper__setting-wrapper {
					position: absolute;
					top: 0;
					right: 0;
					color: #fff;
					border-radius: 60rpx;
					background-color: rgba(255, 255, 255, .3);
					padding: 10rpx 20rpx;
					display: flex;
					align-items: center;
					line-height: 1;

					.user-info-wrapper__setting-wrapper-btn {
						font-size: 22rpx;
						font-weight: 700;
						margin-left: 12rpx;
					}
				}

				.user-info-wrapper__setting-wrapper:active {
					background-color: rgba(255, 255, 255, .1);
				}



			}


			.user-info-wrapper__gbmask {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				background-color: rgba(0, 0, 0, .8);
			}
		}

		.user-actions-wrapper {
			position: relative;
			width: 92%;
			background-color: #fff;
			margin: -120rpx 0 20rpx 4%;
			border-radius: 24rpx;
			padding: 0 28rpx;
			overflow: hidden;

			.user-actions-wrapper__num-box {
				height: 200rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				.user-actions-wrapper__num-box-line {
					width: 2rpx;
					height: 60rpx;
					margin: 0 80rpx;
					background-color: #E6E6E6;
				}

				.user-actions-wrapper__num-box-time {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;

					.user-actions-wrapper__num-box-time__num {
						font-size: 60rpx;
						font-weight: 700;
						color: #222;
					}

					.user-actions-wrapper__num-box-time__desc {
						font-size: 22rpx;
						color: #222;
					}
				}

				.user-actions-wrapper__num-box-time:active {
					.user-actions-wrapper__num-box-time__num {
						color: #EB5946;
					}

					.user-actions-wrapper__num-box-time__desc {
						color: #EB5946;
					}
				}
			}

			.user-actions-wrapper__active-box {
				height: 220rpx;

				.user-actions-wrapper__active-box__item {
					height: 40%;
					font-size: 26rpx;
					font-weight: 700;
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 28rpx 10rpx;
					border-radius: 16rpx 16rpx 0 0;
					margin-bottom: -20rpx;

					.user-actions-wrapper__active-box__item-l-text {}

					.user-actions-wrapper__active-box__item-r-text {}
				}

				.user-actions-wrapper__active-box__item:nth-child(1) {
					background-color: #C7625F;
					color: #fff;
				}

				.user-actions-wrapper__active-box__item:nth-child(1):active {
					background-color: #B04D49;
				}

				.user-actions-wrapper__active-box__item:nth-child(2) {
					background-color: #6077CB;
					color: #fff;
				}

				.user-actions-wrapper__active-box__item:nth-child(2):active {
					background-color: #455ABB;
				}

				.user-actions-wrapper__active-box__item:nth-child(3) {
					background-color: #2C2C2C;
					color: #F1D4BD;
				}

				.user-actions-wrapper__active-box__item:nth-child(3):active {
					background-color: #212121;
				}

			}

			.user-actions-wrapper__order-box {
				background-color: #fff;
				color: #222;
				padding: 28rpx;

				.user-actions-wrapper__order-box-title {
					font-size: 36rpx;
					margin-bottom: 48rpx;
					font-weight: 700;
				}

				.user-actions-wrapper__order-box-body {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.user-actions-wrapper__order-box-body__item {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;

						.user-actions-wrapper__order-box-body__item-icon {
							margin-bottom: 16rpx;
						}

						.user-actions-wrapper__order-box-body__item-text {
							font-size: 28rpx;
						}
					}
				}
			}

		}

		.user-collection-wrapper__title {
			margin-top: -130rpx;
			color: #222;
			font-weight: 700;
			font-size: 40rpx;
			margin: 20px 0 28rpx 28rpx;
		}

		.user-collection-wrapper {
			min-height: 500rpx;
			position: relative;
			width: 92%;
			background-color: #fff;
			margin: 0 0 40rpx 4%;
			border-radius: 24rpx;
			overflow: hidden;

			.user-collection-wrapper__content {
				.user-collection-wrapper__content-goodslist {
					/deep/.goods-list-wrapper {
						padding: 28rpx;
						box-sizing: border-box;
					}
				}
			}

		}
	}

	.no-login-wrapper {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;


		.no-login-wrapper__logo-box {
			margin-top: 200rpx;

			.no-login-wrapper__logo-box-logo {
				width: 130rpx;
				height: 130rpx;
				border-radius: 32rpx;
				overflow: hidden;
				margin-bottom: 20rpx;
				background-color: #fff;

				img {
					width: 100%;
					height: 100%;
				}

			}

			.no-login-wrapper__logo-box-text {
				font-size: 32rpx;
				font-weight: 700;
				color: #222;
				text-align: center;
			}
		}

		.no-login-wrapper__login-box {
			border-radius: 44rpx;
			margin-top: 220rpx;
			width: 660rpx;
			height: 88rpx;
			background-color: #EB5946;
			box-shadow: 0 15px 30px 0 #F58F82;
			// color: #fff;
			// text-align: center;
			// line-height 88rpx;

			/deep/.van-button {
				background-color: #EB5946;
				width: 100%;
				border: none;
			}

		}

		.no-login-wrapper__login-box:active {
			background-color: #CF4937;
		}

		.no-login-wrapper__agreement-box {
			font-size: 28rpx;
			position: absolute;
			bottom: 80rpx;
			width: 100%;
			text-align: center;
		}
	}
</style>
