<template>
    <div>

        <div class="refund-process">
            <div class="process_bg process_bg_active">1:买家申请退款</div>
            <div class="process_bg process_bg_active">2:卖家处理退款申请</div>
            <div :class="['process_bg',info.refState != 2 ? 'process_bg_active':'']">3:退款完毕</div>
        </div>
        <div class="refund-container">
            <div class="left-box">
                <!-- 退款待处理状态 -->
                <div class="refund-process-seller" v-if="info.refState == 2">
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
                <!-- 退款成功状态 -->
                <div class="refund-process-success" v-else-if="info.refState == 1">
                    <span>退款成功</span>
                    <span>退款成功时间：{{info.dealTime}}</span>
                    <span>退款金额： ￥{{info.remoney}}</span>
                </div>
                <!-- 退款关闭状态 -->
                <div class="refund-process-closed refund-process-success" v-else-if="info.refState == 3">
                    <span>退款关闭</span>
                    <span>完结时间：2022-07-29 12:28:29</span>
                    <span>买家已撤销本地退款申请</span>
                </div>
                <!-- 协商历史 -->
                <div class="refund-message">
                    <div class="refund-message-title">
                        <span>协商历史</span>
                        <!-- <span @click="toMessage">我要留言</span> -->
                        <el-button type="text" @click="dialogFormVisible = true">我要留言</el-button>
                    </div>
                    <!-- 留言信息 -->
                    <div class="leave-message">
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
            </div>
            <div class="right-box">
                <div class="right-box1">
                    <span>相关商品交易信息</span>
                    <div class="goods-info">
                        <img src="../../assets/logo.png" alt="" width="60px" height="50px">
                        <div class="goods-infos">
                            <span>{{info.goodsName}}</span>
                            <span>￥{{info.remoney}}</span>
                        </div>
                    </div>
                </div>
                <div class="right-box2">
                    <span>买家：{{info.account}}</span>
                    <span>订单编号：{{info.orderNumber}}</span>
                    <span>商品总价：￥{{info.remoney}}</span>
                </div>
                <div class="right-box3">
                    <span>退款编号：{{info.refId}}</span>
                    <span>退款金额：￥{{info.remoney}}</span>
                    <span>原因：协商一致退款</span>
                </div>
            </div>
        </div>
        <el-dialog title="输入留言" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-input type="textarea" v-model="form.text" autocomplete="off"></el-input>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button :plain="true" type="primary" @click="dialogFormVisible = false,submitMessage()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default{
    name: 'RefundProcessItem',
    props: ['info'],
    data(){
        return{

            dialogFormVisible: false,
            form: {
                text: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formLabelWidth: '120px'
        }
    },
    methods: {
        // 留言
        submitMessage(){
            this.$message('留言成功');
            console.log("留言",this.form.text);
            
        }
    },
    mounted(){
        console.log(this.info);
    }
}
</script>

<style scoped>

    .refund-process{
        display: flex;
        justify-content: space-between;
        width: 76%;
        margin: 0 auto;
    }
    .refund-process div{
        width: 32%;
        height: 36px;
        line-height: 36px;
        color: white;
        text-align: center;
    }
    .process_bg{
        background-color: lightgray;
    }
    .process_bg_active{
        background-color: rgb(25,137,233);
    }

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
        font-weight: 500;
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