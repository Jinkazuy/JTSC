<template>
	<div class="local-select">

		<city-select @cityClick="cityClick" :formatName="formatName" :activeCity="activeCity" :hotCity="hotCity" :obtainCitys="obtainCitys"
		 :isSearch="true" ref="citys"></city-select>

	</div>
</template>

<script>
	// 城市选择组件
	import citySelect from "@/components/city-select/city-select.vue"
	// 省列表（这里用 citys 变量，省的改了）
	import citys from "@/components/city-select/province.js"
	export default {
		components: {
			citySelect
		},

		data() {
			return {
				// 从那个路由来的
				previousPage: '',

				//需要构建索引参数的名称（注意：传递的对象里面必须要有这个名称的参数）
				formatName: 'title',
				//当前城市
				activeCity: {
					id: 1,
					title: '南京市'
				},
				//热门城市
				hotCity: [],

				//显示的城市数据
				obtainCitys: []
			}
		},
		onLoad(routeOption) {
			console.log(routeOption)
			this.previousPage = routeOption.page

			//修改需要构建索引参数的名称
			this.formatName = 'cityName'
			//修改当前城市
			this.activeCity = {
				cityName: routeOption.cityName,
				cityCode: routeOption.cityCode
			}
			// //修改热门城市
			// this.hotCity = [{
			// 		cityName: '南京',
			// 		cityCode: 110100
			// 	},
			// 	{
			// 		cityName: '北京',
			// 		cityCode: 11
			// 	}
			// ]


			// 修改构建索引数据
			// 这里从本地文件取，也可以http请求数据，但是要求结构相同
			this.obtainCitys = citys
		},
		methods: {
			cityClick(item) {

				// 点击选择，跳转到上个路由
				// console.log(item)
				// console.log(this.previousPage)

				// 判断，如果是tabbar页面，那么就得用另一个路由跳转的API

				switch (this.previousPage) {
					case 'home':
						// 如果跳转到的是 tabbar的页面，那么不能带参数 ，得用 globalData 传参即可
						getApp().globalData.localSelect = item
						uni.switchTab({
							url: '/pages/home/index'
						})
						break;
					default:
						// 跳转到地址选择页，传入 page 当前页面路由， cityName 当前页筛选的城市名称, 城市代码 cityCode
						uni.navigateTo({
							url: `/pages/${this.previousPage}/index?cityName=${item.cityName}&&cityCode=${item.cityCode}`,
						})
						break;
				}






			}
		}
	}
</script>

<style lang="stylus">
	.local-select {
		.city-select-main {
			// padding-top: 120rpx;
			.city-serach {
				// position: fixed;
				// top: 0;
				// background-color: #fff;
				.city-serach-input {
					// z-index: 999;
					border-radius: 42rpx;
					padding-left: 28rpx;
					border: none;
					background-color: #fff;
				}
			}
		}
	}
</style>
