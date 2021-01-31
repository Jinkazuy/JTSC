<template>
	<div class="page-goods">
		<!-- 搜索栏-->
		<div class="page-goods_search-bar">
			<van-search @search="_onSearch" :value="searchValue" placeholder="请输入搜索关键词" class="search-bar__search-input" shape="round" />
			<div class="search-bar__filter-btn">
				<van-button icon="filter-o" round type="default" @click="filterBar_more_driveShow=true">
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
							<swiper-item v-for="(item, index) in bannerImgList" :key="index" class="swiper-item-wrapper borderbox" @click="_openPage(item)">
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
		<div class="ugc-wrapper borderbox" @click="_openAboutUs">
			<img :src="img_ugc">
		</div>
		<!-- 金刚去 -->
		<div class="pjkk-wrapper borderbox">
			<div class="pjkk__item" v-for="(item, index) in img_pjkkList" :key="index" @click="_openGoodsSpecial(item.itemCode)">
				<img :src="item.imgSrc">
				<span class="pjkk__desc">{{item.itemName}}</span>
			</div>
		</div>
		<!-- 瓷片区 -->
		<div class="porcelain-wrapper borderbox">
			<div class="porcelain-wrapper__title">买卖好实惠</div>
			<div class="porcelain-wrapper__body">
				<van-row gutter="10">
					<van-col span="16" class="porcelain-wrapper__body_item">
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #E8F3F6;" @click="_openGoodsSpecialByKeyWord('1-1')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #F6F6F6;" @click="_openGoodsSpecialByKeyWord('1-2')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #FFCA99;" @click="_openGoodsSpecialByKeyWord('2-1')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #B0DAC8;" @click="_openGoodsSpecialByKeyWord('2-2')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #E8F3F6;" @click="_openGoodsSpecialByKeyWord('2-3')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #D0DAF0;" @click="_openGoodsSpecialByKeyWord('3-1')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #E8DEBB;" @click="_openGoodsSpecialByKeyWord('3-2')">
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
						<div class="porcelain-wrapper__body_item-innter" style="background-color: #EBD3BB;" @click="_openGoodsSpecialByKeyWord('3-3')">
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
				<van-tabs @change="goodsListTypeChange" sticky offset-top="50" z-index="20" swipeable class="goods-list__layout-van-sticky__van-tabs">
					<van-tab title="护栏产品">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
					<van-tab title="网栏产品">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
					<van-tab title="诱导设施">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
					<van-tab title="安全设施">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
					<van-tab title="设备仪器">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
					<van-tab title="其他建材">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
				</van-tabs>
				<div v-if="goodsListLoadingFlag"  class="good-list-loading-wrapper">
					<van-loading/>
				</div>

			</div>
			<div class="goods-list__list-wrapper"></div>
		</div>

		<!-- 抽屉页 - 更多筛选 -->
		<van-popup :show="filterBar_more_driveShow" @close="filterBar_more_driveShow = false" position="right" custom-style="height: 100%; width: 60%;">内容</van-popup>

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
			this.goodsListData = []
			this.goodsListDataIsMore = true
			this.http_getGoodsListData()
		},
		// 隐藏
		onHide: function() {
			console.log('首页 Hide')
		},
		components: {
			// 商品列表组件
			goodsList,
		},
		// 页面触底
		onReachBottom() {
			console.log('页面触底')
			if (!this.goodsListDataIsMore) {
				Toast('暂无更多数据~')
				return
			}
			// this.httpParams.page++
			this.http_getGoodsListData()
		},
		data() {
			return {
				// 搜索框文字
				searchValue: '',
				// banner列表
				bannerImgList: [{
						src: img_testBanner,
						path: 'aboutUs'
					},
					{
						src: img_testBanner,
						path: 'aboutUs'
					},
					{
						src: img_testBanner,
						path: 'aboutUs'
					},
				],
				// 筛选更多抽屉是否显示
				filterBar_more_driveShow: false,
				
				// ugc图片
				img_ugc,
				img_pjkkList: [{
						imgSrc: pjkk_1,
						itemCode: '1',
						itemName: '护栏网栏'
					},
					{
						imgSrc: pjkk_2,
						itemCode: '2',
						itemName: '诱导设施'
					},
					{
						imgSrc: pjkk_3,
						itemCode: '3',
						itemName: '安设施设'
					},
					{
						imgSrc: pjkk_4,
						itemCode: '4',
						itemName: '设备仪器'
					},
					{
						imgSrc: pjkk_5,
						itemCode: '5',
						itemName: '其他建材'
					},
				],
				porcelain_1,
				porcelain_2,
				// 商品列表tab类型的索引
				// 0护栏、1网栏、2诱导设施、3安全设施、4设备仪器、5建材
				goodsListTypeIndex: 0,
				// 商品列表tab数据
				goodsListData: [],
				// 商品列表tab，是否有更多数据
				goodsListDataIsMore: true,
				// 商品列表tab，lading 是否展示
				goodsListLoadingFlag: false,
			}
		},
		methods: {
			// 点击金刚区、瓷片区，打开商品专题列表
			_openGoodsSpecial(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/goodsSpecial/index?type=${item}`
				})
			},
			// 搜索确定
			_onSearch(e) {
				this._openGoodsSpecialByKeyWord(e.detail)
			},
			// 关键词跳转商品列表
			_openGoodsSpecialByKeyWord(keyWord) {
				console.log('关键词或瓷片区')
				console.log(keyWord)
				uni.navigateTo({
					url: `/pages/goodsSpecial/index?keyWord=${keyWord}`
				})
			},
			// 打开关于我们
			_openAboutUs() {
				uni.navigateTo({
					url: `/pages/aboutUs/index`
				})
			},
			// 点击banner跳转页面
			_openPage(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pages/${item.path}/index`
				})
			},
			// 获取tab商品列表数据
			async http_getGoodsListData(){
				// this.goodsListTypeIndex
				// 0护栏、1网栏、2诱导设施、3安全设施、4设备仪器、5建材
				
				// this.goodsListData
				
				console.log('http 获取商品列表数据')
				this.goodsListLoadingFlag = true
				// let httpRes = await API_goods.xxxx(xxxx)
				// console.log(httpRes)
				let httpRes = [{
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
				
				
				if (!httpRes) {
					this.goodsListDataIsMore = false
					this.goodsListLoadingFlag = false
					return
				}
				this.goodsListLoadingFlag = false
				this.goodsListData.push(...httpRes)
				console.log(this.goodsListData)
			},
			// tab商品列表切换时 
			goodsListTypeChange(e){
				console.log(e.detail.index)
				this.goodsListTypeIndex = e.detail.index
				this.goodsListData = []
				this.goodsListDataIsMore = true
				// tab切换，请求数据
				this.http_getGoodsListData()
			},
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
		
		.good-list-loading-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 28rpx;
			background-color: #fff;
			/deep/.van-loading {}
		}

	}
</style>
