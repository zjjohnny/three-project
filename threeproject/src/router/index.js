import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err=>err)
}
const routes = [
    {
        path:'/',
        name:'Main',
        component:()=>import("../views/Main.vue"),
        children:[
        {
            path:"/home",
            name:"home",
            component:()=>import('../views/home')
        }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
