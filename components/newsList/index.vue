<template>
	<div class="news-list">
		<div class="news-list__item borderbox" v-for="(newsItem, newsItemIndex) in newsListData" :key="newsItemIndex" @click="_openNewsDetail(newsItem)">
			<!-- 标题 -->
			<div class="news-list__item-title sum-nowrap">{{newsItem.title}}</div>
			<div class="news-list__item-desc-box">
				<!-- 地址 -->
				<!-- <span class="news-list__item-desc-box__local">{{newsItem.local}}</span> -->
				<!-- 分割点 -->
				<!-- <span class="news-list__item-desc-box__dot">·</span> -->
				<!-- 时间 -->
				<span class="news-list__item-desc-box__time">{{newsItem.publish_date}}</span>
				<!-- 浏览量 -->
				<!-- <span class="news-list__item-desc-box__viewcount">
					<FontAwesome type="fas fa-eye" size="22" color="#A8A8A8"></FontAwesome>
					<span class="news-list__item-desc-box__viewcount-count">{{newsItem.viewCount}}</span>
				</span> -->
			</div>
			<!-- 下划线 -->
			<div class="news-list__item-btm-line"></div>
		</div>
	</div>
</template>

<script>
	import FontAwesome from '@/components/Am-FontAwesome/index.vue'
	export default {
		props: {
			newsListData: {
				type: Array,
				default: () => {
					return []
				}
			}
		},
		components: {
			FontAwesome
		},
		methods: {
			_openNewsDetail(newsItem) {
				console.log(newsItem)
				let id = newsItem.id
				// 跳转到地址选择页，传入 page 当前页面路由， cityName 当前页筛选的城市名称, 城市代码 cityCode
				uni.navigateTo({
					url: `/pages/newsDetail/index?id=${id}`,
				})
			}
		}
	}
</script>

<style scoped lang="stylus">
	.news-list {
		.news-list__item {
			width: 100%;
			// height: 200rpx;
			background-color: #fff;
			padding: 28rpx 28rpx 0;
			margin-bottom: 2rpx;

			.news-list__item-title {
				font-size: 32rpx;
				color: #222;
				margin-bottom: 24rpx;
			}

			.news-list__item-desc-box {
				font-size: 22rpx;
				color: #A8A8A8;

				.news-list__item-desc-box__local {}

				.news-list__item-desc-box__dot {
					margin: 0 16rpx;
				}

				.news-list__item-desc-box__time {}

				.news-list__item-desc-box__viewcount {
					float: right;
					.news-list__item-desc-box__viewcount-count {
						margin-left: 12rpx;
					}
				}
			}

			.news-list__item-btm-line {
				margin-top: 24rpx;
				width: 100%;
				height: 1rpx;
				background-color: #EAEAEA;
			}
		}
		
		.news-list__item:active {
			background-color: #EAEAEA;
		}
	}
</style>
