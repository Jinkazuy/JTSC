<template>
	<div class="page-home">
		<!-- 搜索兰 -->
		<div class="page-home_search-bar">
			<div class="page-home_search-bar__inputbtn"></div>
			<div class="page-home_filter-bar"></div>
			<div class="page-home_search-bar__mask"></div>
			<div class="page-home_search-bar__layout">
				<van-tabs offset-top="0" z-index="20" swipeable>
					<van-tab title="招标信息">
						<newsList :newsListData="newsListData"></newsList>
					</van-tab>
					<van-tab title="中标信息">中标信息</van-tab>
				</van-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import newsList from '@/components/newsList/index.vue'
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
			newsList,
		},
		data() {
			return {
				newsListData: [{
					title: '标题标题标题标题标题标题标题标题标题',
				}]

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
				background-color: pink;
				border-radius: 24rpx;
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
				z-index: 999;
				position: fixed;
				top: 88rpx;
				right: 0;
				left: 0;
				height: 100rpx;
				background-color: #F8F9FA;
			}
		}
	}
</style>
