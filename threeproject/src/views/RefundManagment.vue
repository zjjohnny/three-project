<template>
    <div>
        <div class="refund-mgt-title">
            <div>退款管理</div>
        </div>
        <!-- <RefundNav></RefundNav> -->
        <OrderNav :navList="navList" :nav_active="nav_active" :activeChange="activeChange" path="/RefundManagment"></OrderNav>
        <router-view></router-view>
    </div>
</template>

<script>
import RefundNav from '@/components/pll/RefundNav.vue'
import OrderNav from '@/components/pll/OrderNav.vue'
export default{
    name: 'RefundManagment',
    components: {
        RefundNav,
        OrderNav
    },
    data(){
        return{
            navList: ['退款申请','待处理'],
            nav_active: 0
        }
    },
    methods: {
        activeChange(i){
			this.nav_active = i;
		},
    }
}
</script>

<style scoped>
    /* 退款管理title */
    .refund-mgt-title{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid lightgray;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 20px;
        color: rgb(105, 105, 105);
    }
    
</style>