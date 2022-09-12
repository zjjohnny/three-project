<template>
    <div>
        <div class="order-mgt-title">
            <div>订单管理</div>
        </div>
        <div class="order-mgt-container">
            <OrderNav :navList="navList" :nav_active="nav_active" :activeChange="activeChange" path="/OrderManagment"></OrderNav>
            <OrderSearch @searchinfo="searchinfo"></OrderSearch>
            <router-view :searchIn="searchIn"></router-view>
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
            navList: ['所有订单','待付款','待发货','待收货','待评价','已完成','已取消'],
            nav_active: 0,
            dateVal: '',
            searchIn: ''
        }
    },
    methods:{
        activeChange(i){
			this.nav_active = i;            
		},
        searchinfo(item){
            // console.log(item);
            this.searchIn = item;
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
        color: rgb(105, 105, 105);
    }

    a.nav_active{
    background-color: #409EFF; 
    }
    .el-input__inner{
        height: 32px;
    }
</style>