<template>
    <div>
        <el-container>
            <el-header>
                <div class="fontBox">国家管理</div>
                <hr>
            </el-header>
            <el-main>
              <div class="marBox">
                <el-row>
                  <el-col :span="3" style="text-align:center;height:30px;line-height:30px;">搜索国家</el-col>
                  <el-col :span="6"><el-input v-model="form.cName" placeholder="请输入国家名称"/></el-col>
                  <el-col :span="1" style="visibility: hidden;"></el-col>
                  <el-col :span="3"><el-button type="primary" @click="sousuo">确认搜索</el-button></el-col>
                  <el-col :span="3"><el-button type="primary" @click="allC">展示所有</el-button></el-col>
                </el-row>
              </div>
              <div class="marBox">
                <el-row>
                  <el-col :span="3"><el-button type="primary" @click="create">添加国家</el-button></el-col>
                </el-row>    
              </div> 
                <el-table :data="countryList" style="width: 60%;text-align: center;" >
                    <el-table-column prop="countryname" label="国家名称" width="300"></el-table-column> 
                    <el-table-column prop="goodsNum" label="商品数量" width="300" />
                    <el-table-column  label="操作">
                      <template #default="scope">
                        <el-button link type="primary" size="small" @click="change(scope.row)">修改</el-button>
                        <!-- <el-button link type="primary" size="small" @click="dele(scope.row)">删除</el-button> -->
                      </template>
                    </el-table-column> 
                </el-table> 
            </el-main>
        </el-container>

    </div>
</template>
<script>
import { defineComponent, ref,onBeforeMount,computed } from 'vue'
import { useStore } from 'vuex'
import  service  from '../../request/papi'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup(){
    const store=useStore();//调用useStore获取store
    const router= useRouter();
    const countryList=computed(()=>{
        return store.getters.allCountry
    })
    onBeforeMount(()=>{
      service.get('/getCountry.do').then(res=>{
        console.log(res.data);
        store.dispatch("setCountryList",res.data)
    })
    })
    const form = ref({})

    const change = (row) => {
      console.log(row.id)
      router.push({path:"/change",query:{id:row.id}})
    }

    // const dele=(row)=>{
    //   console.log(2);
    // }
    const create=()=>{
      router.push({path:"/increase"})
    }

    const sousuo=()=>{
      console.log(form.value);
      service.get('/sousuo.do',{params:{
        countryname:form.value.cName
      }}).then(res=>{
        console.log(res.data);
        store.dispatch("setCountryList",res.data)
    })
    }

    const allC=()=>{
      service.get('/getCountry.do').then(res=>{
        console.log(res.data);
        store.dispatch("setCountryList",res.data)
    })
    }
    return {countryList,change,create,form,sousuo,allC/* ,dele */}
  }

})

</script>
<style lang="scss" scoped>
    .fontBox{
        font-size: 20px;
        text-align: left;
        height: 60px;
        line-height: 60px;
    }
    .marBox{
      margin: 20px 0;
    }
    
</style>