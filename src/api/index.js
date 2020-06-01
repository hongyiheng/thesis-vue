// eslint-disable-next-line no-unused-vars
import { post, fetch, patch, put } from '../router/http'
export function GetList (data) {
  return post('/vue/getIndexList', data)
}

export function GetArticleTypeList (data) {
  return post('/vue/getArticleTypeList', data)
}

export function GetCarouselInfo (data) {
  return post('/vue/getCarouselInfo', data)
}
