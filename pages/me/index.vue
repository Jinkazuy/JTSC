<template>
	<div class="page-me">
		<div class="user-info-wrapper"></div>
		<div class="user-actions-wrapper"></div>
		<div class="user-collection-wrapper"></div>
	</div>
</template>

<script>
	export default {
		// 挂载
		onLaunch: function() {
			console.log('我的 Launch')
		},
		// 显示
		onShow: function() {
			console.log('我的 Show')
		},
		// 隐藏
		onHide: function() {
			console.log('我的 Hide')
		}
	}
</script>

<style lang="stylus" scoped>
	.page-me {
		.user-info-wrapper {
			width: 100%;
			height: 400rpx;
			background-color: #ccc;
		}
		.user-actions-wrapper {
			width: 92%;
			height: 500rpx;
			background-color: pink;
			margin:  -120rpx 0 56rpx 4%;
			border-radius: 24rpx;
			
		}
		.user-collection-wrapper {
			width: 92%;
			height: 500rpx;
			background-color: pink;
			margin: 0 0 40rpx 4%;
			border-radius: 24rpx;
		}
	}
</style>
