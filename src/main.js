import Vue from 'vue'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import VueCompositionApi from '@vue/composition-api'
import router from './router'
import ElementUI from 'element-ui'
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
Vue.use(VueCompositionApi)
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
