/* eslint-disable no-unused-vars */

export default {
  // 获取url中的参数
  getUrlParam: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) // 匹配目标参数
    if (r != null) return unescape(r[2]); return null // 返回参数值
  },
  // 获取url中的中文参数
  getUrlParamChinese: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg) // 匹配目标参数
    if (r != null) return decodeURI(r[2]); return null // 返回参数值
  }
}
export function f (x) {
  if (x > 0) {
    return true
  }
}
