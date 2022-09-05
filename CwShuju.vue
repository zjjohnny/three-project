<template>
    <div>
        <div class="btone">财务数据</div>
        <el-divider></el-divider>
        <div class="bgone">
          <span class="bgtwo">销售金额</span><span class="bga">(所有)</span>
          <span class="bgb">12000.00</span><span class="bgc">元</span>
          <el-divider direction="vertical" class="fengex"></el-divider>
          <span class="bgtwo">到账金额</span><span class="bga">(已确认到账)</span>
          <span class="bgb">10000.00</span><span class="bgc">元</span>
          <el-divider direction="vertical" class="fengex"></el-divider>
          <span class="bgtwo">在库金额</span><span class="bga">(已退款)</span>
          <span class="bgb">&nbsp;2000.00</span><span class="bgc">元</span>
          <el-divider direction="vertical" class="fengex"></el-divider>
          <span class="bgtwo">退款金额</span><span class="bga">(已退款)</span>
          <span class="bgb">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0.00</span><span class="bgc">元</span>
        </div>
        <div>
            <div class="jgx"></div>
            <div class="cxbta">明细数据</div>
        </div>
        <div class="spmca">
            商品名称<input></input>
        </div>
        <div class="spmcb">
            商品ID<input></input>
        </div>
        <div class="spmcc">
            订单编号<input></input>
        </div>
        <div class="spmcd">
            财务状态<select name=""  size="">
		       <option value =""  selected>全部状态</option>
		       <option value ="">在库</option>
		       <option value ="">到账</option>
               <option value ="">退款</option>
             
               </select>
        </div>
        <div class="spmce">
            下单日期<select name=""  size="">
		       <option value =""  selected>全部日期</option>
		       <option value ="">最近24小时</option>
		       <option value ="">最久7天</option>
               <option value ="">最久1一个月</option>
               <option value ="">最久1年</option>
               </select>
 
        </div>
        <button class="sousuoa">搜索</button>

       
    <el-table
      :data="tableData"
      style="width: 1200px"
      >
      <el-table-column
        prop="date"
        label="订单编号"
        width="220">
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名称"
        width="220">
      </el-table-column>
      <el-table-column
        prop="jge"
        label="商品价格（元）"
        width="150">
      </el-table-column>
      <el-table-column
        prop="shuliang"
        label="订单数量"
        width="150">
      </el-table-column>
      <el-table-column
        prop="riqi"
        label="下单日期"
        width="110">
      </el-table-column>
      <el-table-column
        prop="zhuangt"
        label="状态"
        width="170">
      </el-table-column>
      <el-table-column
        prop="cwzt"
        label="财务状态"
        width="170">
      </el-table-column>
    </el-table>

    <div class="block">
        <span class="demonstration"></span>
    <el-pagination
    background
    
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
  
    </div>
    
</template>
<style coped>
    .block{float: left;
         position: absolute;
         margin-left: 550px;
         margin-top: 570px;
    }
    .el-table{
          float: left;
          position: absolute;
          margin-top: 210px;
          margin-left: 50px;

}
    .sousuoa{width: 70px;
        height: 30px;
        float: left;
        position: absolute;
        margin-left: 1080px;
        margin-top: 78px;
        background-color: rgb(10, 172, 226);
        color: white;
        border-style: none;
        border-radius: 4px;
    }
    .spmca{float: left;
    position: absolute;
    margin-left: 72px;
    margin-top: 80px;  
   }
   select{width: 150px;
    height: 30px;
    margin-left: 5px;}
     .spmcb{
        float: left;
        position: absolute;
        margin-left: 352px;
        margin-top: 80px;  
     }
     .spmcc{
        float: left;
        position: absolute;
        margin-left: 600px;
        margin-top: 80px;  
     }
     .spmcd{
        float: left;
        position: absolute;
        margin-left: 72px;
        margin-top: 170px;  
     }
     .spmce{
        float: left;
        position: absolute;
        margin-left: 350px;
        margin-top: 170px;  
     }
     input{
      margin-left: 5px;
      width: 140px;
      height: 20px;

}
    .jgx{width: 3px;
      height: 20px;
      background-color: red;
       float: left;
       position: absolute;
       margin-top: 30px;
       margin-left: 50px;
    
    }
    .cxbta{float: left;
         position: absolute;
         margin-left: 70px;
         margin-top: 28px;
         font-size: 16px;
    }
    .btone{
        font-size: 26px;
        margin-left: 500px;
        margin-top: 20px;
        color: rgb(100, 98, 98);}
        .bgone{border: 1px solid  rgb(100, 98, 98);
        width: 1100px;
        height: 130px;
        margin-left: 50px;
        }
        .fengex{margin-left: 110px;
        height: 80px;
        margin-top: 20px;}
        .bgone span{text-align: center;}
        .bgtwo{font-size: 18px;
            font-weight: bolder;
            margin-left: 30px;}
        .bga{font-size: 14px;
        color: grey;}
        .bgb{
            position: absolute;
            margin-top: 80px;
            margin-left: -110px;
            font-size: 20px;
            font-weight: bold;
            color: rgb(246, 58, 58);
            }
        .bgc{font-size: 14px;
            position: absolute;
            margin-top: 86px;
            margin-left: -12px;}
</style>

<script>
    export default {
      data() {
        return {
             currentPage1: 5,
             currentPage2: 5,
             currentPage3: 5,
             currentPage4: 4,
          tableData: [{
            date: 'Te202212121231',
            name: '小码裤子 ID:123456',
            jge: '100.00',
            shuliang:'10',
            riqi:'2022-12-30 12:30',
            zhuangt:'已完成',
            cwzt:'到账'
          }, {
            date: 'Te202212121231',
            name: '小码裤子 ID:123456',
            jge: '100.00',
            shuliang:'10',
            riqi:'2022-12-30 12:30',
            zhuangt:'已完成',
            cwzt:'到账'
          }, {
            date: 'Te202212121231',
            name: '小码裤子 ID:123456',
            jge: '100.00',
            shuliang:'10',
            riqi:'2022-12-30 12:30',
            zhuangt:'已完成',
            cwzt:'到账'
          }, {
            date: 'Te202212121231',
            name: '小码裤子 ID:123456',
            jge: '100.00',
            shuliang:'10',
            riqi:'2022-12-30 12:30',
            zhuangt:'已完成',
            cwzt:'到账'
          }],
          methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
        }
      }
    }
  </script>