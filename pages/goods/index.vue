<template>
	<div class="page-goods">
		page-goods
		page-goods
	</div>
</template>

<script>
	export default {
		// 挂载
		onLaunch: function() {
			console.log('商品 Launch')
		},
		// 显示
		onShow: function() {
			console.log('商品 Show')
		},
		// 隐藏
		onHide: function() {
			console.log('商品 Hide')
		}
	}
</script>

<style lang="stylus" scoped>
	.page-goods {
		background-color pink;
	}
</style>
