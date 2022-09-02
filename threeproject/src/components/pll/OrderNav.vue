<template>
    <div>
        <ul class="orderNav">
            <li @click="changeClass(0)"> 
              <router-link to="/GoodsItem?title=所有订单" active-class="nav_active">所有订单</router-link>
            </li>
            <!-- // <li>
            //   <router-link :to="{
            //     path: '/GoodsItem',
            //     query: {title:'待付款'}
            //   }" active-class="nav_active">待付款</router-link>
            // </li> -->
            <li>
              <router-link to="/GoodsItem?id=待发货" active-class="nav_active">待发货</router-link>
            </li>
            <li>
              <router-link to="/GoodsItem?state=待收货" active-class="nav_active">待收货</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="nav_active">待评价</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="nav_active">已完成</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="nav_active">已取消</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'OrderNav',
    date(){
      return{
        
      }
    },
    methods:{
      
    }
}
</script>

<style scoped>
    ul{
        margin: 0 135px;
        width: 90%;
        padding: 0;
        height: 42px;
        display: flex;
        margin-bottom: 10px;
    }
    ul li{
        display: inline-block;
        list-style: none;
        background-color: #aad2fa;
    }
    ul li a{
        display: inline-block;
        color: white;
        text-decoration: none;
        height: 30px;
        width: 100px;
        line-height: 30px;
        text-align: center;
        padding: 5px 10px;
        border:1px solid #DCDFE6;
    }
    .a.nav_active{
    background-color: #409EFF; 
}
</style>