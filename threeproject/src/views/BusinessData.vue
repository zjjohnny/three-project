<template>
    <div>
        <div class="refund-mgt-title">业务数据</div>

        <DateSearch></DateSearch>

        <UserDataItem :dataTableHead="dataTableHead" :dataTableCont="dataTableCont" />
        <GoodsPage></GoodsPage>
    </div>
</template>

<script>
import DateSearch from '@/components/pll/DateSearch.vue';
import UserDataItem from '@/components/pll/UserDataItem.vue';
import GoodsPage from '@/components/pll/GoodsPage.vue';
export default{
    name: 'BusinessData',
    components: {
        DateSearch,
        UserDataItem,
        GoodsPage
    },
    data(){
        return{
            dataTableHead:['商品图片','商品名称','访问次数','购买件数','转化率'],
            dataTableCont:[
                {
                    goods_img: '',
                    goods_name:'女表',
                    goods_visit_time: '1000',
                    goods_buyed_num: '220',
                    goods_percent_conversion: '60.6%'
                },
                {
                    goods_img: '',
                    goods_name:'女表',
                    goods_visit_time: '1000',
                    goods_buyed_num: '220',
                    goods_percent_conversion: '60.6%'
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>