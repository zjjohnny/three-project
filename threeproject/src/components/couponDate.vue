<template>
  <div>
    <el-container>
        <el-header>
            <button>店铺券</button>
        </el-header>
        <el-main>
            <el-row :gutter="24">
                <el-col :span="4">
                    <div class="col">
                        <span>领取张数</span>
                        <p>0</p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="col">
                        <span>使用张数</span>
                        <p>0</p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="col">
                        <span>支付金额</span>
                        <p>0.00</p>
                    </div>                    
                </el-col>
                <el-col :span="4">
                    <div class="col">
                        <span>支付买家数</span>
                        <p>0</p>
                    </div>                    
                </el-col>
                <el-col :span="4">
                    <div class="col">
                        <span>支付件数</span>
                        <p>0</p>
                    </div>                    
                </el-col>
                <el-col :span="4">
                    <div class="col">
                        <span>客单价</span>
                        <p>0.00</p>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>

  </div>
</template>

<script>
export default {
  name: "couponDate",
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
    .el-container{        
        padding: 60px 30px;
    }
    .el-header button{
        width: 100px;
        height: 60px;
        line-height: 60px;
        background-color: white;
        font-size: 17px;
        border: none;
        border-bottom: 5px solid #1989e9;
    }
   
    .el-main .el-row .el-col .col{
        text-align: center;
        border: 1px solid rgba(0,0,0,0.3);
        border-top: 5px solid #1989e9;
    }
    .el-main .el-row .el-col p{
        font-size: 20px;
        font-weight: 600;
    }
    
</style>