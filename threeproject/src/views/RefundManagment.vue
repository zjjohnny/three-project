<template>
    <div>
        <div class="refund-mgt-title">
            <div>退款管理</div>
        </div>
        <RefundNav></RefundNav>
        <router-view></router-view>
    </div>
</template>

<script>
import RefundNav from '@/components/pll/RefundNav.vue'
export default{
    name: 'RefundManagment',
    components: {
        RefundNav
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
    }
    
</style>