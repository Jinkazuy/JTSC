<template>
	<div class="directories-info">
		<!-- banner -->
		<div class="banner-wrapper">
			<swiper class="swiper" :indicator-dots="true" circular :autoplay="false" :interval="2000" :duration="500">
				<swiper-item v-for="(item, index) in bannerImgList" :key="index" class="swiper-item-wrapper borderbox">
					<view class="swiper-item uni-bg-red">
						<img :src="item.src">
					</view>
				</swiper-item>
			</swiper>
		</div>

		<!-- layout -->
		<van-tabs @change="layoutTypeChange" sticky offset-top="0" z-index="20" swipeable>
			<van-tab title="简介">
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				<img :src="bannerImgList[0].src">
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				<img :src="bannerImgList[0].src">
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
				简介简介简介简介 可以是文字，可以是图片<br />
			</van-tab>
			<van-tab title="产品服务">
				产品服务 可以是文字，可以是图片
			</van-tab>
			<van-tab title="联系我们">
				联系我们 可以是文字，可以是图片
			</van-tab>
		</van-tabs>


		<!-- 操作栏 -->
		<div class="goods-info__goods-tool-bar">
			<div class="news-detail__tool-bar__collection" @click="_collection" v-if="!isCollection">
				<FontAwesome type="fas fa-star" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">收 藏</span>
			</div>
			<div class="news-detail__tool-bar__collection iscollection" v-if="isCollection">
				<FontAwesome type="fas fa-star" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">已收藏</span>
			</div>
			<div class="news-detail__tool-bar__enquiry" @click="callPhome">
				<FontAwesome type="fas fa-phone-alt" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">联 系</span>
			</div>
		</div>
		
		<!-- toast -->
		<van-toast id="van-toast" />
	</div>
</template>

<script>
	import goodsImg from '@/static/images/mock/mock-directories.png'
	import Toast from '@/wxcomponents/weapp/dist/toast/toast'
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		onLoad(options) {
			console.log('企业详情onLoad')
			console.log(options)

		},
		components: {
			FontAwesome
		},
		data() {
			return {
				bannerImgList: [{
						src: goodsImg,
					},
					{
						src: goodsImg,
					},
					{
						src: goodsImg,
					},
				],

				// 该用户是否已收藏
				isCollection: false,
				// 企业信息
				enterpriseInfoData: {
					phoneNumber: '13800138000'
				}
			}
		},
		methods: {
			layoutTypeChange(e) {
				console.log(e)
			},
			// 收藏
			_collection() {
				console.log('收藏')
				// todo: 判断用户是否已登录

				// 已登录且未收藏
				Toast('已收藏')
				this.isCollection = true
			},
			// 拨打电话
			callPhome() {
				uni.makePhoneCall({
					phoneNumber: this.enterpriseInfoData.phoneNumber
				})
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.directories-info {
		position: relative;

		.banner-wrapper {
			/deep/.swiper {
				height: 500rpx;
			}

			/deep/.swiper-item-wrapper {

				image {
					width: 100%;
					// height: 100%;
				}
			}

		}


		/deep/.van-tabs__wrap {
			box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
		}

		/deep/.van-tab__pane {
			padding: 28rpx 28rpx 120rpx;
			box-sizing: border-box;
			font-size: 28rpx;
			color: #222;
			line-height: 1.4;

			image {
				width: 100%;
			}
		}


		.goods-info__goods-tool-bar {
			width: 100%;
			height: 100rpx;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			right: 0;
			left: 0;
			display: flex;
			z-index: 9999;

			.news-detail__tool-bar__collection,
			.news-detail__tool-bar__enquiry {
				flex: 1;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #E87839;
				color: #fff;
			}

			.news-detail__tool-bar__enquiry {
				background-color: #EB5946;
			}

			.news-detail__tool-bar__collection:active {
				background-color: #C96126;
			}

			.news-detail__tool-bar__collection.iscollection {
				background-color: #C6C6C6;
			}

			.news-detail__tool-bar__enquiry:active {
				background-color: #CF4937;
			}


		}


	}
</style>
