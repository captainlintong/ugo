
function request (obj) {
  let url = obj.url || ''
  url = 'https://www.zhengzhicheng.cn/' + url
  let data = obj.data || {}
  let method = obj.method || 'get'
  return new Promise(function (resolve, reject) {
    mpvue.showLoading({
      title: '正在加载...'
    })
    mpvue.request({
      url,
      data,
      method,
      success: function (info) {
        resolve(info.data)
        mpvue.hideLoading()
      }
    })
  })
}
export default request
