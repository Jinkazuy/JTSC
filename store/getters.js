// 这里的 getters， 只负责 将state中的数据，对外提供展示数据，
// 向外导出数据，只能展示不能修改；

// 用户信息(含敏感信息)
export const store_UserInfoData = state => state.store_UserInfoData
// token 
export const store_token = state => state.store_token
// token过期时间
export const store_tokenExpiration = state => state.store_tokenExpiration


