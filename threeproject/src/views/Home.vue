<template>
<div class="mynav">
    <el-container style="height:100%">
    <el-aside width="auto" style="overflow:hidden">
        <commom-aside></commom-aside>
    </el-aside>
    <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
    </el-container>
    </el-container>
</div>
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
    .mynav{
    position: fixed;
    height: 100%;
    width: 100%;
    }
    .el-header{
        background-color:white;
    }
    .el-main{
        padding-top: 0;
    }
</style>