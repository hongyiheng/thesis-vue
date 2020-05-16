import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [{
      path: 'buycar',
      name: 'buycar',
      component: () => import('@/components/buycar.vue')
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/components/index.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/components/article.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/components/detail.vue')
  },
  {
    path: '/newsPage',
    name: 'newsPage',
    component: () => import('@/components/newsPage.vue')
  },
  {
    path: '/recreationPage',
    name: 'recreationPage',
    component: () => import('@/components/recreationPage.vue')
  },
  {
    path: '/sportsPage',
    name: 'sportsPage',
    component: () => import('@/components/sportsPage.vue')
  },
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('@/components/userInfo.vue')
  },
  {
    path: '/articleList',
    name: 'articleList',
    component: () => import('@/components/articleList.vue')
  },
  {
    path: '/hello',
    name: 'hello',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
