// 由于不是vue组件,所以不能拿到this的vue实例,
// 所以这里操作store就用原始的方法,直接操作文件;

// axios
import http from '@/api/common/http.js'

// url
import {
	url_login, // # 登录
	url_bindMobile, // # 绑定手机号
} from '@/api/common/http_req_list.js'

// 
// import {
// 	httpResOk
// } from '@/api/common/config.js'

// # 登录
function http_login(data) {
  return http({
    url: url_login,
    method: 'post',
    data
  })
}

// # 绑定手机号
function http_bindMobile(data) {
  return http({
    url: url_bindMobile,
    method: 'post',
    data
  })
}

export default {
	http_login,
	http_bindMobile,
}
