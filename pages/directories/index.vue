<template>
	<div class="directories borderbox clearfix">
		<directoriesList :directoriesListData="directoriesListData"></directoriesList>
	</div>
</template>

<script>
	// 企业列表组件
	import directoriesList from '@/components/directoriesList/index.vue'

	import mockGoodsimg from '@/static/images/mock/mock-directories.png'


	export default {
		components: {
			directoriesList
		},
		onShow() {
			console.log('名录 onShow')
			this._http_getDirectoriesList()
		},
		data() {
			return {
				directoriesListData: []
			}
		},
		methods: {
			_http_getDirectoriesList() {
				this.directoriesListData = [{
					name: '企业名称企业名称企业名称企业名称企业名称企业名称企业名称企业名称企业名称',
					addrs: '刚果布拉柴维尔',
					desc: '企业描述企业描述企业描述企业描述企业描述企业描述企业描述企业描述企业描述企业描述企业描述企业描述',
					// descTag: '热销',
					imgSrc: mockGoodsimg,
					tags: '标签标签标签标签标签标签标签标签',
					// 促销文案
					// promotion: {
					// 	_h: '会员专享 先到先得 会员专享 先到先得',
					// 	_v: '满千包邮满千包邮',
					// 	_price: '200200',
					// }
				}, ]
				console.log(this.directoriesListData)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.directories {
			padding: 28rpx;
			background-color: #F6F6F6;
	}
</style>

<style lang="stylus">
	page {
		background-color: #F6F6F6;
	}
</style>
