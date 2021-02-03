<template>
	<div class="page-home">
		<div class="page-home_search-bar">
			<!-- 搜索框样子的按钮 -->
			<div class="page-home_search-bar__inputbtn borderbox" @click="filterBar_search_driveShow = true">
				<FontAwesome type="fas fa-search" size="24" color="#CDCDCD" style="margin-right: 24rpx"></FontAwesome>
				<span>搜索</span>
				<!-- <FontAwesome type="fas fa-filter" size="36" color="red"></FontAwesome> -->
			</div>

			<!-- 筛选栏 -->
			<div class="page-home_filter-bar">
				<div class="page-home_filter-bar__local" @click="_filterBar_local_pageShow">
					<span style="margin-right: 8rpx; width: 100%;" class="nowrap">{{httpParams.province.cityName}}</span>
					<FontAwesome type="fas fa-caret-down" size="24" color="#CDCDCD" style="margin-right: 4rpx"></FontAwesome>
				</div>
				<div class="page-home_filter-bar__time" @click="filterBar_time_SheetShow=true">
					<span style="margin-right: 8rpx; width: 100%;" class="nowrap">{{filter_time.name}}</span>
					<FontAwesome type="fas fa-caret-down" size="24" color="#CDCDCD" style="margin-right: 4rpx"></FontAwesome>
				</div>
				
				<!-- 招标类型暂时隐藏 -->
				<!-- <div class="page-home_filter-bar__type" @click="filterBar_type_SheetShow=true">
					<span style="margin-right: 8rpx; width: 100%;" class="nowrap">{{filter_type}}</span>
					<FontAwesome type="fas fa-caret-down" size="24" color="#CDCDCD" style="margin-right: 4rpx"></FontAwesome>
				</div>
				更多筛选侧滑抽屉这哪是隐藏
				<div class="page-home_filter-bar__more" @click="filterBar_more_driveShow=true">
					<span style="margin-right: 0rpx; width: 100%;">更多</span>
					<FontAwesome type="fas fa-filter" size="18" color="#CDCDCD" style="margin-right: 4rpx"></FontAwesome>
				</div> -->
			</div>
			<div class="page-home_search-bar__mask"></div>
			<!-- layout -->
			<div class="page-home_search-bar__layout">
				<van-tabs offset-top="0" z-index="20" swipeable @click="tabClick">
					<van-tab title="招标信息">
						<newsList :newsListData="newsListData"></newsList>
						<van-empty v-if="!newsListData.length" description="暂无数据" />
					</van-tab>
					<van-tab title="中标信息">
						<newsList :newsListData="newsListData"></newsList>
						<van-empty v-if="!newsListData.length" description="暂无数据" />
					</van-tab>
				</van-tabs>
			</div>
		</div>

		<!-- 上滑菜单 - 时间 -->
		<van-action-sheet @select="_filterBar_time_onSelect" :show="filterBar_time_SheetShow" @cancel="_filterBar_time_onClose"
		 @click-overlay="_filterBar_time_onClose" :actions="filterBar_time_SheetActions" cancel-text="取消" />

		<!-- 上滑菜单 - 类型 -->
		<van-action-sheet @select="_filterBar_type_onSelect" :show="filterBar_type_SheetShow" @cancel="_filterBar_type_onClose"
		 @click-overlay="_filterBar_type_onClose" :actions="filterBar_type_SheetActions" cancel-text="取消" />

		<!-- 抽屉页 - 更多筛选 -->
		<van-popup :show="filterBar_more_driveShow" @close="filterBar_more_driveShow = false" position="right" custom-style="height: 100%; width: 60%;">内容</van-popup>

		<!-- 抽屉页 - 点击搜索框 -->
		<van-popup :show="filterBar_search_driveShow" @close="filterBar_search_driveShow = false" position="bottom"
		 custom-style="height: 100%; width: 100%;" class="van-popup-search">
			<van-search :value="searchValue" placeholder="请输入搜索关键词" class="search-bar__search-input" shape="round" @search="_searchInputOnSearch"
			 @change="_searchInputOnChange" @cancel="_searchInputOnCancel" :focus="filterBar_search_driveShow" />
			<van-button v-show="searchValue===''" type="default" size="small" round @click="_searchInputOnCancel" class="search-bar__search-btn">取消</van-button>
			<van-button v-show="searchValue" color="#EB5946" type="default" size="small" round @click="_searchInputOnSearch"
			 class="search-bar__search-btn">确定</van-button>
		</van-popup>

		<div class="loading-wrapper" v-if="loadingFlag">
			<van-loading color="#EB5946" v-show="loadingFlag" />
		</div>

		<van-toast id="van-toast" />

	</div>
</template>

<script>
	import newsList from '@/components/newsList/index.vue'
	// 引入icon
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	// 获取招中标列表 
	import API_home from '@/api/home/API_home.js'
	// toast
	import Toast from '@/wxcomponents/weapp/dist/toast/toast';

	export default {
		// 挂载
		onLaunch: function() {
			console.log('首页 Launch')
		},
		// 显示
		onShow: function() {
			console.log('首页 Show')

			// 页面显示的时候，检查是否有 地域 选择的对象，如果有，说明是从地域选择页面跳转回来的
			if (getApp().globalData.localSelect) {
				this.httpParams.province.cityName = getApp().globalData.localSelect.cityName
				this.httpParams.province.cityCode = getApp().globalData.localSelect.cityCode
			}

			// 获取数据列表
			this.newsListData = []
			this.httpParams.page = 1
			this._http_get_newsListData()

			// console.log(this.$store.getters.store_UserInfo)
			// http_getPhone()
		},
		// 隐藏
		onHide: function() {
			console.log('首页 Hide')
		},
		components: {
			newsList,
			FontAwesome,
		},
		data() {
			return {
				// http 请求中
				loadingFlag: false,
				// 请求参数
				httpParams: {
					type: 1, // 类型1招标2中标
					page: 1, // 页码，默认首页
					// 地域
					province: {
						cityName: '北京',
						cityCode: 11
					},
					date_limit: '30'
				},
				// 列表数据
				newsListData: [],
				// 是否有更多数据
				newsListDataIsMore: true,

				// 上滑菜单 - 时间 - 是否显示
				filterBar_time_SheetShow: false,
				// 上滑菜单 - 时间 - 选项
				filterBar_time_SheetActions: [{
						name: '今天',
						date_limit: '1'
					},
					{
						name: '3天内',
						date_limit: '3'
					},
					{
						name: '5天内',
						date_limit: '5'
					},
					{
						name: '7天内',
						date_limit: '7'
					},
					{
						name: '30天内',
						date_limit: '30'
					},
				],
				// 上滑菜单 - 类型 - 是否显示
				filterBar_type_SheetShow: false,
				// 上滑菜单 - 类型 - 选项
				filterBar_type_SheetActions: [{
						name: '劳务招标',
					},
					{
						name: '材料招标',
					}
				],
				// 右滑菜单 - 更多 - 是否展示
				filterBar_more_driveShow: false,
				// 上滑菜单 - 搜索 - 是否展示
				filterBar_search_driveShow: false,
				// 搜索框内容
				searchValue: '',

				// 过滤项

				// 时间
				filter_time: {
					name: '30天内',
					date_limit: '30'
				},
				// 类型
				filter_type: '劳务招标',

			}
		},
		// 页面触底
		onReachBottom() {
			console.log('页面触底')
			if (!this.newsListDataIsMore) {
				Toast('暂无更多数据~')
				return
			}
			this.httpParams.page++
			this._http_get_newsListData()
		},
		methods: {

			// 获取列表数据
			async _http_get_newsListData() {
				console.log('http 获取列表数据')
				this.loadingFlag = true
				let httpRes = await API_home.http_get_biddingList(this.httpParams)
				console.log(httpRes)
				if (httpRes.data.code != 200) {
					this.newsListDataIsMore = false
					this.loadingFlag = false
					return
				}
				
				this.loadingFlag = false
				this.searchValue = ''
				this.newsListData.push(...httpRes.data.data)
				console.log(this.newsListData)
			},

			// 上滑菜单 - 时间 - 取消
			_filterBar_time_onClose() {
				this.filterBar_time_SheetShow = false
			},
			// 上滑菜单 - 类型 - 取消
			_filterBar_type_onClose() {
				this.filterBar_type_SheetShow = false
			},
			// 上滑菜单 - 时间 - 选择
			_filterBar_time_onSelect(event) {
				console.log(event.detail)
				this.filter_time.name = event.detail.name
				this.httpParams.date_limit = event.detail.date_limit
				// 获取数据列表
				this.httpParams.page = 1
				this.newsListData = []
				this._http_get_newsListData()
				// 关闭上拉菜单
				this.filterBar_time_SheetShow = false
			},
			// 上滑菜单 - 类型 - 选择
			_filterBar_type_onSelect(event) {
				console.log(event.detail)
				this.filter_type = event.detail.name
				this.filterBar_type_SheetShow = false
			},
			// 打开地址选择页
			_filterBar_local_pageShow() {
				console.log(this.province)
				// 跳转到地址选择页，传入 page 当前页面路由， cityName 当前页筛选的城市名称, 城市代码 cityCode 
				uni.navigateTo({
					url: `/pages/localSelect/index?page=home&cityName=${this.httpParams.province.cityName}&&cityCode=${this.httpParams.province.cityCode}`,
				})
			},


			// 搜索框 变化
			_searchInputOnChange(e) {
				this.searchValue = e.detail
			},
			// 搜索框 取消
			_searchInputOnCancel() {
				console.log('搜索框取消')
				this.searchValue = ''
				this.filterBar_search_driveShow = false
			},
			// 搜索框 确定 
			_searchInputOnSearch(e) {
				console.log('搜索关键词↓')
				console.log(this.searchValue)
				this._http_get_newsListData()
				this.filterBar_search_driveShow = false
			},
			// tablayout 点击时 更改请求列表数据的类型
			tabClick(event) {
				console.log(event)
				// event.detail.index 是tab的索引，从0开始
				// event.detail.index 是 0 说明点击的是招标信息
				// event.detail.index 是 1 说明点击的是中标信息

				// 类型1招标2中标
				switch (event.detail.index) {
					case 0:
						this.httpParams.type = 1
						break;
					case 1:
						this.httpParams.type = 2
						break;
				}

				this.httpParams.page = 1
				this.newsListDataIsMore = true
				this.newsListData = []
				this._http_get_newsListData()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.page-home {

		.page-home_search-bar {
			position: relative;

			// position: fixed;
			// z-index: 10;
			// top: 0;
			// width: 100%;
			// height: 100rpx;
			// padding: 0 28rpx;
			// box-sizing: border-box;
			// display: flex;
			// justify-content: space-between;
			// align-items: center;
			// background-color: #fff;
			// box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
			/deep/.van-tabs__wrap {
				// box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
				// position: fixed;
				// top: 0;
				.van-tabs__nav {
					width: 50%;
					position: fixed;
					top: 0;

					.van-tab {
						.van-ellipsis {
							transition: all .3s;
							font-size: 32rpx;
							color: #222;
						}
					}

					.van-tab--active {
						.van-ellipsis {
							font-size: 40rpx;
							font-weight: 700;
							color: #222;
						}
					}
				}
			}

			/deep/.van-tabs__nav {
				background-color: #fff;
			}

			/deep/.van-tab__pane {
				padding-top: 100rpx;
			}

			.page-home_search-bar__layout {}

			.page-home_search-bar__inputbtn {
				z-index: 21;
				position: fixed;
				top: 20rpx;
				right: 28rpx;
				height: 48rpx;
				width: 210rpx;
				background-color: #F8F9FA;
				border-radius: 28rpx;
				padding: 0 24rpx;
				display: flex;
				align-items: center;
				font-size: 24rpx;
				color: #BABABA;

			}

			.page-home_search-bar__mask {
				z-index: 20;
				position: fixed;
				top: 0;
				width: 100%;
				height: 88rpx;
				background-color: #fff;
			}

			.page-home_filter-bar {
				z-index: 50;
				position: fixed;
				top: 88rpx;
				right: 0;
				left: 0;
				height: 100rpx;
				background-color: #F8F9FA;
				padding: 0 28rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				text-align: center;
				color: #646464;
				font-size: 24rpx;

				.page-home_filter-bar__local,
				.page-home_filter-bar__time,
				.page-home_filter-bar__type,
				.page-home_filter-bar__more {
					width: 20%;
					height: 64rpx;
					background-color: #fff;
					border-radius: 16rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 28rpx;
					padding: 0 14rpx;
				}

				.page-home_filter-bar__local:active,
				.page-home_filter-bar__time:active,
				.page-home_filter-bar__type:active,
				.page-home_filter-bar__more:active {
					background-color: #EAEAEA;
				}

				.page-home_filter-bar__local {}

				.page-home_filter-bar__time {}

				.page-home_filter-bar__type {}

				.page-home_filter-bar__more {
					width: 16%;
					margin-right: 0;
				}
			}
		}
	}


	.van-popup__local-wrapper {
		/deep/.van-bottom-enter-to {
			padding-top: 100rpx;
		}

		.van-popup__local-wrapper__top-bar {
			width: 100%;
			height: 100rpx;
			position: fixed;
			top: 0;
			right: 0;
			left: 0;
			background-color: pink;
		}
	}


	.van-popup-search {
		/deep/.van-search {
			width: 600rpx;
		}

		.search-bar__search-btn {
			background-color: #fff;
			position: absolute;
			top: 24rpx;
			right: 28rpx;

			.van-button {}
		}
	}

	.loading-wrapper {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(255, 255, 255, .5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 99999;
	}
</style>
