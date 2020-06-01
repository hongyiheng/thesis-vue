// eslint-disable-next-line no-unused-vars
import { post, fetch, patch, put } from '../router/http'
export function GetList (data) {
  return post('/vue/getArticleList/', data)
}

export function GetArticleListByKeyWord (data) {
  return post('/vue/getArticleListByKeyWord/', data)
}

export function GetArticle (data) {
  return post('/vue/getArticle/', data)
}

export function GetDownList (data) {
  return post('/vue/getDownInfoList/', data)
}