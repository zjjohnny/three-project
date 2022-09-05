<template>
    <div class="refund-process">
        <div>1:买家申请退款</div>
        <div>2:卖家处理退款申请</div>
        <div>3:退款完毕</div>
    </div>
</template>

<script>
export default{
    name: 'RefundProcess',
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
        background-color: rgb(25,137,233);
        width: 32%;
        height: 36px;
        line-height: 36px;
        color: white;
        text-align: center;
    }
</style>