<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px"><img class="picture" src="../assets/logo1.png" alt=""></el-aside>
        <el-main>
          <el-row class="smallTitle">优惠券</el-row>
          <el-row class="touming">包括店铺优惠券和商品优惠券</el-row>
          <el-row>
            <el-col :span="4"><button class="">+创建商城优惠券</button></el-col>
            <el-col :span="4"><button class="">+创建商品优惠券</button></el-col>
          </el-row>
        </el-main>
      </el-container>
      <el-footer>
        <el-row class="zhixian">
          <el-col :span="2"><div class="smallDiv">数据概览</div></el-col>
          <el-col :span="22" ></el-col>
        </el-row>
      </el-footer>
    </el-container>
    
    
  </div>
</template>

<script>
export default {
  name: "Jump",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
};
</script>
<style scoped>
  .el-aside{
    margin-left: 50px;
  }
  .picture{
    border-radius: 5px;
  }
  .el-main{
    height: 100px;
    padding: 0;
  }
  .smallTitle{
    font-size: 17px;
    font-weight: 500;
  }
  .touming{
    opacity: 0.7;
    padding: 10px 0;
  }
  .el-col button{
    padding: 8px 10px;
    background-color: #fd4e4e;
    color: white;
    border: none;
    border-radius: 3px;
  }
  .el-footer {
    margin-top: 60px;
    height: 60px;
  }
  .smallDiv{
    
    width: 100px;
    text-align: center;
    height: 45px;
    line-height: 45px;
    margin-top: 15px;
    border: 1px solid rgba(0,0,0,0.3);
    border-bottom: none;
  }
  .zhixian{
    border-bottom: 1px solid rgba(0,0,0,0.3);
  }
</style>