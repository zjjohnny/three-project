<template>
    <div class="refund-container">
        <div class="left-box">
            <div class="refund-process-seller" v-if="state == 1">
                <div class="step1">
                    <span>请处理退款申请</span>
                    <span>还剩23时19分10秒</span>
                </div>
                <div class="step2">
                    <span>如果未办理，请点击同意退款给买家<br>如果实际已办理，请主动与买家联系<br>如果您逾期未响应申请，视作同意买家申请，系统会自动退款给买家</span>
                </div>
                <div class="step3">
                    <div>同意退款</div>
                    <div>开始办理</div>
                </div>
            </div>
            <div class="refund-process-success" v-else-if="state == 2">
                <span>退款成功</span>
                <span>退款成功时间：2022-07-29 12:28:29</span>
                <span>退款金额： ￥188888</span>
            </div>
            <div class="refund-process-closed refund-process-success">
                <span>退款关闭</span>
                <span>完结时间：2022-07-29 12:28:29</span>
                <span>买家已撤销本地退款申请</span>
            </div>
            <!-- 协商历史 -->
            <div class="refund-message">
                <div class="refund-message-title">
                    <span>协商历史</span>
                    <span @click="toMessage">我要留言</span>
                </div>
                <div class="refund-message-item">
                    <img src="../../assets/logo.png" alt="" width="50px" height="50px">
                    <div class="refund-message-container">
                        <div class="">
                            <span>昵称</span>&nbsp;&nbsp;
                            <span>2022-07-06 10:33:32</span>
                        </div>
                        <span>发起退款申请；原因：协商一致退款，退款金额：￥2688.00，说明：--；</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-box">
            <div class="right-box1">
                <span>相关商品交易信息</span>
                <div class="goods-info">
                    <img src="../../assets/logo.png" alt="" width="60px" height="50px">
                    <div class="goods-infos">
                        <span>商品名称</span>
                        <span>￥188888</span>
                    </div>
                </div>
            </div>
            <div class="right-box2">
                <span>买家：xxxxxx</span>
                <span>订单编号：12222222222222</span>
                <span>商品总价：￥18888</span>
            </div>
            <div class="right-box3">
                <span>退款编号：yyyyyyyy</span>
                <span>退款金额：￥12222</span>
                <span>原因：协商一致退款</span>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: 'RefundProcessItem',
    data(){
        return{
            state: 0
        }
    },
    methods: {
        // 留言
        toMessage(){
            console.log("留言");
        }
    }
}
</script>

<style scoped>
    .refund-container{
        width: 76%;
        margin: 10px auto;
        border: 1px solid lightgray;
        font-size: 14px;
        display: flex;
    }
    .left-box{
        width: 70%;
        padding: 20px;
    }
    /* 卖家处理 */
    .refund-process-seller{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid lightgray;
    }
    .step1 :first-child{
        font-weight: 600;
        font-size: 16px;
        margin-right: 30px;
    }
    .step1 :last-child{
        color: #1296DB;
    }
    .step2{
        margin: 10px 0;
        color: gray;
    }
    .step3{
        display: flex;
        margin: 10px 0 30px 0;
    }
    .step3 div{
        border: 1px solid lightgray;
        border-radius: 2px;
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .step3 :first-child{
        background-color: #1296DB;
        border-color: #1296DB;
        color: white;
        margin-right: 10px;
    }

    /* 协商内容 */
    .refund-message-title{
        display: flex;
        justify-content: space-between;
        margin: 20px 0 20px 0;
    }
    .refund-message-title :first-child{
        font-weight: 600;
        font-size: 16px;
    }
    .refund-message-title :last-child{
        color: #1296DB;
        cursor: pointer;
    }
    .refund-message-item{
        display: flex;
        padding: 10px;
    }
    .refund-message-container{
        margin-left: 10px;
    }
    .refund-message-container div{
        margin-bottom: 6px;
    }

    /* 相关商品交易信息 */
    .right-box{
        border-left: 1px solid lightgray;
        padding: 16px 20px;
        width: 27%;
    }
    .right-box1{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid lightgray;
        margin-top: 10px;
    }
    .goods-info{
        display: flex;
        margin: 10px;
    }
    .goods-infos{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .goods-infos :first-child{
        color: #1296DB;
    }

    .right-box2,.right-box3{
        display: flex;
        flex-direction: column;
        padding: 10px 0;
    }
    .right-box2 span,.right-box3 span{
        padding: 2px 0;
    }
    .right-box2{
        border-bottom: 1px solid lightgray;
    }

    /* 退款成功00 */
    .refund-process-success{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid lightgray;
        padding-bottom: 20px;
        height: 80px;
        justify-content: space-around;
    }
    .refund-process-success :first-child{
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 10px;
    }
</style>