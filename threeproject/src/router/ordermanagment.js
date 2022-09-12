export default[
    {
        path: '/OrderManagment',
        name: 'OrderManagment',
        component: () => import('@/views/pll/OrderManagment.vue'),
        children: [
            {
                path: '/',
                name: 'GoodsItem',
                component: () => import('@/components/pll/GoodsItem.vue'),
                //props函数,让路由更方便的接收参数
                props(route){
                    return{
                        state: route.query.state,
                    }
                }
            },
        ]
    },
    {
        path: '/RefundManagment',
        name: 'RefundManagment',
        component: () => import('@/views/pll/RefundManagment.vue'),
        children: [
            {
                path: '/',
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
    },
    {
        path: '/RefundDetail',
        name: 'RefundDetail',
        component: () => import('@/views/pll/RefundDetail.vue'),
        props(route){
            return {
                info: route.query.info,
            }
        }
    },
    {
        path: '/UserData',
        name: 'UserData',
        component: () => import('@/views/pll/UserData.vue')
    },
    {
        path: '/UserActive',
        name: 'UserActive',
        component: () => import('@/views/pll/UserActive.vue')
    },
    {
        path: '/BusinessData',
        name: 'BusinessData',
        component: () => import('@/views/pll/BusinessData.vue')
    },
    
]