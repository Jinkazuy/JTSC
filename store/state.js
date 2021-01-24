const state = {


	// state只是缓存不是本地存储，所以需要持久化的数据，存到state时，也有要存到 localStorage 本地存储中

	// 用户敏感信息，先从本地获取，如果没有就设置为 这个对象
	store_UserInfoData: uni.getStorageSync('store_UserInfoData') || {
		address: '123', // 用户地址
		avatarUrl: null, // 头像imgURL
		birth: null, // 生日
		city: null, // 城市
		country: null, // 国家
		createTime: null, // 注册时间
		dataSort: null, // 数据排序
		email: null, // 邮箱
		gender: null, // 性别 1 | 0
		id: null, // 用户ID
		isDelete: null, // 逻辑删除: 0:未删除 1:已删除
		language: null, // 语言
		mobile: '', // 手机号
		nickName: null, // 昵称
		openId: null, // string
		passwd: null, // 登录密码
		province: null, // 省份
		sessionKey: null, // 
		status: null, // 数据状态 0:正常  1:锁定
		unionId: null, // 
		updateTime: null, // 更新时间: 2020-11-11 00:00:00
	},
	// token
	store_token: null,
	// token过期时间 7 天，先从本地取
	store_tokenExpiration: uni.getStorageSync('store_tokenExpiration') || null,

}

export default state
