<template>
	<div class="page-me">
		page-me
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
		background-color pink;
	}
</style>
