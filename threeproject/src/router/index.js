import Vue from 'vue'
import VueRouter from 'vue-router'
import opwd from './opwd/opwd'

Vue.use(VueRouter)

const routes = [
  /* 密码操作路由 */
  ...opwd,
  /* 进入系统路由 */
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/CRain/Login.vue')
  },
  /* 登录路由 */
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/CRain/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

/* 前置路由守卫，判断是否登录 */
router.beforeEach((to, from, next) => { 
  if (to.meta.isAuth) {
    if (localStorage.getItem('token') === "") {
      next('/Login')
    } else {
      next();
    }
  } else { 
    next();
  }
})

export default router
