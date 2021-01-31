<template>
	<div class="directories-list-wrapper">
		<div class="directories-list__item-wrapper" v-for="(directoriesItem, directoriesIndex) in directoriesListData" :key="directoriesIndex"
		 @click="_opendirectoriesInfo(directoriesItem)">
			<div class="directories-list__item-wrapper-img-box borderbox" :style="{ backgroundImage:'url('+directoriesItem.imgSrc+')' }">
				<!-- <img :src="directoriesItem.imgSrc"> -->
				<!-- 	<div class="img-banner-box" v-show="directoriesItem.promotion._h&&directoriesItem.promotion._v&&directoriesItem.promotion._price">
					<div class="img-banner-box__transverse nowrap borderbox">
						{{directoriesItem.promotion._h}}
					</div>
					<div class="img-banner-box__portrait nowrap borderbox">
						<p class="promotion_v nowrap">{{directoriesItem.promotion._v}}</p>
						<p class="promotion_v_price nowrap">￥{{directoriesItem.promotion._price}}</p>
					</div>
				</div> -->
			</div>
			<div class="directories-list__item-wrapper-info-box borderbox">
				<div class="directories-list__item-wrapper-info-box__directories-name sum-nowrap">{{directoriesItem.name}}</div>
				<div class="directories-list__item-wrapper-info-box__directories-desc sum-nowrap">
					<!-- <span class="directories-list__item-wrapper-info-box__directories-desc__tags">【{{directoriesItem.descTag}}】</span> -->
					{{directoriesItem.desc}}</div>
				<div class="directories-list__item-wrapper-info-box__directories-tags nowrap">{{directoriesItem.tags}}</div>
				<div class="directories-list__item-wrapper-info-box__active-bar borderbox">
					<div class="directories-list__item-wrapper-info-box__directories-price">
						<FontAwesome type="fas fa-map-marker-alt" size="28rpx" color="#EC5C5E"></FontAwesome>
						<span style="margin-left: 8rpx;">{{directoriesItem.addrs}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// 引入icon
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		components: {
			FontAwesome
		},
		props: {
			directoriesListData: {
				type: Array,
				default: () => {
					return []
				},
			}
		},
		data() {
			return {}
		},
		// 显示
		created() {
			// console.log(this.$store.getters.store_UserInfo)
			// http_getPhone()
			console.log('商品列表↓')
			console.log(this.directoriesListData)
		},
		methods: {
			// 跳转到商品详情页
			_opendirectoriesInfo(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/directoriesInfo/index?directoriesId=${item.name}`
				})
			}
		}

	}
</script>

<style lang="stylus" scoped>
	.directories-list-wrapper {
		width: 100%;
		color: #222;

		.directories-list__item-wrapper {
			float: left;
			width: 49%;
			height: 606rpx;
			background-color: #fff;
			border-radius: 24rpx;
			margin-bottom: 20rpx;

			.directories-list__item-wrapper-img-box {
				position: relative;
				width: 100%;
				height: 50%;
				border: 6rpx solid #EC5C5E;
				border-radius: 24rpx 24rpx 0 0;
				overflow: hidden;
				
				background-position: 50%;
				background-size: cover;
				background-repeat: no-repeat;

				// image {
				// 	width: 100%;
				// 	height: 100%;
				// 	position: absolute;
				// 	// left: -50%;
				// }

				// .img-banner-box {
				// 	position: absolute;
				// 	height: 80rpx;
				// 	left: 0;
				// 	right: 0;
				// 	bottom: 0;
				// 	overflow: hidden;

				// 	.img-banner-box__transverse {
				// 		position: absolute;
				// 		left: 0;
				// 		bottom: 0;
				// 		height: 40rpx;
				// 		width: 200rpx;
				// 		background-color: #EC5C5E;
				// 		font-size: 20rpx;
				// 		color: #fff;
				// 		font-weight: 700;
				// 		line-height: 40rpx;
				// 		padding-top: 6rpx;

				// 	}


				// 	.img-banner-box__portrait {
				// 		position: absolute;
				// 		top: 0;
				// 		right: 0;
				// 		bottom: 0;
				// 		width: 140rpx;
				// 		background-color: #EC5C5E;
				// 		box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.4);
				// 		border-radius: 60rpx 0 0 0;
				// 		color: #fff;
				// 		font-weight: 700;
				// 		padding-top: 12rpx;

				// 		.promotion_v {
				// 			text-align: center;
				// 			font-size: 14rpx;
				// 			padding-left: 20rpx;
				// 		}

				// 		.promotion_v_price {
				// 			text-align: center;
				// 			font-size: 32rpx;
				// 			padding-left: 8rpx;
				// 		}

				// 	}
				// }
			}

			.directories-list__item-wrapper-info-box {
				position: relative;
				width: 100%;
				height: 50%;
				padding: 20rpx;

				.directories-list__item-wrapper-info-box__directories-name {
					font-size: 26rpx;
					font-weight: 700;
					color: #222;
					line-height: 1.4;
					margin-bottom: 10rpx;
				}

				.directories-list__item-wrapper-info-box__directories-desc {
					font-size: 24rpx;
					color: #222;
					margin-bottom: 10rpx;
					line-height: 1.4;

					.directories-list__item-wrapper-info-box__directories-desc__tags {
						color: #E25E59;
					}
				}

				.directories-list__item-wrapper-info-box__directories-tags {
					background-color: #FDF7AD;
					font-size: 24rpx;
				}

				.directories-list__item-wrapper-info-box__active-bar {
					position: absolute;
					bottom: 28rpx;
					right: 20rpx;
					left: 20rpx;
					background-color: #fff;
					padding-top: 20rpx;
					display: flex;
					justify-content: space-between;

					.directories-list__item-wrapper-info-box__directories-price {
						font-size: 26rpx;
						font-weight: 700;
						color: #EB5946;
					}
				}

			}
		}

		.directories-list__item-wrapper:nth-child(odd) {
			margin-right: 2%;
		}
	}
</style>
