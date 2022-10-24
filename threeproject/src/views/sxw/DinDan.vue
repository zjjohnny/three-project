<template>
    <div>
        <div>交易订单<span>(共80条)</span></div>
        <el-divider />
        <div class="PutOne">
          <span class="PutBta">订单编号</span><div class="oneputa"><el-input v-model="input" placeholder="请输入订单编号" /></div> 

          <span class="PutBtb">用户名</span><div class="oneputb"><el-input v-model="input" placeholder="请输入用户名" /></div> 

          <span class="PutBtc">收货人</span><div class="oneputc"><el-input v-model="input" placeholder="请输入收货人姓名" /></div> 

          <span class="PutBtd">联系电话</span><div class="oneputd"><el-input v-model="input" placeholder="请输入手机号码" /></div> 
          <span class="PutBte">开始时间</span><div class="onepute">
                       <div class="block">
     
                           <el-date-picker
                               v-model="value1"
                              type="date"
                              placeholder="选择日期"
                              :size="size"
                               />
                              </div>
                   </div>
          <span class="PutBtf">订单类型</span><div class="oneputf"> <el-select v-model="value" class="m-2" placeholder="Select">
                          <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                          />
                    </el-select></div>  
          <span class="PutBtg">结束时间</span><div class="oneputg"><div class="block">
   
                                          <el-date-picker
                                           v-model="value2"
                                           type="date"
                                           placeholder="选择日期"
                                           :disabled-date="disabledDate"
                                           :shortcuts="shortcuts"
                                           :size="size"
                                               />
                                          </div>
                                         </div>

          <div class="sousuoanniu"><el-button type="primary">搜索</el-button></div>
        </div>

        <div class="Biaogea">
            <el-tabs
               v-model="activeName"
               type="card"
               class="demo-tabs"
               @tab-click="handleClick"
             >
         <!-- 第一个 -->
      <el-tab-pane label="商品" name="first"><el-table :data="tableData1" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table>
        </el-tab-pane>
 
        <!-- 第二个 -->
    <el-tab-pane label="总价/数量" name="second"><el-table :data="tableData11" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table> 
        </el-tab-pane>

        <!-- 第三个 -->
    <el-tab-pane label="买家信息" name="third"><el-table :data="tableData12" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table>
        </el-tab-pane>
            
        <!-- 第四个 -->
        <el-tab-pane label="下单时间" name="fourth"><el-table :data="tableData13" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table>
        </el-tab-pane>
   
 
        <!-- 第五个 -->
     <el-tab-pane label="订单状态" name="firee"><el-table :data="tableData14" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
           >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table>
        </el-tab-pane>
     

        <!-- 第六个 -->
     <el-tab-pane label="贸易类型" name="sixe"><el-table :data="tableData15" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table>
        </el-tab-pane>
    

        <!-- 第七个 -->
     <el-tab-pane label="实付金额" name="svser"><el-table :data="tableData16" 
            :header-cell-style="{background:'#eef1f6'}"
            border
            :row-style="{height:'80px'}"
            style="width: 90%"
            >
            <el-table-column prop="date" label="商品" width="250" />
            <el-table-column prop="namea" label="总价/数量" width="160" />
            <el-table-column prop="nameb" label="买家信息" width="220" />
            <el-table-column prop="namec" label="下单时间" width="160" />
            <el-table-column prop="named" label="订单状态" width="160" />
            <el-table-column prop="namee" label="贸易类型" width="160" />
            <el-table-column prop="namef" label="实付金额" width="160" />
            <el-table-column label="操作">
      <template #default>
        <el-button size="small" 
          >查看详情</el-button
        >
      </template>
    </el-table-column>
            </el-table>
            
        </el-tab-pane>
     </el-tabs>
            
        </div>
      
        
    </div>
</template>
<script lang="ts" setup>
     import { TabsPaneContext } from 'element-plus';
     import { ref } from 'vue';
     import { useRoute } from 'vue-router';
     import {useStore} from 'vuex';
     import axios from 'axios';
     name:'dindan'
   
     const input = ref('');

     const activeName = ref('first')

     const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
   };
   const size = ref<'' | 'large' | 'small'>('')

const value1 = ref('')
const value2 = ref('')

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
};
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
const tableData1 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },{
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
];
const tableData11 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  }
];
const tableData12 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  }
];
const tableData13 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  }
];
const tableData14 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },{
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
];
const tableData15 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },{
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  }
];
const tableData16 = [
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  },
  {
    date: '商品标题    商品规格',
    namea: '1000.00 (2件)',
    nameb: '用户名: 小谁加的老谁,收件人: 何佳文,18151603769',
    namec:'2019-02-11 19:49',
    named:'待付款',
    namee:'一般贸易',
    namef:'1020.00'
  }
]
   
    </script>
    <style scoped>

        template{
           margin: 0;
           padding: 0;
        }
        .PutOne{
            width: 95%;
            height: 180px;
            background-color: rgba(232, 232, 236, 0.894);
        }
        .oneputa{
            position: absolute;
            margin-left: 100px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBta{
            display: block;
            position: absolute;
            margin-left: 20px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputb{
            position: absolute;
            margin-left: 450px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBtb{
            display: block;
            position: absolute;
            margin-left: 370px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputc{
            position: absolute;
            margin-left: 800px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBtc{
            display: block;
            position: absolute;
            margin-left: 720px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputd{
            position: absolute;
            margin-left: 1250px;
            width: 200px;
            margin-top: 18px;
        } 
        .PutBtd{
            display: block;
            position: absolute;
            margin-left: 1170px;
            margin-top: 25px;
            font-size: 14px;
        }
        .oneputg{
            position: absolute;
            margin-left: 450px;
            width: 200px;
            margin-top: 120px;
        } 
        .PutBtg{
            display: block;
            position: absolute;
            margin-left: 370px;
            margin-top: 126px;
            font-size: 14px;
        }
        .oneputf{
            position: absolute;
            margin-left: 800px;
            width: 200px;
            margin-top: 120px;
        } 
        .PutBtf{
            display: block;
            position: absolute;
            margin-left: 720px;
            margin-top: 126px;
            font-size: 14px;
        }
        .onepute{
            position: absolute;
            margin-left: 100px;
            width: 200px;
            margin-top: 120px;
        } 
        .PutBte{
            display: block;
            position: absolute;
            margin-left: 20px;
            margin-top: 126px;
            font-size: 14px;
        }
        .sousuoanniu{
            width: 50px;
            position: absolute;
            margin-left: 1200px;
            margin-top: 120px;
        }

        .Ddbaoti{
            float: left;
            position: absolute;
            margin-left: -40px;
        }
        .Ddbaoti li{
            display: inline-block;
            width: 140px;
            height: 44px;
            border: 1px solid rgba(180, 177, 177, 0.555);
            text-align: center;
            line-height : 44px; 
            font-size: 14px;
            cursor: pointer;
        }
       .Biaogea{
        position: relative;
        margin-top: 64px;
        /* width: 1200px; */

       }

    </style>