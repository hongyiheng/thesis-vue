import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'

import { post, fetch, patch, put } from './router/http'
Vue.prototype.$axios = axios
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
