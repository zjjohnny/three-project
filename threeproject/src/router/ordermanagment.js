export default[
    {
        path: '/OrderManagment',
        name: 'OrderManagment',
        component: () => import('@/views/OrderManagment.vue')
    },
    {
        path: '/RefundManagment',
        name: 'RefundManagment',
        component: () => import('@/views/RefundManagment.vue')
    },
    {
        path: '/GoodsItem',
        name: 'GoodsItem',
        component: () => import('@/components/pll/GoodsItem.vue'),
        //props函数,让路由更方便的接收参数
        props(route){
            return{
                // id: route.query.id,
                title: route.query.title
            }
        }
    },
    {
        path: '/GoodsRefundItem',
        name: 'GoodsRefundItem',
        component: () => import('@/components/pll/GoodsRefundItem'),
        props(route){
            return {
                state: route.query.state,
                name: route.query.name
            }
        }
    }
]