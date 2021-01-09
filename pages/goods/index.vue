<template>
	<div class="page-goods">
		<!-- 搜索栏-->
		<div class="page-goods_search-bar">
			<van-search :value="searchValue" placeholder="请输入搜索关键词" class="search-bar__search-input" shape="round" />
			<div class="search-bar__filter-btn">
				<van-button icon="filter-o" round type="default">
					筛选
				</van-button>
			</div>
		</div>
		<!-- banner -->
		<div class="banner-wrapper borderbox">
			<view class="uni-padding-wrap">
				<view class="page-section swiper">
					<view class="page-section-spacing">
						<swiper class="swiper" :indicator-dots="true" circular :autoplay="true" :interval="2000" :duration="500">
							<swiper-item v-for="(item, index) in bannerImgList" :key="index" class="swiper-item-wrapper borderbox">
								<view class="swiper-item uni-bg-red">
									<img :src="item.src">
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>
			</view>
		</div>
		<!-- ugc -->
		<div class="ugc-wrapper borderbox">
			<img :src="img_ugc">
		</div>
		<!-- 金刚去 -->
		<div class="pjkk-wrapper borderbox">
			<div class="pjkk__item" v-for="(item, index) in img_pjkkList" :key="index">
				<img :src="item">
				<span class="pjkk__desc">产品名称</span>
			</div>
		</div>
		<!-- 瓷片区 -->
		<div class="porcelain-wrapper borderbox">
			<div class="porcelain-wrapper__title">买卖好实惠</div>
			<div class="porcelain-wrapper__body">
				<van-row gutter="10">
					<van-col span="16" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #E8F3F6;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #77929C">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #9BABB3;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box">
								<img :src="porcelain_2">
							</div>
						</div>
					</van-col>
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #F6F6F6;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #222222">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #FE6565;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_1">
							</div>
						</div>
					</van-col>
				</van-row>
				<div class="row-space"></div>
				<van-row gutter="10">
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #FFCA99;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #D27E30">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #D27E30;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_1">
							</div>
						</div>
					</van-col>
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #B0DAC8;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #5B917B">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #87BFA8;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_2">
							</div>
						</div>
					</van-col>
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #E8F3F6;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #77929C">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #9BABB2;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_1">
							</div>
						</div>
					</van-col>
				</van-row>
				<div class="row-space"></div>
				<van-row gutter="10">
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #D0DAF0;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #6C81A5">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #ADB9D4;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_2">
							</div>
						</div>
					</van-col>
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #E8DEBB;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #D1A370">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #D8B88A;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_1">
							</div>
						</div>
					</van-col>
					<van-col span="8" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #EBD3BB;">
							<div class="porcelain-wrapper__body_item-innter__desc-box">
								<div class="porcelain-wrapper__body_item-innter__desc-box-title" style="color: #A77E61">
									xxxxxxxxxxxxxx专区
								</div>
								<div class="porcelain-wrapper__body_item-innter__desc-box-text" style="background-color: #DBB891;">
									xxxxxxxxxxxxxxxxxxxxx优惠
								</div>
							</div>
							<div class="porcelain-wrapper__body_item-innter__img-box" style="height: 50%; top:50%;">
								<img :src="porcelain_2">
							</div>
						</div>
					</van-col>
				</van-row>
			</div>
		</div>

		<!-- 商品列表 -->
		<div class="goods-list">
			<div class="goods-list__layout-wrapper">
				<van-tabs sticky offset-top="50" z-index="20" swipeable class="goods-list__layout-van-sticky__van-tabs">
					<van-tab title="标签 1">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
					<van-tab title="标签 2">
						<div>11111111</div>
						<div>22222222</div>
						<div>33333</div>
						<div>44444</div>
						<div>55555</div>
						<div>666</div>
						<div>777</div>
						<div>88</div>
						<div>99</div>
						<div>10</div>
						<div>11</div>
						<div>12</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
						<div>22222222</div>
					</van-tab>
					<van-tab title="标签 3">内容 3</van-tab>
					<van-tab title="标签 4">内容 4</van-tab>
					<van-tab title="标签 5">内容 5</van-tab>
				</van-tabs>

			</div>
			<div class="goods-list__list-wrapper"></div>
		</div>

	</div>
</template>

<script>
	// img
	import img_testBanner from '@/static/images/home/banner.png'
	import img_ugc from '@/static/images/home/ugc.svg'
	import pjkk_1 from '@/static/images/home/pjkk/PJKK_1.png'
	import pjkk_2 from '@/static/images/home/pjkk/PJKK_2.png'
	import pjkk_3 from '@/static/images/home/pjkk/PJKK_3.png'
	import pjkk_4 from '@/static/images/home/pjkk/PJKK_4.png'
	import pjkk_5 from '@/static/images/home/pjkk/PJKK_5.png'
	import porcelain_1 from '@/static/images/home/porcelain/porcelain_1.png'
	import porcelain_2 from '@/static/images/home/porcelain/porcelain_2.png'
	import mockGoodsimg from '@/static/images/mock/mock-goodsimg.png'

	// 商品列表组件
	import goodsList from '@/components/goodsList/index.vue'

	export default {
		// 挂载
		onLaunch: function() {
			console.log('首页 Launch')
		},
		// 显示
		onShow: function() {
			// console.log(this.$store.getters.store_UserInfo)
			// http_getPhone()
			console.log('首页 Show')
		},
		// 隐藏
		onHide: function() {
			console.log('首页 Hide')
		},
		components: {
			// 商品列表组件
			goodsList,
		},
		data() {
			return {
				// 搜索框文字
				searchValue: '',
				// banner列表
				bannerImgList: [{
						src: img_testBanner,
					},
					{
						src: img_testBanner,
					},
					{
						src: img_testBanner,
					},
				],
				// ugc图片
				img_ugc,
				img_pjkkList: [
					pjkk_1,
					pjkk_2,
					pjkk_3,
					pjkk_4,
					pjkk_5,
				],
				porcelain_1,
				porcelain_2,
				goodsListData: [{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: mockGoodsimg,
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
						imgSrc: mockGoodsimg,
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
						imgSrc: mockGoodsimg,
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
						imgSrc: mockGoodsimg,
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
						imgSrc: mockGoodsimg,
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
		}
	}
</script>

<style lang="stylus" scoped>
	.page-goods {
		padding-top: 100rpx;

		// 搜索栏
		.page-goods_search-bar {
			position: fixed;
			z-index: 10;
			top: 0;
			width: 100%;
			height: 100rpx;
			padding: 0 28rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);

			.search-bar__search-input {
				flex: 1;

				/deep/.van-search {
					width: 100%;
					height: 100%;
					padding: 0;

				}
			}

			.search-bar__filter-btn {
				height: 64rpx;
				width: 144rpx;
				margin-left: 44rpx;

				/deep/.van-button {
					width: 100%;
					height: 100%;
					font-size: 22rpx !important;
					display: flex;
				}

			}
		}

		// banner 
		.banner-wrapper {
			width: 100%;
			margin-top: 16rpx;
			padding: 14rpx;
			background-color: #fff;

			.swiper-item-wrapper {
				padding: 0 14rpx;

				/deep/.swiper-item {
					width: 100%;
					height: 100%;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}


		}

		// ugc
		.ugc-wrapper {
			width: 100%;
			height: 140rpx;
			padding: 0 28rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		// 金刚区
		.pjkk-wrapper {
			width: 100%;
			height: 110rpx;
			display: flex;
			justify-content: space-between;
			padding: 0 28rpx;
			margin: 14rpx 0;

			.pjkk__item {
				flex: 1;
				text-align: center;

				image {
					display: block;
					transform: translateX(16rpx);
					width: 108rpx;
					height: 64rpx;
				}

				.pjkk__desc {
					font-size: 24rpx;
					color: #222;
				}
			}

			.pjkk__item:last-of-type {
				margin-right: 0;
			}
		}

		// 瓷片区
		.porcelain-wrapper {
			margin-bottom: 48rpx;
			padding: 28rpx;

			.porcelain-wrapper__title {
				font-size: 40rpx;
				line-height: 1;
				color: #222;
				font-weight: 700;
				margin-bottom: 28rpx;
			}

			.porcelain-wrapper__body {
				.row-space {
					height: 20rpx;
				}

				.porcelain-wrapper__body_item {
					/deep/.van-col {
						height: 220rpx;

						.porcelain-wrapper__body_item-innter {
							position: relative;
							height: 100%;
							width: 100%;
							border-radius: 18rpx;
							line-height: 1;

							.porcelain-wrapper__body_item-innter__desc-box {
								position: absolute;
								top: 20rpx;
								left: 20rpx;
								z-index: 5;
								max-width: 100%;

								.porcelain-wrapper__body_item-innter__desc-box-title {
									z-index: 5;
									max-width: 50%;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									font-weight: 700;
									font-size: 28rpx;
								}

								.porcelain-wrapper__body_item-innter__desc-box-text {
									z-index: 5;
									max-width: 50%;
									font-size: 22rpx;
									color: #fff;
									margin-top: 20rpx;
									padding: 8rpx;
									border-radius: 8rpx;
									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;

									span {
										max-width: 100%;
										height: 100%;

									}
								}
							}

							.porcelain-wrapper__body_item-innter__img-box {
								position: absolute;
								top: 20rpx;
								right: 20rpx;
								bottom: 20rpx;
								width: 50%;

								image {
									width: 100%;
									height: 100%;
								}
							}
						}
					}

				}
			}
		}

		// 商品列表
		.goods-list {
			.goods-list__layout-wrapper {
				width: 100%;
				height: 100rpx;
				z-index: 20;
				border-top: 1rpx solid #fafafa;

				/deep/.van-tabs__wrap {
					height: 100rpx;
				}

				/deep/.van-tab__pane {
					padding: 28rpx;
					box-sizing: border-box;
					background-color: #F6F6F6;
				}

			}

		}

	}
</style>
