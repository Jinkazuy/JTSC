// 由于不是vue组件,所以不能拿到this的vue实例,
// 所以这里操作store就用原始的方法,直接操作文件;

// axios
import http from '@/api/common/http.js'

// url
import {
	url_get_biddingList, // # 获取招中标列表
	url_get_biddingDetail, // # 获取招中标详情
} from '@/api/common/http_req_list.js'

// 
import {
	httpResOk
} from '@/api/common/config.js'


// 获取招中标列表
const http_get_biddingList = function({
	type,
	page
}) {

	return new Promise((resolve, reject) => {
		console.log(url_get_biddingList + type + '/' + page)
		http.get(url_get_biddingList + type + '/' + page).then(res => {
			console.log('http_get_biddingList 请求成功')
			console.log(res)
			if (res.data.code === httpResOk) {
				resolve(res.data.data)
				return
			}
			resolve(false)
		}).catch(error => {
			console.log(error)
			resolve(false)
		}).finally(() => {})
	})
}


// 获取招中标详情
const http_get_biddingDetail = function(id) {

	return new Promise((resolve, reject) => {
		console.log(url_get_biddingDetail + id)
		http.get(url_get_biddingDetail + id).then(res => {
			console.log('url_get_biddingDetail 请求成功')
			console.log(res)
			if (res.data.code === httpResOk) {
				resolve(res.data.data)
				return
			}
			resolve(false)
		}).catch(error => {
			console.log(error)
			resolve(false)
		}).finally(() => {})
	})
}

export default {
	http_get_biddingList,
	http_get_biddingDetail,
}
