<template>
    <div>
        <div class="order-mgt-title">
            <div>订单管理</div>
        </div>
        <div class="order-mgt-container">
            <OrderNav></OrderNav>
            <OrderSearch></OrderSearch>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import OrderNav from '@/components/pll/OrderNav.vue'
import OrderSearch from '@/components/pll/OrderSearch.vue'
export default{
    name: 'OrderManagment',
    components: {
        OrderNav,
        OrderSearch
    },
    data(){
        return {
            
        }
    }
}
</script>

<style scoped>
    /* 订单管理title */
    .order-mgt-title{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid lightgray;
        line-height: 100px;
        text-align: center;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    a.nav_active{
    background-color: #409EFF; 
    }
    .el-input__inner{
        height: 32px;
    }
</style>