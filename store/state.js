const state = {


	// state只是缓存不是本地存储，所以需要持久化的数据，存到state时，也有要存到 localStorage 本地存储中


	// 用户基本数据,不包含敏感信息;
	store_UserInfo: {
		avatarUrl: null,
		city: null,
		country: null,
		gender: null,
		language: null,
		nickName: null,
		province: null,
	},
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
		idCard: '123', // 当用户选择内部员工时必填
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
		userType: null, // 用户类型 0:内部 1:外部 当外部用户时, 不需要绑定员工号
	},
	store_token: '',

}

export default state
