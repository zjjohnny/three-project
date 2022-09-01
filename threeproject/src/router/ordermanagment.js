export default[
    {
        path: '/OrderManagment',
        name: 'OrderManagment',
        component: () => import('@/views/OrderManagment.vue')
    },
    {
        path: '/GoodsItem',
        name: 'GoodsItem',
        component: () => import('@/components/pll/GoodsItem.vue')
    },
]