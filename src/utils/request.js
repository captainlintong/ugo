
function request (obj) {
  let url = obj.url || ''
  url = 'https://www.zhengzhicheng.cn/' + url
  let data = obj.data || {}
  let method = obj.method || 'get'
  return new Promise(function (resolve, reject) {
    mpvue.request({
      url,
      data,
      method,
      success: function (info) {
        resolve(info.data)
      }
    })
  })
}
export default request
