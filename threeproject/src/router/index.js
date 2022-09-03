import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Commoditylaunch', //Commoditylaunch
    name: '商品发布',
    component: () => import('../views/Commodity Management/Commodity launch/Commodity launch.vue')
  },
  {
    path: '/', //Comoditymangement
    name: '商品管理',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Commodity Management/Commodity Management.vue')
  },
  {
    path: '/Commdityreview',//Commdityreview
    name: '商品评论',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Commodity Management/Commodity review.vue')
  }, {
    path: '/Commditydetails', //Commditydetails
    name: '商品详情',
    component: () => import('@/views/Commodity Management/Commodity launch/Commodity details.vue')
  },
  {
    path: '/Commodityreviewcontent',
    name: '商品回复',
    component: () => import('@/views/Commodity Management/Commodity reviewcontent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
