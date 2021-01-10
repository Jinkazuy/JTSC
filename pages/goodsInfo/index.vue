<template>
	<div class="goods-info">
		<!-- 商品图片 -->
		<div class="goods-info__goods-img-wrapper">
			<swiper class="swiper" :indicator-dots="true" circular :autoplay="false" :interval="2000" :duration="500">
				<swiper-item v-for="(item, index) in bannerImgList" :key="index" class="swiper-item-wrapper borderbox">
					<view class="swiper-item uni-bg-red">
						<img :src="item.src">
					</view>
				</swiper-item>
			</swiper>
		</div>
		<!-- 商品描述 -->
		<div class="goods-info__goods-desc-wrapper">
			<div class="goods-info__goods-desc-wrapper__name borderbox">
				{{goodsName}}
			</div>
			<!-- 价格/操作 -->
			<div class="goods-info__goods-desc-wrapper__active-box borderbox">
				<div class="goods-info__goods-desc-wrapper__active-box-price">
					{{goodsPrice}}
				</div>
				<div class="goods-info__goods-desc-wrapper__active-box-btn" @click="enquiry = true">
					<FontAwesome type="fas fa-phone-alt" size="26" color="#fff" style="margin-right: 12rpx;"></FontAwesome>
					我要询价
				</div>
			</div>
			<!-- 商品标签、保障 -->
			<div class="goods-info__goods-desc-wrapper__tags borderbox">
				<div class="goods-info__goods-desc-wrapper__tags-tit">保障</div>
				<div class="goods-info__goods-desc-wrapper__tags-item">
					<FontAwesome type="fas fa-star" size="16" color="#EB5946"></FontAwesome>
					<span>精品</span>
				</div>
				<div class="goods-info__goods-desc-wrapper__tags-item">
					<FontAwesome type="fas fa-star" size="16" color="#EB5946"></FontAwesome>
					<span>国标</span>
				</div>
			</div>
			<!-- 规格、配送 -->
			<div class="goods-info__goods-desc-wrapper__desc borderbox">
				<div class="goods-info__goods-desc-wrapper__norms borderbox" @click="actionSheet_specificationsShow = true">
					<div class="goods-info__goods-desc-wrapper__norms__tit">规格</div>
					<div class="goods-info__goods-desc-wrapper__norms__select nowrap">
						<span class="goods-info__goods-desc-wrapper__norms__select-text nowrap">{{Specifications}}</span>
						<FontAwesome type="fas fa-chevron-right" size="24" color="#CCCCCC"></FontAwesome>
					</div>
				</div>
				<div class="goods-info__goods-desc-wrapper__delivery borderbox" @click="actionSheet_addrShow = true">
					<div class="goods-info__goods-desc-wrapper__norms__tit">配送</div>
					<div class="goods-info__goods-desc-wrapper__norms__select nowrap">
						<span class="goods-info__goods-desc-wrapper__norms__select-text nowrap">{{ShippingAddress}}</span>
						<FontAwesome type="fas fa-chevron-right" size="24" color="#CCCCCC"></FontAwesome>
					</div>
				</div>
			</div>
		</div>
		<!-- 商品详情、规格 -->
		<div class="goods-info__goods-info-wrapper">
			<van-tabs sticky>
				<van-tab title="商品详情">
					<div class="goods-info__goods-info-wrapper__img-list">
						<img :src="item.src" v-for="(item,index) in bannerImgList" :key="index">
					</div>
				</van-tab>
				<van-tab title="规格">
					<div class="goods-info__goods-info-wrapper__specifications borderbox">
						规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格规格
					</div>
				</van-tab>
			</van-tabs>
		</div>
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
			<div class="news-detail__tool-bar__enquiry" @click="enquiry = true">
				<FontAwesome type="fas fa-phone-alt" size="36" color="#fff"></FontAwesome>
				<span style="margin-left: 24rpx;">询 价</span>
			</div>
		</div>
		<!-- toast -->
		<van-toast id="van-toast" />
		<!-- 练习客服弹窗 -->
		<van-popup class="enquiry-popup" :show="enquiry" @close="_enquiryOnClose" z-index="99999" round closeable>
			<div class="enquiry-top">
				联系客服
			</div>
			<div class="enquiry-center">
				<div class="enquiry-center__item" v-for="(item,index) in contacts" :key="index">
					<div class="enquiry-center__item-name">{{item.name}} {{item.phone}}</div>
					<div class="enquiry-center__item-active" @click="callPhome(item.phone)">
						<FontAwesome type="fas fa-phone-alt" size="36" color="#fff"></FontAwesome>
						<span style="margin-left: 24rpx;">拨打电话</span>
					</div>
				</div>
			</div>
			<div class="enquiry-bottom"></div>
		</van-popup>

		<!-- 上滑菜单 - 选择规格 -->
		<van-action-sheet :show="actionSheet_specificationsShow" :actions="actionSheet_specifications_options" description="选择商品规格"
		 z-index="999999" cancel-text="取消" @select="_actionSheet_specifications_onSelect" @cancel="_actionSheet_specifications_onClose" />
		<!-- 上滑菜单 - 选择邮寄地址 -->
		<van-action-sheet :show="actionSheet_addrShow" :actions="actionSheet_addr_options" description="选择地址" z-index="999999"
		 cancel-text="取消"  @select="_actionSheet_addr_onSelect" @cancel="_actionSheet_addr_onClose" />
	</div>
</template>

<script>
	import goodsImg from '@/static/images/goods/goodsInfo/goodsImg.png'
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	import Toast from '@/wxcomponents/weapp/dist/toast/toast'
	export default {
		onLoad(options) {
			console.log(options)
			// 判断用户是否已登录
			// 判断用户是否已收藏该商品
			// isCollection
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
				// 产品名称
				goodsName: '护栏护栏护栏护栏护栏护栏护栏护护栏护栏护栏护栏护栏护栏护栏护',
				// 产品价格
				goodsPrice: '价格请详询',
				// 联系人
				contacts: [{
						name: 'X先生',
						phone: '13800138000'
					},
					{
						name: 'X女士',
						phone: '13800138000'
					}
				],
				// 用户选择的配送地址
				ShippingAddress: '请选择寄送地址',
				// 用户选择的规格
				Specifications: '请选择商品规格',
				// 是否已收藏
				isCollection: false,
				// 询价弹窗是否展示
				enquiry: false,
				// 上滑菜单是否展示 - 选择规格
				actionSheet_specificationsShow: false,
				// 上滑菜单是否展示 - 选择地址 
				actionSheet_addrShow: false,
				// 上滑菜单 - 选择规格 - 选项
				actionSheet_specifications_options: [{
						name: '规格1',
						subname: '描述信息',
					},
					{
						name: '规格2',
						subname: '描述信息',
					},
					{
						name: '规格3',
						subname: '描述信息',
					},
				],
				// 上滑菜单 - 选择地址  - 选项
				actionSheet_addr_options: [{
						name: '用户已填写的地址1',
					},
					{
						name: '用户已填写的地址2',
					},
					{
						name: '根据用户已填写的地址来',
						subname: '描述信息',
					},
				],
			}
		},
		methods: {
			// 收藏
			_collection() {
				console.log('收藏')
				// todo: 判断用户是否已登录

				// 已登录且未收藏
				Toast('已收藏')
				this.isCollection = true
			},
			// 关闭询价弹窗
			_enquiryOnClose() {
				this.enquiry = false
			},
			// 拨打电话
			callPhome(phone) {
				console.log(phone)
				uni.makePhoneCall({
					phoneNumber: phone
				});
			},
			// 上滑菜单 - 规格 - 选择
			_actionSheet_specifications_onSelect(event){
				console.log(event.detail)
				this.Specifications = event.detail.name
				this.actionSheet_specificationsShow = false
			},
			// 上滑菜单 - 规格 - 取消
			_actionSheet_specifications_onClose(){
				this.actionSheet_specificationsShow = false
			},
			// 上滑菜单 - 地址 - 选择
			_actionSheet_addr_onSelect(event){
				console.log(event.detail)
				this.ShippingAddress = event.detail.name
				this.actionSheet_addrShow = false
			},
			// 上滑菜单 - 地址 - 取消
			_actionSheet_addr_onClose(){
				this.actionSheet_addrShow = false
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.goods-info {
		background-color: #F6F6F6;
		padding-bottom: 100rpx;

		.goods-info__goods-img-wrapper {
			width: 750rpx;
			height: 560rpx;

			.swiper {
				width: 100%;
				height: 100%;

				.swiper-item-wrapper {
					width: 100%;
					height: 100%;

					.swiper-item {
						height: 100%;
						width: 100%;

						img {
							width: 100%;
							height: 100%;
						}

					}
				}
			}
		}

		.goods-info__goods-desc-wrapper {
			.goods-info__goods-desc-wrapper__name {
				font-size: 44rpx;
				font-weight: 700;
				line-height: 1.4;
				color: #222;
				margin: 28rpx 0;
				padding: 28rpx;
			}

			.goods-info__goods-desc-wrapper__active-box {
				display: flex;
				justify-content: space-between;
				padding: 0 28rpx;
				align-items: center;
				margin-bottom: 40rpx;

				.goods-info__goods-desc-wrapper__active-box-price {
					font-size: 44rpx;
					color: #EB5946;
					font-weight: 700;
				}

				.goods-info__goods-desc-wrapper__active-box-btn {
					height: 72rpx;
					width: 230rpx;
					border-radius: 36rpx;
					background-color: #EB5946;
					display: flex;
					justify-content: center;
					align-items: center;
					color: #fff;
					font-size: 27rpx;
					font-weight: 700;
				}

				.goods-info__goods-desc-wrapper__active-box-btn:active {
					background-color: #CF4937;
				}
			}

			.goods-info__goods-desc-wrapper__tags {
				padding: 0 28rpx;
				display: flex;
				align-items: center;
				margin-bottom: 40rpx;

				.goods-info__goods-desc-wrapper__tags-tit {
					font-size: 28rpx;
					color: #A7A7A7;
					margin-right: 12rpx;
				}

				.goods-info__goods-desc-wrapper__tags-item {
					display: flex;
					align-items: center;
					margin-right: 12rpx;
					font-size: 28rpx;
					color: #222;

					font-awesome {
						display: flex;
						align-items: center;
						margin-right: 8rpx;
					}
				}
			}

			.goods-info__goods-desc-wrapper__desc {
				padding: 0 28rpx;
				margin-bottom: 48rpx;

				.goods-info__goods-desc-wrapper__norms,
				.goods-info__goods-desc-wrapper__delivery {
					display: flex;
					align-items: center;
					padding: 28rpx;
					background-color: #fff;
					border-radius: 16rpx 16rpx 0 0;

					.goods-info__goods-desc-wrapper__norms__tit {
						font-size: 28rpx;
						color: #A7A7A7;
						margin-right: 12rpx;
					}

					.goods-info__goods-desc-wrapper__norms__select {
						flex: 1;
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 28rpx;
						font-weight: 700;

						.goods-info__goods-desc-wrapper__norms__select-text {
							width: 100%;
						}
					}
				}

				.goods-info__goods-desc-wrapper__norms:active,
				.goods-info__goods-desc-wrapper__delivery:active {
					background-color: #EDEDED;
				}

				.goods-info__goods-desc-wrapper__delivery {
					border-radius: 0 0 16rpx 16rpx;
				}
			}
		}

		.goods-info__goods-info-wrapper {
			.goods-info__goods-info-wrapper__img-list {
				img {
					width: 100%;
				}
			}

			.goods-info__goods-info-wrapper__specifications {
				padding: 28rpx;
				font-size: 28rpx;
				line-height: 1.5;
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

		.enquiry-popup {
			background-color: #fff;

			.enquiry-top {
				height: 100rpx;
				border-bottom: 2rpx solid #E6E6E6;
				width: 640rpx;
				line-height: 100rpx;
				text-align: center;
				font-weight: 700;
				color: #222;
				font-size: 32rpx;
			}

			.enquiry-center {
				height: 340rpx;
				width: 640rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.enquiry-center__item {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 72rpx;
					margin: 28rpx 0;

					.enquiry-center__item-name {
						font-size: 32rpx;
						color: #222;
						font-weight: 700;
					}

					.enquiry-center__item-active {
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						background-color: #EB5946;
						color: #fff;
						border-radius: 34rpx;
						margin-left: 28rpx;
						width: 230rpx;
					}

					.enquiry-center__item-active:active {
						background-color: #CF4937;
					}
				}
			}

			.enquiry-bottom {
				height: 100rpx;
				border-top: 2rpx solid #E6E6E6;
				width: 640rpx;
			}
		}
	}
</style>
