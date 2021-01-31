<template>
	<div>
		<div class="goods-list__layout-wrapper">
			
			
			<!-- 专区类型 -->
			<van-tabs v-if="pageType==='listType'" @change="goodsListTypeChange" sticky offset-top="0" z-index="20" swipeable
			 class="goods-list__layout-van-sticky__van-tabs">
				<div class="goods-special clearfix">
					<van-tab v-for="(item, index) in goodsListTypes" :title="item.tabItemName" :key="index">
						<goodsList :goodsListData="goodsListData"></goodsList>
					</van-tab>
				</div>
			</van-tabs>
			
			
			
			<!-- 关键词进来的 -->
			<div class="goods-special clearfix">
				<goodsList :goodsListData="goodsListData"></goodsList>
			</div>
			
			<!-- loading -->
			<div v-if="goodsListLoadingFlag" class="good-list-loading-wrapper">
				<van-loading />
			</div>

		</div>
	</div>
</template>

<script>
	import goodsList from '@/components/goodsList/index.vue'
	import mockGoodsimg from '@/static/images/mock/mock-goodsimg.png'
	export default {
		components: {
			goodsList
		},
		onLoad(options) {

			console.log('options')
			console.log(options)

			// 判断，如果是 keyWord 说明是搜索进来的，那么就走模糊搜索关键词
			// keyWord
			if (options.keyWord) {
				this.pageType = 'keyWord'
				uni.setNavigationBarTitle({
					title: options.keyWord
				})
				// 如果是type来的，那么就走xx接口
				// type
			} else if (options.type) {
				this.pageType = 'listType'

				// type类型
				// 1 护栏网栏 - 子类：护栏(波形梁钢护栏、活动护栏、缆索护栏、预应力护栏、市政护栏、新型护栏) --- 网栏（刺铁丝、焊接网、柔性防护网、防风抑尘网、其他）
				// 2 诱导设施 - 子类：铝合金标志、主动发光标志、热熔标线、双组份标线、彩色防滑标线、防眩板、防眩网、标志立柱、附着式轮廓标、柱式轮廓标、板式轮廓标、铸铝道钉、塑料道钉、玻璃道钉
				// 3 安设施设 - 子类：路锥、爆闪灯、减速带、防撞桶、反光衣、防撞垫、其他
				// 4 设备仪器 - 子类：信号灯、警示灯、LED导向牌、发光标志牌、电子警察监控、打桩机、钻孔机、标线设备、测量仪器、公路养护设备
				// 5 其他建材 - 子类：钢材、水泥、沥青、紧固件、其他

				switch (options.type) {
					case '1':
						uni.setNavigationBarTitle({
							title: '护栏、网栏'
						})
						this.goodsListTypes = [{
							tabItemName: '波形梁钢护栏',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '活动护栏',
							tabItemCode: 'xxxx'
						}, {
							tabItemName: '缆索护栏',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '预应力护栏',
							tabItemCode: 'xxxx'
						}, {
							tabItemName: '市政护栏',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '新型护栏',
							tabItemCode: 'xxxx'
						}, {
							tabItemName: '刺铁丝',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '焊接网',
							tabItemCode: 'xxxx'
						}, {
							tabItemName: '柔性防护网',
							tabItemCode: 'xxxx'
						}, {
							tabItemName: '防风抑尘网',
							tabItemCode: 'xxxx'
						}, {
							tabItemName: '其他',
							tabItemCode: 'xxxx'
						}, ]
						break;
					case '2':
						uni.setNavigationBarTitle({
							title: '诱导设施'
						})
						this.goodsListTypes = [{
							tabItemName: '铝合金标志',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '主动发光标志',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '热熔标线',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '双组份标线',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '彩色防滑标线',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '防眩板',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '防眩网',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '标志立柱',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '附着式轮廓标',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '柱式轮廓标',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '板式轮廓标',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '铸铝道钉',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '塑料道钉',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '玻璃道钉',
							tabItemCode: 'xxx'
						}]
						break;
					case '3':
						uni.setNavigationBarTitle({
							title: '安设施设'
						})
						this.goodsListTypes = [{
							tabItemName: '路锥',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '爆闪灯',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '减速带',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '防撞桶',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '反光衣',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '防撞垫',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '其他',
							tabItemCode: 'xxx'
						}]
						break;
					case '4':
						uni.setNavigationBarTitle({
							title: '设备仪器'
						})
						this.goodsListTypes = [{
							tabItemName: '信号灯',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '警示灯',
							tabItemCode: 'xxx'
						}, {
							tabItemName: 'LED导向牌',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '发光标志牌',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '电子警察监控',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '打桩机',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '钻孔机',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '标线设备',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '测量仪器',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '公路养护设备',
							tabItemCode: 'xxx'
						}, ]
						break;
					case '5':
						uni.setNavigationBarTitle({
							title: '其他建材'
						})
						this.goodsListTypes = [{
							tabItemName: '钢材',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '水泥',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '沥青',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '紧固件',
							tabItemCode: 'xxx'
						}, {
							tabItemName: '其他',
							tabItemCode: 'xxx'
						}]
						break;
				}

			}

			// todo : 这里判断是根据关键词还是根据类型来获取数据
			this.goodsListData = []
			this.goodsListDataIsMore = true
			this.http_getGoodsListData()
		},
		// 页面触底
		onReachBottom() {
			console.log('页面触底')
			if (!this.goodsListDataIsMore) {
				Toast('暂无更多数据~')
				return
			}
			// this.httpParams.page++
			this.http_getGoodsListData()
		},
		data() {
			return {
				// 页面类型，是关键词进来的，还是专区进来的
				// 默认是关键词 keyWord   专区列表listType
				pageType: 'keyWord',
				// 商品列表tab类型的索引
				goodsListTypeIndex: 0,
				// 商品列表tab类型 的小类是什么
				goodsListTypes: [],
				// 商品列表数据
				goodsListData: [],
				// 商品列表，是否有更多数据
				goodsListDataIsMore: true,
				// 商品列表，lading 是否展示
				goodsListLoadingFlag: false,
			}
		},
		methods: {
			// 获取商品列表数据
			async http_getGoodsListData() {
				// this.goodsListTypeIndex
				
				// 此时就得判断是 关键词  还是  tablayout，
				// 如果是tablayout的话，还得确定 大类 和 小类

				console.log('http 获取商品列表数据')
				this.goodsListLoadingFlag = true
				// let httpRes = await API_goods.xxxx(xxxx)
				// console.log(httpRes)
				let httpRes = [{
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


				if (!httpRes) {
					this.goodsListDataIsMore = false
					this.goodsListLoadingFlag = false
					return
				}
				this.goodsListLoadingFlag = false
				this.goodsListData.push(...httpRes)
				console.log(this.goodsListData)
			},
			// tab商品列表切换时 
			goodsListTypeChange(e) {
				console.log(e.detail.index)
				this.goodsListTypeIndex = e.detail.index
				this.goodsListData = []
				this.goodsListDataIsMore = true
				// tab切换，请求数据
				this.http_getGoodsListData()
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.goods-special {
		padding: 28rpx;
		background-color: #F6F6F6;
	}
</style>
