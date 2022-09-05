<template>
    <div>
     <h1 class="btone"><img src="../sxwimg/yh1.png"></img><a href="../components/CaiWushouye.vue">返回</a></h1>
     <div class="bta">对账单</div>
     <el-divider></el-divider>
     <div class="shengmin">
        <span class="shengmina">• 订单货款到账说明：快递物流签收不代表平台上的订单签收，只有当消费者在平台内主动确认完成或订单服务步骤完成一段时间后自动完成时，该笔订单款项将结算到商家账户；订单确认签收后入账有一定延时，若暂未到账请1小时后重新查询。
         </span>
         <span class="shengminb">• 费用说明：您需要支付每笔订单金额0.6%的支付服务费，具体请查看《木子平台合作协议》</span>
     </div>
     <ul class="mx">
        <li class="mxa">
         明细
       </li>
       <li class="mxb">
        日汇报
       </li>
       <li class="mxc">
        月汇报
       </li>
    </ul>

    <div class="cxzhangdan">
       <div>
        <div class="block" id="onea">
          <span class="demonstration">时间</span>
          &nbsp;
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间">
            </el-date-picker>
        </div>
        <p class="gang">一</p>
        <div class="block" id="oneb">
          <el-date-picker
            v-model="value1"
            type="datetime"
            placeholder="选择日期时间">
            </el-date-picker>
        </div>

        <el-select v-model="value" placeholder="请选择" class="xzqi">
         <el-option
         v-for="item in options"
         :key="item.value"
         :label="item.label"
         :value="item.value">
       </el-option>
       </el-select>
       </div>
       <div class="zjin">
         <p>资金流向</p>
         
         <div class="zja">收入</div>
         <div class="zja" id="zjb">支出</div>
       </div>
    </div>
    <div class="yewu">
        <p>业务类型</p>
        <div class="yewua">交易收入</div>
        <div class="yewua" id="ywb">手续费</div>
        <div class="yewua" id="ywc">提现</div>
        <div class="yewua" id="ywd">优惠券结算</div>
    </div>
    <div class="cxanniu">
        <button>查询</button>
    </div>
    <div class="byu">
        <div class="byua"></div>
        <div class="byub">查询结果</div>
        <div class="byuc">共查询到4条数据</div>
    </div>
      <div class="shouru">
          <div class="sra">收入金额：<span class="sraa">+2004.00元</span></div>
          <div class="srb">收入笔数：<span>2笔</span></div>
      </div>
      <div class="shouru" id="zhichu">
          <div class="sra">支出金额：<span class="srbb">-200.00元</span></div>
          <div class="srb">支出笔数：<span>20笔</span></div>
      </div>
      <el-table
        :data="tableData"
         border
         style="width: 987px"
         class="ddbiao"
         >
         <el-table-column
         prop="date"
         label="收支时间"
         width="190"
         >
         </el-table-column>
         <el-table-column
         prop="name"
         label="订单号"
         width="200"
         >
         </el-table-column>
         <el-table-column
         prop="address"
         label="业务类型"
         width="200"
         >
         </el-table-column>
         <el-table-column
         prop="shou"
         label="收支金额（元）"
         width="200"
         >
         </el-table-column>
         <el-table-column
         prop="beizhu"
         label="备注"
         width="195"
         >
         </el-table-column>
         </el-table>

         <div class="block" id="fenye">
         <span class="demonstration"></span>
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
    </el-pagination>
  </div>
    </div>
</template>
<style>
    #fenye{float: left;
    position: absolute;
     margin-top: 740px;
    margin-left: 370px;}
    .ddbiao{float: left;
    position: absolute;
    margin-top: 480px;
    margin-left: 50px;
}
    .sraa{color: red;}
    .srbb{color: rgb(20, 148, 20);}
    .srb{margin-left: 300px;
       margin-top: -20px;
    }
    .sra{margin-left: 30px;
      margin-top: 25px;}
    #zhichu{margin-left: 560px;}
    .shouru{float: left;
        position: absolute;
        width: 480px;
        height: 60px;
        background-color:  rgba(218, 218, 223, 0.824);
         margin-top: 380px;
        margin-left: 50px;
        font-size: 14px;}
    .btone{margin-left: 10px;
      }
    .bttwo {margin-left: 300px;}
    .btone a{text-decoration:none;
    color: dodgerblue;}
    .bta{float: left;
     position: absolute;
     margin-left: 500px;
     margin-top: -55px;
     font-size: 28px;
     color: rgb(93, 93, 96);}
     .shengmin{width: 987px;
     height: 118px;
     margin-left: 50px;
     margin-top: 50px;
     background-color: rgba(244, 245, 249, 1);
     font-size: 14px;
    color: rgb(58, 57, 57);}
     .shengmina{
        display: block;
        padding-top: 14px;
        padding-left: 40px;
      }
      .shengminb{display: block;
      padding-top: 25px;
      padding-left: 40px;}
     .mx{
     margin-left: 13px;
     margin-top: 30px;  
    list-style: none;
   }
    .mx li{display: inline;
    border: 1px solid grey;
    width: 80px;
    height: 25px;
    display: block;
    float: left;
    text-align: center;
    border-radius: 3px;
font-size: 14px;}
    .mxa{background-color: rgb(19, 188, 191);
    color:  #FFFFFF;;}

   .cxzhangdan{width: 987px;
   height: 240px;
   background-color:  rgba(244, 245, 249, 1);
   float: left;
   position: absolute;
   margin-left: 50px;
   margin-top: 50px;}
   #onea{
    float: left;
    margin-left:50px;
    margin-top: 10px;}
    #oneb{float: left;
    margin-left: 8px;
    margin-top: 10px;}
    .gang{
        float: left;
        margin-top: 20px;
        margin-left: 5px;}
        .xzqi{float: left;
        position: absolute;
        margin-left: 20px;
        margin-top: 10px;}
        .zjin{float: left;
        position: absolute;
        margin-left: 20px;
        margin-top: 70px;}
        .zja{border: 1px solid grey;
        float: left;
        position: absolute;
        margin-left: 90px;
        margin-top: -38px;
        width: 55px;
        height: 23px;
        text-align: center;
        font-size: 14px;
        color: rgb(76, 73, 73);}
        #zjb{margin-left: 170px;}
        .yewu{float: left;
        position: absolute;
        margin-left: 70px;
        margin-top: 180px;
        font-size: 14px;
        color: rgb(76, 73, 73);}
        .yewua{border: 1px solid gray;
         float: left;
         position: absolute;
         margin-left: 87px;
         width: 80px;
         height: 23px;
         margin-top: -38px;
        text-align: center;}
         #ywb{margin-left: 190px;
         width: 60px;}
         #ywc{margin-left: 270px;
        width: 50px;}
         #ywd{margin-left: 340px;
         width: 100px;}
         .cxanniu{float: left;
        position: absolute;
         margin-left: 158px;
        margin-top: 240px;
        }
        .cxanniu button{width: 90px;
         height: 30px;
         background-color: rgb(77, 169, 245);
        color: #FFFFFF;
         border-style: none;}
         .byu{float: left;
           position: absolute;
           margin-top: 330px;
           margin-left: 50px;}
           .byua{width: 3px;
            height: 18px;
           background-color: rgb(241, 45, 85);}
           .byub{margin-left: 18px;
                  margin-top: -17px;}
                  .byuc{margin-left: 92px;
                       margin-top: -17px;
                    font-size: 14px;}
  
</style>

<script>
    export default {
        methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
      data() {
        return {
            
          pickerOptions: {
            shortcuts: [{
              text: '今天',
              onClick(picker) {
                picker.$emit('pick', new Date());
              }
            }, {
              text: '昨天',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24);
                picker.$emit('pick', date);
              }
            }, {
              text: '一周前',
              onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
              }
            }]
          },
          value1: '',
          value2: '',
          value3: '',
          options: [{
          value: '选项1',
          label: '7天内'
        }, {
          value: '选项2',
          label: '31天内'
        
        }],
        value: '',
        tableData: [{
          date: '2021-12-23 13:06',
          name: '22',
          address: '手续费',
          shou:'-10.07',
          beizhu:'-'
        }, {
            date: '2021-12-23 13:06',
          name: '22',
          address: '手续费',
          shou:'-10.07',
          beizhu:'-'
        }, {
            date: '2021-12-23 13:06',
          name: '22',
          address: '手续费',
          shou:'-10.07',
          beizhu:'-'
        }, {
          date: '2021-12-23 13:06',
          name: '22',
          address: '手续费',
          shou:'-10.07',
          beizhu:'-'
        }],
        
        
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      
      }
        
      }
    };
  </script>