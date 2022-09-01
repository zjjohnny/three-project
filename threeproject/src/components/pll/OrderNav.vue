<template>
    <div>
        <ul class="orderNav">
            <li>
              <router-link to="/GoodsItem" active-class="nav_active">所有订单</router-link>
            </li>
            <li>
              <router-link to="/home" active-class="nav_active">待付款</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="nav_active">待发货</router-link>
            </li>
            <li>
              <router-link to="/about" active-class="nav_active">待收货</router-link>
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
}
</script>

<style scoped>
    ul{
        margin: 0 auto;
        width: 90%;
        padding: 0;
        height: 60px;
        display: flex;
        justify-content: center;
    }
    ul li{
        display: inline-block;
        list-style: none;
        background-color: white;
    }
    ul li a{
        display: inline-block;
        color: black;
        text-decoration: none;
        height: 30px;
        width: 100px;
        line-height: 30px;
        text-align: center;
        padding: 5px 10px;
        border:1px solid #DCDFE6;
        margin-right: 1px;
    }
</style>