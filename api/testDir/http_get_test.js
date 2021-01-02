
// 由于不是vue组件,所以不能拿到this的vue实例,
// 所以这里操作store就用原始的方法,直接操作文件;

import http from '@/api/common/http.js'

import { url_test } from '@/api/common/http_req_list.js'

export const http_getPhone = async function () {
	console.log(url_test)
	return await new Promise(async (resolve, reject)=>{
		http.get(url_test).then(res => {
		
			console.log('http_getPhone 请求成功')
			resolve(res)
			// if (res.data.code === 0) {
			// 	resolve(true)
			// } else {
			// 	resolve(false)
			// }
		}).catch(error => {
				resolve(false)
		}).finally(() => {
		})
	})
}