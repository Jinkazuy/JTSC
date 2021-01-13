<template>
	<div class="news-detail borderbox">
		<div class="news-detail__title-box">
			<p class="news-detail__title-box__title">{{title}}</p>
			<div class="news-detail__title-box__desc">
				<span class="news-detail__title-box__desc-local">{{local}}</span>
				<span class="news-detail__title-box__desc-doc">·</span>
				<span class="news-detail__title-box__desc-date">{{date}}</span>
			</div>
			<div class="news-detail__title-box__bottom-line"></div>
		</div>
		<div class="news-detail__info-box">
			{{desc}}
		</div>
		<div class="news-detail__tool-bar">
			<div class="news-detail__tool-bar__back" @click="_goBack">
				<FontAwesome type="fas fa-chevron-left" size="36" color="#ccc"></FontAwesome>
			</div>
			<div class="news-detail__tool-bar__collection" @click="_collection" v-if="!isCollection">
				<FontAwesome type="fas fa-star" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">收 藏</span>
			</div>
			<div class="news-detail__tool-bar__collection iscollection" v-if="isCollection">
				<FontAwesome type="fas fa-star" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">已收藏</span>
			</div>
			<div class="news-detail__tool-bar__share" @click="shareShow = true">
				<FontAwesome type="fas fa-share" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">分 享</span>
			</div>
		</div>
		<!-- toase -->
		<van-toast id="van-toast" />
		<!-- 分享面板 -->
		<van-share-sheet :show="shareShow" title="立即分享给好友" :options="shareOptions" @select="_shareOnSelect" @close="_shareOnClose" />
	</div>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	import Toast from '@/wxcomponents/weapp/dist/toast/toast'
	export default {
		onShow(options) {
			console.log('id↓')
			// 路由传参
			console.log(this.$mp.query.id)
			// 判断用户是否登录，如果已登录，判断是否收藏了该文章
		},
		components: {
			FontAwesome
		},
		data() {
			return {
				title: '标题标题标题标题标题标题标题标题标题标题标题标题标题标',
				local: '山东省',
				date: '一小时前',
				desc: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
				// 是否已收藏
				isCollection: false,
				// 是否展示分享面板
				shareShow: false,
				// 分享面板选项
				shareOptions: [{
						name: '微信',
						icon: 'wechat',
						openType: 'share'
					},
					// {
					// 	name: '微博',
					// 	icon: 'weibo'
					// },
					// {
					// 	name: '复制链接',
					// 	icon: 'link'
					// },
					// {
					// 	name: '分享海报',
					// 	icon: 'poster'
					// },
					// {
					// 	name: '二维码',
					// 	icon: 'qrcode'
					// },
				]
			}
		},
		methods: {
			// 返回
			_goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			// 收藏
			_collection() {
				console.log('收藏')
				// todo: 判断用户是否已登录

				// 已登录且未收藏
				Toast('已收藏')
				this.isCollection = true
			},
			// 分享 - 选择
			_shareOnSelect(event) {
				Toast(event.detail.name)
				this._shareOnClose()
			},
			// 分享 - 取消
			_shareOnClose() {
				this.shareShow = false
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.news-detail {
		padding: 28rpx;

		.news-detail__title-box {
			.news-detail__title-box__title {
				font-size: 44rpx;
				color: #222;
				line-height: 1.4;
				font-weight: 700;
				margin-bottom: 24rpx;

			}

			.news-detail__title-box__desc {
				color: #A8A8A8;
				font-size: 28rpx;

				.news-detail__title-box__desc-local {}

				.news-detail__title-box__desc-doc {
					margin: 0 14rpx;
				}

				.news-detail__title-box__desc-date {}
			}

			.news-detail__title-box__bottom-line {
				width: 100%;
				height: 2rpx;
				background-color: #eee;
				margin: 40rpx 0;
			}
		}

		.news-detail__info-box {
			font-size: 36rpx;
			color: #494949;
			line-height 1.4;
			padding-bottom: 120rpx;
		}

		.news-detail__tool-bar {
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			height: 100rpx;
			background-color: #fff;
			display: flex;

			.news-detail__tool-bar__back {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				height: 100%;
			}

			.news-detail__tool-bar__collection {
				flex: 2;
				width: 40%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #EB5946;
				color: #fff;
			}

			.news-detail__tool-bar__collection.iscollection {
				background-color: #C6C6C6;
			}

			.news-detail__tool-bar__share {
				flex: 2;
				width: 40%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #E87839;
				color: #fff;
			}

			.news-detail__tool-bar__share:active {
				background-color: #CF4937;
			}

			.news-detail__tool-bar__share:active {
				background-color: #C96126;
			}

		}
	}
</style>
