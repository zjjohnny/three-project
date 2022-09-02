<template>
    <div>
        <h4>{{title}}</h4>
        <div class="goods_data_box">
            <div class="goods_data_box_header">
                <input type="checkbox" />
                <span id="shangpin">商品</span>
                <span>单价</span>
                <span>数量</span>
                <span>售后</span>
                <span>交易状态</span>
                <span>实收金额</span>
                <span>操作</span>
            </div>
            <div class="goods_data_box_info">
                <div class="goods_title">
                    <input type="checkbox" />
                    <span>订单编号：111111</span>
                    <span>下单时间：2022/9/2 10:00</span>
                    <span>买家：lilu-123445</span>
                </div>
                <div class="goods_container">
                    <div id="goods_container_img">
                        <img src="../../assets/logo.png" alt="" width="60px">
                        <div class="goods_container_title">
                            <span>商品名称【交易快照】</span>
                            <span>交易保障</span>
                        </div>
                    </div>
                    <div class="goods_container_price">
                        <span>￥666.00</span>
                    </div>
                    <div class="goods_container_count">1</div>
                    <div class="goods_shouhou">待商家处理</div>
                    <div class="goods_state">待发货</div>
                    <div class="order_sum">￥88888</div>   
                    <div class="goods_caozuo">
                        <button>发货</button>
                        <button>取消订单</button>
                    </div>
                </div>
            </div>
        
           
        </div> 
    </div>
</template>

<script>
export default{
    name: 'GoodsItem',
    props: ['title'],
    data(){
        return{
           
        }
    },
    methods: {
    },
    mounted(){
        // console.log(this.$route);
    }
}
</script>

<style scoped>
    /* 最外部盒子 */
    .goods_data_box{
        width: 80%;
        margin: 0 auto;
    }
    /* 表头盒子 */
    .goods_data_box_header{
        height: 36px;
        background-color: lightgray;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
        padding: 0 7px;
        text-align: center;
    }
    .goods_data_box_header span{
        flex-grow: 1;
    }
    #shangpin{
        flex-grow: 3;
    }
    /* 商品内容编号 买家信息盒子 */
    .goods_data_box_info{
        border: 1px solid lightgray;

    }
    .goods_title{
       width: 100%;
       height: 28px;
       line-height: 28px;
       background-color: rgb(211, 224, 248);   
       font-size: 14px;  
    }
    .goods_title input{
        margin: 0px 20px 0 10px;
    }
    .goods_title span{
        margin-right: 50px;
    }
    /* 商品订单图片内容信息 */
    .goods_container{
        display: flex;
        align-items: center;
        padding: 10px;
        /* justify-content: space-around; */
        text-align: center;
    }
    .goods_container>div{
        flex-grow: 1;
    }
    #goods_container_img{
        display: flex;
        text-align: start;
    }
    .goods_container_title{
        height: 60px;
        justify-content: center;
        display: flex;
        flex-direction: column;
        
    }
    .goods_container_title :first-child{
        font-size: 15px;
        margin-bottom: 5px;
    }
    .goods_container_title :last-child{
        font-size: 14px;
        color: gray;
    }
    .goods_container_count{
        width: 10px;
        margin-right: 40px;
    }
    .goods_shouhou{
        width: 30px;
        margin-right: 20px;
    }
    .order_sum{
        text-align: end;
    }
    .goods_caozuo{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
    .goods_caozuo button{
        width: 70px;
        margin: 2px;
    }
</style>