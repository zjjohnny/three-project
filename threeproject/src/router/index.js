import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {

    path: '/Commoditylaunch', //Commoditylaunch
    name: '商品发布',
    component: () => import('../views/CommodityManagement/Commoditylaunch/Commoditylaunch.vue')
  },
  {
    path: '/Comoditymangement', //Comoditymangement
    name: '商品管理',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: () => import(/* webpackChunkName: "about" */ '../views/CommodityManagement/CommodityManagement.vue')
  },
  {
    path: '/Commdityreview',//Commdityreview
    name: '商品评论',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CommodityManagement/Commodityreview.vue')
  }, {
    path: '/Commditydetails', //Commditydetails
    name: '商品详情',
    component: () => import('@/views/CommodityManagement/Commoditylaunch/Commoditydetails.vue')
  },
  {
    path: '/Commodityreviewcontent',
    name: '商品回复',
    component: () => import('@/views/CommodityManagement/Commodityreviewcontent.vue')
  },
  {
    path:'/',//goodsInformation
    name:'商品信息',
    component:()=>import('@/views/Mallinformation/MallinFormation.vue')   
  },{
    path:'/changeinformation',//changeinformation
    name:'修改商城联系人信息',
    component:()=>import('@/views/Mallinformation/changeMallinFormation.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router
