<template>
	<div class="goods-special clearfix">
		<goodsList :goodsListData="goodsListData"></goodsList>
	</div>
</template>

<script>
	import goodsList from '@/components/goodsList/index.vue'
	import mockGoodsimg from '@/static/images/mock/mock-goodsimg.png'
	export default {
		onLoad(options) {

			console.log('options')
			console.log(options)

			// 判断，如果是 keyWord 说明是搜索进来的，那么就走模糊搜索关键词
			// keyWord
			if (options.keyWord) {
				uni.setNavigationBarTitle({
					title: options.keyWord
				})
				// 如果是type来的，那么就走xx接口
				// type
			} else if (options.type) {
				uni.setNavigationBarTitle({
					title: 'xxxx转区'
				})
			}


		},
		components: {
			goodsList
		},
		data() {
			return {
				goodsListData: [{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: mockGoodsimg,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '会员专享 先到先得 会员专享 先到先得',
							_v: '满千包邮满千包邮',
							_price: '200200',
						}
					},
					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: mockGoodsimg,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '会员专享 先到先得 会员专享 先到先得',
							_v: '满千包邮满千包邮',
							_price: '200200',
						}
					},

					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: mockGoodsimg,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '会员专享 先到先得 会员专享 先到先得',
							_v: '满千包邮满千包邮',
							_price: '200200',
						}
					},

					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: mockGoodsimg,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '',
							_v: '',
							_price: '',
						}
					},

					{
						name: '商品名称商品名称商品名称商品名称商品名称商品名称商品称商品名称商品名称商品名称商品名称',
						price: '价格详询',
						desc: '商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述',
						descTag: '热销',
						imgSrc: mockGoodsimg,
						tags: '标签标签标签标签标签标签标签标签',
						// 促销文案
						promotion: {
							_h: '',
							_v: '',
							_price: '',
						}
					},
				]

			}
		}
	}
</script>

<style lang="stylus" scoped>
	.goods-special {
		padding: 28rpx;
		background-color: #F6F6F6;
	}
</style>
