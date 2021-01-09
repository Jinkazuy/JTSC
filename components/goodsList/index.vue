<template>
	<div class="goods-list-wrapper">
		<div class="goods-list__item-wrapper" v-for="(goodsItem, goodsIndex) in goodsListData" :key="goodsIndex">
			<div class="goods-list__item-wrapper-img-box borderbox">
				<img :src="goodsItem.imgSrc">
				<div class="img-banner-box" v-show="goodsItem.promotion._h&&goodsItem.promotion._v&&goodsItem.promotion._price">
					<div class="img-banner-box__transverse nowrap borderbox">
						{{goodsItem.promotion._h}}
					</div>
					<div class="img-banner-box__portrait nowrap borderbox">
						<p class="promotion_v nowrap">{{goodsItem.promotion._v}}</p>
						<p class="promotion_v_price nowrap">￥{{goodsItem.promotion._price}}</p>
					</div>
				</div>
			</div>
			<div class="goods-list__item-wrapper-info-box borderbox">
				<div class="goods-list__item-wrapper-info-box__goods-name sum-nowrap">{{goodsItem.name}}</div>
				<div class="goods-list__item-wrapper-info-box__goods-desc sum-nowrap">
					<span class="goods-list__item-wrapper-info-box__goods-desc__tags">【{{goodsItem.descTag}}】</span>
					{{goodsItem.desc}}</div>
				<div class="goods-list__item-wrapper-info-box__goods-tags nowrap">{{goodsItem.tags}}</div>
				<div class="goods-list__item-wrapper-info-box__active-bar borderbox">
					<div class="goods-list__item-wrapper-info-box__goods-price">
						{{goodsItem.price}}
					</div>
					<div class="goods-list__item-wrapper-info-box__add-car">
						<FontAwesome type="fas fa-cart-plus" size="28rpx" color="#D8D8D8"></FontAwesome>
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
			goodsListData: {
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
			console.log(this.goodsListData)
		},

	}
</script>

<style lang="stylus" scoped>
	.goods-list-wrapper {
		width: 100%;
		color: #222;

		.goods-list__item-wrapper {
			float: left;
			width: 49%;
			height: 606rpx;
			background-color: #fff;
			border-radius: 24rpx;
			margin-bottom: 20rpx;

			.goods-list__item-wrapper-img-box {
				position: relative;
				width: 100%;
				height: 50%;
				border: 6rpx solid #EC5C5E;
				border-radius: 24rpx 24rpx 0 0;

				image {
					width: 100%;
					height: 100%;
				}

				.img-banner-box {
					position: absolute;
					height: 80rpx;
					left: 0;
					right: 0;
					bottom: 0;
					overflow: hidden;

					.img-banner-box__transverse {
						position: absolute;
						left: 0;
						bottom: 0;
						height: 40rpx;
						width: 200rpx;
						background-color: #EC5C5E;
						font-size: 20rpx;
						color: #fff;
						font-weight: 700;
						line-height: 40rpx;
						padding-top: 6rpx;

					}


					.img-banner-box__portrait {
						position: absolute;
						top: 0;
						right: 0;
						bottom: 0;
						width: 140rpx;
						background-color: #EC5C5E;
						box-shadow: 0 15px 20px 0 rgba(0, 0, 0, 0.4);
						border-radius: 60rpx 0 0 0;
						color: #fff;
						font-weight: 700;
						padding-top: 12rpx;

						.promotion_v {
							text-align: center;
							font-size: 14rpx;
							padding-left: 20rpx;
						}

						.promotion_v_price {
							text-align: center;
							font-size: 32rpx;
							padding-left: 8rpx;
						}

					}
				}
			}

			.goods-list__item-wrapper-info-box {
				position: relative;
				width: 100%;
				height: 50%;
				padding: 20rpx;

				.goods-list__item-wrapper-info-box__goods-name {
					font-size: 26rpx;
					font-weight: 700;
					color: #222;
					line-height: 1.4;
					margin-bottom: 10rpx;
				}

				.goods-list__item-wrapper-info-box__goods-desc {
					font-size: 24rpx;
					color: #222;
					margin-bottom: 10rpx;
					line-height: 1.4;

					.goods-list__item-wrapper-info-box__goods-desc__tags {
						color: #E25E59;
					}
				}

				.goods-list__item-wrapper-info-box__goods-tags {
					background-color: #FDF7AD;
					font-size: 24rpx;
				}

				.goods-list__item-wrapper-info-box__active-bar {
					position: absolute;
					bottom: 28rpx;
					right: 20rpx;
					left: 20rpx;
					background-color: #fff;
					padding-top: 20rpx;
					display: flex;
					justify-content: space-between;

					.goods-list__item-wrapper-info-box__goods-price {
						font-size: 26rpx;
						font-weight: 700;
						color: #EB5946;
					}

					.goods-list__item-wrapper-info-box__add-car {
						width: 28rpx;
						height: 28rpx;
						margin-right: 8rpx;
					}
				}

			}
		}

		.goods-list__item-wrapper:nth-child(odd) {
			margin-right: 2%;
		}
	}
</style>
