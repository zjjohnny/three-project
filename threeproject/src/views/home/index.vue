<template>
  <div>
    <el-row>
      <el-col :span="24" style="height:100px">
        <div class="grid-content bg-purple">
            <div>常用操作</div> 
            <div class="myportable" v-for="(item,i) in navlist" 
            :key="item.title" :index="item.title"
            :text="item.title"
            >{{item.title}}</div>
        </div>
      </el-col>
    </el-row>
<!-- <el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
<el-row>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
</el-row> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
     navlist:[
          {title:'商品管理',imgSrc:'shuju',linko:' '},
          {title:'发布商品',imgSrc:'',linko:''},
          {title:'订单中心',imgSrc:'',linko:''},
          {title:'运营管理',imgSrc:'',linko:''},
          {title:'营销管理',imgSrc:'',linko:''},
          {title:'数据统计',imgSrc:'',linko:''},      
        ]
    }
  }
}
</script>

<style lang='less' scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 240px;

  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .myportable{
    // display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    display: inline-block;
    
  }
</style>