<template>
    <div>
        <ul class="orderNav">
            <li> 
              <router-link to="/GoodsRefundItem?state=退款申请" active-class="nav_active">退款申请</router-link>
            </li>
            <li>
              <router-link to="/GoodsRefundItem?name=待发货" active-class="nav_active">待处理</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'RefundNav',
}
</script>

<style scoped>
    ul{
        margin: 0 135px;
        width: 100%;
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
    
</style>