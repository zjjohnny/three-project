<template>
    <div>
        <div>满减列表<span>(共80条)</span></div>
        <el-divider />
        <div class="PutOne">
          <span class="PutBta">活动名称</span><div class="oneputa"><el-input v-model="ss.name" placeholder="请输入活动名称" /></div> 
          <span class="PutBtb">活动状态</span><div class="oneputb">
          <el-select v-model="ss.state" class="m-2" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            />
          </el-select>
        </div>
        <div class="sjbox">
            <span class="demonstration">开始时间</span>
            <div class="demo-date-picker">
                <div class="block">
                    <el-date-picker
                    v-model="ss.mytime"
                    type="daterange"
                    unlink-panels
                    range-separator="To"
                    start-placeholder="Start date"
                    end-placeholder="End date"
                    :shortcuts="shortcuts"
                    :size="size"
                    />
                </div>
            </div>
        </div>
          <div class="sousuo"><el-button type="primary" @click="searchUser">搜索</el-button></div> 
        </div>
        <div class="tjsj"><span class="suju">共10条数据</span></div>
        <!-- 表格 -->
        <el-table :data="tableData" style="width: 95%">
            <el-table-column fixed prop="name" label="活动名称" width="200" />
            <el-table-column prop="manjian" label="满减" width="200" />
            <el-table-column prop="state" label="活动状态" width="200" />
            <el-table-column prop="citstartTimey" label="开始时间" width="220" />
            <el-table-column prop="endTime" label="结束时间" width="220" />
            <el-table-column fixed="right" label="操作" width="180">
              <template #default="scope">
                <el-button link type="primary" size="small" @click="handleClick(scope.row)"
                  >查看</el-button
                >
                <el-button link type="primary" size="small" @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">
    import {defineComponent,onBeforeMount, reactive, computed, ref} from 'vue';
    import {useStore} from 'vuex';
    import {useRouter} from 'vue-router'
    import { ElMessage} from "element-plus";
    import axios from "../../plugins/axiosInstance";
    
    export default defineComponent({
      
    
      name:"ManJian",
        setup() {
          const store = useStore();//调用useStore获取store
          const router = useRouter();//获取路由对象
          //下拉框数据
          const options = [
          {
            value: 'Option1',
            label: '进行中',
          },
          {
            value: 'Option2',
            label: '结束',
          }];
          //搜索栏输入数据
          const ss= reactive({
            name:"",
            state:"",
            mytime:"",
          });
          //表格数据
          const userTableData = reactive([]);
          //搜索用户 
          const searchUser = function () {
             console.log(ss);
          };
          //时间选择
          const size = ref<'' | 'large' | 'small'>('');
          // 时间选择
          const shortcuts = [{
            text: 'Last week',
            value: () => {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              return [start, end]
            },
          }];

          onBeforeMount(function () {
            axios({
              method: "get",
              url: "getuser.do",
            }).then((res: { data: any; }) => {
              console.log(res);
              store.dispatch("settableData",res.data);
            })
          })
          //查看函数  
          const handleClick = (row: { id: any; }) => {
          console.log('click')
          };

          //从store中获取用户数据
          const tableData=computed(()=>{
             return store.state.tableData
          });
                  //删除
          const handleDelete=(row: { id: any; })=>{
            if (confirm("确定删除吗")) {
              store.dispatch("deleteUser", row.id);
          }
            console.log(row);
        }

          return {
            options,searchUser,
            ss,tableData,
            handleClick,
            userTableData,
            handleDelete,
            size,
            shortcuts
          }
        }
      });

    </script>
    <style scoped>

        template{
           margin: 0;
           padding: 0;
        }
        .PutOne{
            width: 95%;
            height: 120px;
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
        .sousuo{
            width: 50px;
            position: absolute;
            margin-left: 590px;
            margin-top: 80px;
        }
        .demo-date-picker {
          display: flex;
          width: 100%;
          padding: 0;
          flex-wrap: wrap;
        }
        .demo-date-picker .block {
          padding: 30px 0;
          text-align: center;
          border-right: solid 1px var(--el-border-color);
          flex: 1;
        }
        .demo-date-picker .block:last-child {
          border-right: none;
        }
        .demo-date-picker {
          display: block;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          margin-bottom: 20px;
        }
        .demonstration{
            display: block;
            position: absolute;
            margin-left: -80px;
            margin-top: 35px;
            font-size: 14px;
        }
        .sjbox{
            position: absolute;
            margin-left: 100px;
            margin-top: 50px;
        }
        .tjsj{
            width: 95%;
            height: 50px;
        }
        /* 数据一共多少条 */
        .suju{
            position: absolute;
            margin-left: 350px;
            margin-top: 20px;
        }
        
</style>