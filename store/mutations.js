// matutaions负责修改state中的数据
// 如果是复杂的操作，那么就需要用actions.js来操作 matutaions 中的函数，
// 但是，不能在 actions.js 直接操作 state ，只能由actions操作matutaions，从而操作state中的数据
const matutaions = {
	// 设置用户信息(不包含敏感数据)
	setUserInfo(state, userInfo) {
		state.store_UserInfo = userInfo
	},
}

// 将 matutaions 导出，在store/index.js引入
export default matutaions
