<template>
    <div>
        <div class="refund-mgt-title">
            <div class="goBack" @click="goBack">
                <img src="../../assets/fanhui.png" alt="">
                <span>返回</span>
            </div>
            <div>退款详情-关闭{{}}</div>
        </div>
        <RefundProcess></RefundProcess>
        <RefundProcessItem></RefundProcessItem>
    </div>
</template>
<script>
import RefundProcess from '@/components/pll/RefundProcess.vue'
import RefundProcessItem from '@/components/pll/RefundProcessItem.vue';
export default{
    name: 'RefundDetail',
    components: {
        RefundProcess,
        RefundProcessItem
    },
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .refund-mgt-title{
        display: flex;
        width: 100%;
        height: 80px;
        border-bottom: 1px solid lightgray;
        line-height: 100px;
        font-size: 30px;
        font-weight: 400;
        margin-bottom: 20px;
        color: rgb(105, 105, 105);
    }
    .goBack{
        font-size: 26px;
        color: #1296DB;
        font-weight: 500;
        margin-right: 34%;
        margin-left: 1%;
        cursor: pointer;
    }
    .goBack span{
        margin: 10px 0 0 10px;

    }
</style>