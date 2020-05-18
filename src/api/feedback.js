// eslint-disable-next-line no-unused-vars
import { post, fetch, patch, put } from '../router/http'
export function AddFeedback (data) {
  return post('/vue/addFeedback', data)
}

export function GetFeedbackList () {
  return post('/vue/getFeedbackList')
}
