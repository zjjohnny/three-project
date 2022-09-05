<template>
  <div id="app">
     <nav>
      <router-link to="/OrderManagment">订单管理</router-link> |
      <router-link to="/RefundManagment">退款管理</router-link>|
      <router-link to="/UserData">用户数据</router-link>|
      <router-link to="/UserActive">活跃用户</router-link>|
      <router-link to="/BusinessData">业务数据</router-link>
      
    </nav> 
    <router-view/> 
    <!-- <Order></Order> -->
    <!-- <Refund></Refund> -->
  </div>
</template>
<script>
  import Order from '@/views/OrderManagment.vue'
  import Refund from '@/views/RefundManagment.vue'
  import RefundDetail from '@/views/RefundDetail.vue'
  import UserData from '@/views/UserData.vue'

  export default{
    name: 'App',
    components: {
      Order,
      Refund,
      RefundDetail,
      UserData
    },
    
  }
</script>
<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}*/

a.nav_active{
        background-color: #409EFF; 
    }
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
