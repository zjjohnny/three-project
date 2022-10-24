<template>
    <div>
        <header>
            <div class="fontBox">国家管理-新增</div>
            <hr>
        </header>    
        <div class="marBox">
            <el-row>
                <el-col :span="3" style="height:30px;line-height:30px;text-align: center;">id编号</el-col>
                <el-col :span="6"><el-input type="text" v-model="countryInf.id" @blur="monitor"></el-input></el-col>
            </el-row>
        </div>  
        <div class="marBox">
            <el-row>
                <el-col :span="3" style="height:30px;line-height:30px;text-align: center;">国家名称</el-col>
                <el-col :span="6"><el-input type="text" v-model="countryInf.countryname"></el-input></el-col>
            </el-row>
        </div>   
        <div class="marBox">
            <el-row>
                <el-col :span="3" style="height:30px;line-height:30px;text-align: center;">商品数量</el-col>
                <el-col :span="6"><el-input type="text"  v-model="countryInf.goodsNum"></el-input></el-col>
            </el-row>
        </div>
        <div class="marBox">
            <el-row><el-col :span="2" style="visibility: hidden;">1</el-col>
                <el-button type="primary" @click="increased()" >确认添加</el-button>
            </el-row>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref,onBeforeMount,computed } from 'vue'
import { useStore } from 'vuex'
import  service  from '../../request/papi'
import { useRoute,useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
export default defineComponent({
    
    setup() {
        // const store=useStore();//调用useStore获取store
        const router= useRouter();
        // const route = useRoute();
        const countryInf = ref({});
        // onBeforeMount(() => {
        //     service.get("/getCountry1.do?id=" + route.query.id).then(res => {
        //         console.log(res.data);
        //         countryInf.value = res.data[0];
        //     });
        // });
        const increased = () => {
            console.log(countryInf.value);
            service.get("/increaseCountry.do",{
                params:{
                    id: countryInf.value.id,
                    countryname: countryInf.value.countryname,
                    goodsNum: countryInf.value.goodsNum,
                }
            }).then(res => {
                console.log(res.data);
                if (res.data == "新增成功") {
                    ElMessage({
                        message: "新建成功！",
                        type: "success",
                    });
                    router.push({path:"/countryManage"})
                }
            });           
        };
        const monitor = ()=>{
            console.log(111);
            service.get("/partChange.do",{
                params:{
                    id: countryInf.value.id,
                }
            }).then(res => {
                console.log(res.data);
                if (res.data == "编号已存在") {
                    ElMessage({
                        message: "编号已存在",
                        type: "warning",
                    });
                }else if(res.data=="编号可以使用"){
                    ElMessage({
                        message: "编号可以使用",
                        type: "success",
                    });
                }
                else{
                    console.log(res.data);
                }
            });           
        };
        return { countryInf,increased,monitor };
    },
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