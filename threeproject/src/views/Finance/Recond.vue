<template>
  <div class="tittle">资金流水</div>
  <div class="today">
      <div class="income">
          <img src="../../assets/image/1.png" alt="">
          <div class="content">今日收入</div>
          <div class="mynum">124345</div>
      </div>
      <div class="income">
          <img src="../../assets/image/1.png" alt="">
          <div class="content">今日支出</div>
          <div class="mynum">124345</div>
      </div>
      <div class="income">
          <img src="../../assets/image/1.png" alt="">
          <div class="content">上月收入</div>
          <div class="mynum">124345</div>
      </div> 
      <div class="income">
          <img src="../../assets/image/1.png" alt="">
          <div class="content">本月支出</div>
          <div class="mynum">124345</div>
      </div> 
      <div class="income">
          <img src="../../assets/image/1.png" alt="">
          <div class="content">本月收入</div>
          <div class="mynum">124345</div>
      </div>         
  </div>
  <div class="search">
      <div class="oneinput">
          手机号码
          <el-input v-model="input" placeholder="请输入手机号码" maxlength="11" style="width:12%;"/>
      </div>
      <div class="twoinput">
          资金类型
          <el-select v-model="value" filterable  clearable placeholder="选择资金类型">
              <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              />
          </el-select>
      </div>
      <div class="threeinput">
          支付方式
          <el-select v-model="mode" filterable  clearable placeholder="选择支付方式">
              <el-option
              v-for="item in mymode"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              />
          </el-select>
      </div>
      <div class="fourinput">
          会员等级
          <el-select v-model="grade" filterable  clearable placeholder="选择支付方式">
              <el-option
              v-for="item in mygrade"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              />
          </el-select>
      </div>
      <div class="fiveinput">
          收入/支出
          <el-select v-model="expenditure" filterable  clearable placeholder="选择支付方式">
              <el-option
              v-for="item in myexpenditure"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              />
          </el-select>
      </div>
      <div class="myflex">
          <el-button color="#626aef"  plain>搜索</el-button>
      </div>
  </div>
  <div class="mydata">
      <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="流水编号" label="流水编号" width="160" />
      <el-table-column prop="用户码" label="用户码" width="180" />
      <el-table-column prop="手机号码" label="手机号码" width="180" />
      <el-table-column prop="会员等级" label="会员等级" width="180" />
      <el-table-column prop="资金类型" label="资金类型" width="180" />
      <el-table-column prop="支付方式" label="支付方式" width="180" />
      <el-table-column prop="金额" label="金额" width="180" />
      <el-table-column prop="收支类型" label="收支类型" width="180" />
      <el-table-column prop="时间" label="时间" width="180" />
</el-table>
  </div>

</template>
<script lang="ts" setup>
  import { ref  } from 'vue'

const input = ref('')
const value = ref('')
const mode = ref('')
const grade = ref('')
const expenditure = ref('')
const options = [
{
  value: '等级充值',
  label: '等级充值',
},
{
  value: '购物消费',
  label: '购物消费',
},
{
  value: '消费退款',
  label: '消费退款',
},
{
  value: '购物佣金',
  label: '购物佣金',
},
{
  value: '等级佣金',
  label: '等级佣金',
}
]
const mymode =[{
  value:'微信',
  label:'微信'
},
{
  value:'支付宝',
  label:'支付宝'
}
]
const mygrade = [{
  value:'A',
  label:'A'
},
{
  value:'B',
  label:'B'
},
{
  value:'C',
  label:'C'
}
]
const myexpenditure =[{
  value:'收入',
  label:'收入'
},
{
  value:'支出',
  label:'支出'
}
]

const tableData = [
{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
<style  scoped>
.tittle{
margin-left: 4%;
}
.today{
  width:94%;
  height: 120px;
  margin-left: 3%;
  border: 1px solid black;
}
.income{
  width: 16%;
  height: 100px;
  margin-top: 10px;
  margin-left: 2%;
  display: inline-block;
  /* border: 1px solid black; */
}
img{
  margin-left: 16%;
  margin-top:14px;
  float: left;
}
.content{
  font-size: 14px;
  color: rgb(170, 165, 165);
  margin-left: 20px;
  float: left;
  margin-top: 30px;  
}
.mynum{
  float: left;
  margin-left: 10%;
}
.search{
  width: 94%;
  height: 120px;
  border: 1px solid black;
  background-color: rgb(236, 219, 219);
  margin-top: 40px;
  margin-left: 3%;
}
.oneinput{
  margin-left: 3%;
  margin-top: 20px;
  color: gray;
  font-size: 16px;
}
.twoinput{
  margin-left: 3%;
  margin-top: 20px;
  color: gray;
  font-size: 16px;
}
.threeinput{
  margin-left: 38%;
  margin-top: -83px;
  color: gray;
  font-size: 16px;
  
}
.fourinput{
  margin-left: 38%;
  margin-top: 20px;
  color: gray;
  font-size: 16px;
}
.fiveinput{
  margin-left: 74%;
  margin-top: -83px;
  color: gray;
  font-size: 16px;
}
.myflex{
  margin-left: 74%;
  margin-top: 20px;
  color: gray;
  font-size: 16px;
}
.mydata{
  width: 94%;
  height: 600px;
  margin-left: 3%;
  margin-top: 40px;
  border: 1px solid black;
}
</style>