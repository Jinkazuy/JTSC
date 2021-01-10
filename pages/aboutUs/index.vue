<template>
	<div class="about-us">
		<img :src="aboutUsImg">
	</div>
</template>

<script>
	import aboutUsImg from '@/static/images/home/aboutme/about.png'
	export default {
			
		data(){
			return {
				aboutUsImg
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.about-us {
		image {
			width: 750rpx;
			height: 3556rpx;
		}
	}
</style>
