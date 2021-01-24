// matutaions负责修改state中的数据
// 如果是复杂的操作，那么就需要用actions.js来操作 matutaions 中的函数，
// 但是，不能在 actions.js 直接操作 state ，只能由actions操作matutaions，从而操作state中的数据
const matutaions = {
	// 设置用户信息(不包含敏感数据)
	setUserInfo(state, userInfo) {
		
	},
	// 设置用户敏感信息
	// 字段待补充，这里为了走通流程先设置 nickName
	setUserInfoData(state, userInfo) {
		state.store_UserInfoData.avatarUrl = userInfo.avatarUrl || state.store_UserInfoData.avatarUrl || ''
		state.store_UserInfoData.city = userInfo.city || state.store_UserInfoData.city || ''
		state.store_UserInfoData.country = userInfo.country || state.store_UserInfoData.country || ''
		state.store_UserInfoData.gender = userInfo.gender || state.store_UserInfoData.gender || ''
		state.store_UserInfoData.language = userInfo.language || state.store_UserInfoData.language || ''
		state.store_UserInfoData.nickName = userInfo.nickName || state.store_UserInfoData.nickName || ''
		state.store_UserInfoData.province = userInfo.province || state.store_UserInfoData.province || ''
	},
	// 设置用户手机号
	setUserPhone(state, userPhone) {
		state.store_UserInfoData.mobile = userPhone
	},
	// 设置token
	setToken(state, storeToken) {
		console.log('设置token')
		console.log(storeToken)
		state.store_token = storeToken
	},
	// 设置token
	setTokenExpiration(state, expiration) {
		console.log('设置token过期时间')
		console.log(expiration)
		state.store_tokenExpiration = expiration
		// 本地也存一份
		uni.setStorageSync('store_tokenExpiration', expiration)
	},
}

// 将 matutaions 导出，在store/index.js引入
export default matutaions
