<template>
  
  <div class="hello">
    <div class="biaoti">账户资产</div>

    <div class="tableTitle"></div>

    <div class="neirong">
    <h3>账户余额</h3>
    <el-link type="primary" class="chakan">查看明细</el-link>
    <span class="jine">12000.0</span><span>元</span>

    <el-button>提现</el-button>


    <el-divider direction="vertical" class="one"></el-divider>
    
    <div class="jiesuan">待结算<span>(担保交易)</span></div>
    <el-link type="primary" class="chakan">查看明细</el-link>
    <span class="jinet">995.00</span><span>元</span>
    

    <el-divider direction="vertical" class="two"></el-divider>
    <div class="tixian">提现中</div>
    <span class="jinet">0.00</span><span>元</span>
  
    </div>

    <div class="ts">
      <span class="bzone"></span><span class="bztwo">提现记录</span>
      <span class="bzs">共查询到2条数据</span>

    </div>
    <el-table
      :data="tableData"
      style="width: 90%"
      :header-cell-style="{background:'#dcdcdc',color:'#606266'}"
      >
      <el-table-column
      align="center"
        prop="tes"
        label="提现编号"
        width="150">
      </el-table-column>
      <el-table-column
      align="center"
        prop="shenqing"
        label="申请时间"
        width="90">
      </el-table-column>
      <el-table-column
      align="center"
        prop="tixian"
        label="提现金额"
        width="110">
      </el-table-column>
      <el-table-column
      align="center"
        prop="shouxufei"
        label="手续费（元）"
        width="110">
      </el-table-column>
      <el-table-column
      align="center"
        prop="zhanghu"
        label="收款账户"
        width="180">
      </el-table-column>
      <el-table-column
      align="center"
        prop="chuli"
        label="处理完成时间"
        width="140">
      </el-table-column>
      <el-table-column
       align="center"
        prop="zhuangtai"
        label="提现状态"
        width="110">
      </el-table-column>
      <el-table-column
      align="center"
        prop="shuoming"
        label="说明"
        width="110">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          tes: 'Te202112121231',
          shenqing: '2021/7/19\n19:11:23',
          tixian:'10000',
          shouxufei: '1',
          zhanghu:'****  ****  **** ***2 960',
          chuli:'-',
          zhuangtai:'审核中',
          shuoming:'提现申请'
        }, {
          tes: 'Te202112121231',
          shenqing: '2021/7/19\n19:11:23',
          tixian:'10000',
          shouxufei: '1',
          zhanghu:'****  ****  **** ***2 960',
          chuli:'-',
          zhuangtai:'审核中',
          shuoming:'提现申请'
        }, {
          tes: 'Te202112121231',
          shenqing: '2021/7/19\n19:11:23',
          tixian:'10000',
          shouxufei: '1',
          zhanghu:'****  ****  **** ***2 960',
          chuli:'-',
          zhuangtai:'审核中',
          shuoming:'提现申请'
        }, {
          tes: 'Te202112121231',
          shenqing: '2021/7/19\n19:11:23',
          tixian:'10000',
          shouxufei: '1',
          zhanghu:'****  ****  **** ***2 960',
          chuli:'-',
          zhuangtai:'审核中',
          shuoming:'提现申请'
        }]
      }
    }
  }
</script>

<style scoped>
  .hello{margin-left: 300px;
  margin-top: 40px;}
.el-table .cell {
  white-space: pre-line;
  
}
.jine{color: red;
 font-size: 20px;
 margin-left: 30px;}
.neirong{width: 1000px;
 height: 130px;
 border: 1px solid grey;
 margin-top:30px ;}
 
.biaoti{
  width: 900px;
  height: 50px;
  color: rgb(86, 84, 84);
  font-size: 28px;
  margin-left: 500px;
}
.tableTitle {
    position: relative;
    
    width: 1300px;
    height: 1px;
    background-color: #d4d4d4;
   
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
  }
  .el-table{margin-top:30px ;}

  .chakan{float: left;
  position: absolute;
  margin-left: 170px;
  margin-top: -38px;}
  .el-divider{height: 80px;
    margin-top: -40px;
    margin-left: 130px;
}
  .neirong h3{
    margin-left: 30px;
  }
  .el-button{
    margin-left: 38px;
    width: 65px;
    height: 32px;
    
  }
  .jiesuan{float: left;
    position: absolute;
    margin-left: 343px;
    margin-top: -82px;
  
  }
  .jiesuan span{font-size: 14px;
  color: gray;}

  .one{margin-left: 80px;}
  .two{margin-left: 180px;}

  .jinet{ font-size: 20px;
   margin-left: 30px;}

   .tixian{
   float: left;
   margin-left: 640px;
   margin-top: -80px;
   }

   .ts{margin-top: 50px;
       }
   .bzone{width: 1px;
      height: 4px;
      border: 2px solid red;
      }
    .bztwo{font-size: 18px;
     margin-left: 16px;}
     .bzs{margin-left: 10px;
     font-size: 14px;}
</style>
