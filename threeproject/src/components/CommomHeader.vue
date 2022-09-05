<template>
    <header>
        <div class="l-content">
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <h5>首页</h5>
        </div>
        <div class="r-content">
           
                 <!-- <el-button plain icon="el-icon-s-home" size="mini"></el-button>
                 <h6>首页</h6>  -->
                 <el-dropdown trigger="click" size="mini">
                    <span>
                        <img class="user" :src="userImg" alt="">
                    </span> 
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >个人中心</el-dropdown-item>
                        <el-dropdown-item >退出</el-dropdown-item>           
                    </el-dropdown-menu>
                </el-dropdown>           
        </div>
    </header>
</template>

<script>
export default {
    name:'commomHeader',
    data(){
        return{
            userImg:require('../assets/image/personal.webp')
        }
    },
    methods:{
        handleMenu(){
            
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
   
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}
.r-content{
    .user{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
}

</style>