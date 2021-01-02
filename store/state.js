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
		province: null
	},

}

export default state
