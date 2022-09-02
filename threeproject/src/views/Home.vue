<template>
    <el-container style="height:100%">
    <el-aside width="auto"><commom-aside></commom-aside></el-aside>
    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
    </el-container>
    </el-container>

</template>

<script>
import commomAside from  '../components/commomAside.vue'
export default {
    name:'Home',
    components:{
        commomAside
    },
}
</script>

<style lang="less" scoped>
    .el-header{
        background-color:black;
    }
    .el-main{
        padding-top: 0;
    }
</style>