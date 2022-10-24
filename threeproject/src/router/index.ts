import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/main',
    name: 'main',
    // redirect: '/home',
    component: () => import('../views/main.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/home/home.vue')
      }, {
        path: '/data',
        name: 'data',
        component: () => import(/* webpackChunkName: "data" */ '../views/pages/data.vue')
      },
      {
        path: "/client",
        name: 'client',
        component: () => import('../views/CRain/Client.vue')
      }, {
        path: "/highseas",
        name: 'highseas',
        component: () => import('../views/CRain/HighSeas.vue')
      }, {
        path: "/adduser",
        name: 'adduser',
        component: () => import('../views/CRain/AddUser.vue')
      }, {
        path: "/updateuser",
        name: 'updateuser',
        component: () => import('../views/CRain/updateUser.vue')
      }
      ,
      {
        path: "/acess",
        name: '权限',
        component: () => import('../views/pages/acess.vue')
      }, {
        path: '/GoodsView',
        name: 'GoodsView',
        component: () => import('../views/goods/GoodsView.vue'),
      }, {
        path: '/ChangeGoods',
        name: 'ChangeGoods',
        component: () => import('../views/goods/ChangeGoods.vue')
      }, {
        path: '/AddGoods',
        name: 'AddGoods',
        component: () => import('../views/goods/AddGoods.vue')
      }, {
        path: '/dindan',
        name: '订单',
        component: () => import('../views/sxw/DinDan.vue')
      },
      {
        path: '/orderSetting',
        name: 'orderSetting',
        component: () => import('../views/system/orderSetting.vue')
      }, {
        path: '/countryManage',
        name: 'countryManage',
        component: () => import('../views/system/countryManage.vue')
      },
      {
        path: '/GoodsHouse',
        name: '商品仓库',
        component: () => import('../views/goods/GoodsHouse.vue')
      }, {
        path: '/dindan',
        name: 'dindan',
        component: () => import('../views/sxw/DinDan.vue')
      }, {
        path: '/Dda',
        name: 'Dda',
        component: () => import('../views/sxw/Dda.vue')
      }, {
        path: '/ManJian',
        name: 'ManJian',
        component: () => import('../views/sand/ManJian.vue')
      },
      {
        path: '/YouHuiJuan',
        name: 'YouHuiJuan',
        component: () => import('../views/sand/YouHuiJuan.vue')
      }, {
        path: '/record',
        name: '资金流水',
        component: () => import('../views/Finance/Recond.vue')
      }, {
        path: "/finane",
        component: () => import('../views/Finance/Commission.vue'),
        name: "财务管理"
      }
    ],
    redirect: '/home'
  }, {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
