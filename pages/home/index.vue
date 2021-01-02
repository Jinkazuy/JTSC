<template>
	<div class="page-home">
		page-home
		<van-button type="default">默认按钮</van-button>
		<van-button round type="info">圆形按钮</van-button>
	</div>
</template>

<script>
	import {http_getPhone} from '@/api/testDir/http_get_test.js'
	export default {
		// 挂载
		onLaunch: function() {
			console.log('首页 Launch')
		},
		// 显示
		onShow: function() {
			console.log(this.$store.getters.store_UserInfo)
			http_getPhone()
			console.log('首页 Show')
		},
		// 隐藏
		onHide: function() {
			console.log('首页 Hide')
		}
	}
</script>

<style lang="stylus" scoped>
	.page-home {
		background-color pink;
		font-size: 34rpx;
	}
</style>
