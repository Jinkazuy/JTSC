<template>
	<div class="news-list">
		<div class="news-list__item" v-for="(newsItem, newsItemIndex) in newsListData" :key="newsItemIndex">
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
			<div>{{newsItem.title}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			newsListData: {
				type: Array,
				default: () => {
					return []
				}
			}
		}
	}
</script>

<style scoped lang="stylus">
	.news-list {}
</style>
