<template>
    <div class="tittle">佣金体现</div>
    <div class="today">
        <div class="income">
            <img src="../../assets/image/1.png" alt="">
            <div class="content">累计佣金体现</div>
            <div class="mynum">124,345</div>
        </div>
        <div class="income">
            <img src="../../assets/image/1.png" alt="">
            <div class="content">今日提现</div>
            <div class="mynum">124,345</div>
        </div>
        <div class="income">
            <img src="../../assets/image/1.png" alt="">
            <div class="content">待处理体现</div>
            <div class="mynum">124345</div>
        </div> 
    </div>
    <div class="search">
        <div class="oneinput">
            手机号码
            <el-input v-model="input" placeholder="请输入手机号码" maxlength="11" style="width:12%;"/>
        </div>
        <div class="threeinput">
            处理状态
            <el-select v-model="processingstatu" filterable  clearable placeholder="选择支付方式">
                <el-option
                v-for="item in myprocessingstatus"
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
        <el-tabs
            v-model="activeName"
            type="border-card"
            class="demo-tabs"
            @tab-click="handleClick"
            stretch="true"
        >
            <el-tab-pane label="全部" name="first" height:60>
                <div class="mycont">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="财务编号" width="220" />
                        <el-table-column prop="asc" label="手机号码" width="220" />
                        <el-table-column prop="tel" label="会员等级" width="220" />
                        <el-table-column prop="vip" label="提现方式" width="220" />
                        <el-table-column prop="scc" label="金额" width="220" />
                        <el-table-column prop="showmon" label="处理时间" width="250" />
                        <el-table-column prop="moneey" label="处理状态" width="220" />
                        <el-table-column prop="getforce" label="操作" width="220" />
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="无需审核" name="second">
                <div class="mycont">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="财务编号" width="220" />
                        <el-table-column prop="asc" label="手机号码" width="220" />
                        <el-table-column prop="tel" label="会员等级" width="220" />
                        <el-table-column prop="vip" label="提现方式" width="220" />
                        <el-table-column prop="scc" label="金额" width="220" />
                        <el-table-column prop="showmon" label="处理时间" width="250" />
                        <el-table-column prop="moneey" label="处理状态" width="220" />
                        <el-table-column prop="getforce" label="操作" width="220" />
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待审核" name="third">
                <div class="mycont">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="财务编号" width="220" />
                        <el-table-column prop="asc" label="手机号码" width="220" />
                        <el-table-column prop="tel" label="会员等级" width="220" />
                        <el-table-column prop="vip" label="提现方式" width="220" />
                        <el-table-column prop="scc" label="金额" width="220" />
                        <el-table-column prop="showmon" label="处理时间" width="250" />
                        <el-table-column prop="moneey" label="处理状态" width="220" />
                        <el-table-column prop="getforce" label="操作" width="220" />
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="审核通过" name="fourth">
                <div class="mycont">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="财务编号" width="220" />
                        <el-table-column prop="asc" label="手机号码" width="220" />
                        <el-table-column prop="tel" label="会员等级" width="220" />
                        <el-table-column prop="vip" label="提现方式" width="220" />
                        <el-table-column prop="scc" label="金额" width="220" />
                        <el-table-column prop="showmon" label="处理时间" width="250" />
                        <el-table-column prop="moneey" label="处理状态" width="220" />
                        <el-table-column prop="getforce" label="操作" width="220" />
                    </el-table>
                </div>
            </el-tab-pane>
            <el-tab-pane label="审核拒绝" name="fiveth">
                <div class="mycont">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column prop="id" label="财务编号" width="220" />
                        <el-table-column prop="asc" label="手机号码" width="220" />
                        <el-table-column prop="tel" label="会员等级" width="220" />
                        <el-table-column prop="vip" label="提现方式" width="220" />
                        <el-table-column prop="scc" label="金额" width="220" />
                        <el-table-column prop="showmon" label="处理时间" width="250" />
                        <el-table-column prop="moneey" label="处理状态" width="220" />
                        <el-table-column prop="getforce" label="操作" width="220" />
                    </el-table>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="" name="sixth">  
            <el-button color="#626aef"  plain>体现规则设置</el-button>
        </el-tab-pane> -->
        <el-pagination class="mypage" background layout="total,sizes,prev, pager, next,jumper" :total="1000" />

        </el-tabs>
       
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

export default defineComponent({
    name:'myuserList',
    setup(){
        const input = ref('')
        const processingstatu = ref('')
        const activeName = ref('first')
        const tableData=[{}]
        const myprocessingstatus = [{
                value:'待审核',
                label:'待审核'
            },
            {
                value:'已拒绝',
                label:'已拒绝'
            },
            {
                value:'已完成',
                label:'已完成'
            }
            ]
        const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
        }

        return{
        activeName,handleClick,
        input,processingstatu,
        myprocessingstatus,
        tableData

        }
    }
})

</script>
<style scoped>
::v-deep .el-tabs__content {
   padding: 0;
   width: 100%;
  }  
.demo-tabs{
    width: 100%;
    height: 600px;
}
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
    height: 80px;
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
.threeinput{
    margin-left: 38%;
    margin-top: -30px;
    color: gray;
    font-size: 16px;
    
}
.myflex{
    margin-left: 74%;
    margin-top: -30px;
    color: gray;
    font-size: 16px;
}
.mydata{
    width: 94%;
    height: 600px;
    margin-left: 3%;
    margin-top: 40px;
 
}
.myflexs{
    margin-left: 90%;
    margin-top: -550px;
    color: gray;
    font-size: 16px;
}
.mycont{
    width: 100%;
    margin: 0 ;
    padding: 0;

}
.mypage{
    margin-left: 25%;
    margin-top: 400px;
}
</style>