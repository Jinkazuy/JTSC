<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	
	
	import {http_getPhone} from '@/api/testDir/http_get_test.js'
	export default {
		data() {
			return {
				title: 'Hellooooooooo-----'
			}
		},
		async onLoad() {
			console.log('page:index - onLoad - 挂载页面')
			// 使用axios发送请求
			// 使用 uniapp自带的 uni.request 发送请求
			this.axiosTest()
			this.uniRequestTest()
		},
		methods: {
			async axiosTest() {
				let res = await http_getPhone()
				console.log(res)
			},
			async uniRequestTest(){
				// let res = await uni.request({
				//     url: 'https://locally.uieee.com/slides', //仅为示例，并非真实接口地址。
				//     data: {
				//         text: 'uni.request'
				//     },
				//     header: {
				//         'custom-header': 'hello' ,//自定义请求头信息
				// 		'token': uni.getStorageSync('store_UserInfoData') || '123'
				//     },
				// 	// success: (res) => {
				// 	//     console.log(res.data);
				// 	//     this.text = 'request success';
				// 	// }
				// })
				// console.log(res)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
