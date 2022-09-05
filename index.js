import Vue from 'vue'
import VueRouter from 'vue-router'
import CaiWu from '../views/CaiWu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: CaiWu
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Yh.vue')
  },
  {
    path: '/xiugai',
    name: 'xiugai',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/YhXiugai.vue')
<<<<<<< HEAD
=======
  },
  {
    path: '/zhangdan',
    name: 'zhangdan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DuiZhangdan.vue')
  },{
    path: '/shuju',
    name: 'shuju',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CwShuju.vue')
>>>>>>> de7d925 (财务系统)
  }
]

const router = new VueRouter({
  routes
})

export default router
