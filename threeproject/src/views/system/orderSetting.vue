<template>
    <div>
        <el-container>
            <el-header>
                <div class="fontBox">订单设置</div>
                <hr>
            </el-header>
            <el-main>
                <el-row class="marBox">
                    <el-col :span="4">订单自动取消时间</el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.cancelTime"/></el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="2" style="text-align:left">小时</el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="4">一般贸易自动确认收货时间</el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.confirmTime" /></el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="2" style="text-align:left">天</el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="4">延长收货时间</el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.extendTime" /></el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="2" style="text-align:left">天</el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="4">保税备货自动确认收货时间</el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.confirmTime1" /></el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="2" style="text-align:left">天</el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="4">保税备货单笔订单金额</el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.orderAmount" /></el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="4">设置退货地址</el-col>
                    <el-col :span="1" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.myname" placeholder="姓名"/></el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="5" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.tel" placeholder="联系方式"/></el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="4" style="visibility: hidden;">1</el-col>
                    <el-col :span="5">
                            <el-select v-model="form.province" placeholder="省">
                                <el-option label="四川" value="四川" />
                                <el-option label="湖北" value="湖北" />
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <el-select v-model="form.city" placeholder="市">
                                <el-option label="成都" value="成都" />
                                <el-option label="武汉" value="武汉" />
                            </el-select>
                        </el-col>
                        <el-col :span="5">
                            <el-select v-model="form.area" placeholder="区">
                                <el-option label="双流" value="双流" />
                                <el-option label="成华" value="成华" />
                            </el-select>
                        </el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="5" style="visibility: hidden;">1</el-col>
                    <el-col :span="6"><el-input v-model="form.address" placeholder="详细地址"/></el-col>
                </el-row>
                <el-row class="marBox">
                    <el-col :span="5" style="visibility: hidden;">1</el-col>
                    <el-col :span="8"><el-input v-model="form.mydescribe" type="textarea" placeholder="备注信息" /></el-col>
                </el-row>
                <el-row><el-col :span="5" style="visibility: hidden;">1</el-col></el-row>
                <el-row class="marBox">
                    <el-col :span="5" style="visibility: hidden;">1</el-col>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-row>
                    
                
            </el-main>
        </el-container>
        
        

        
    </div>
</template>
<script>
import { proxyRefs,computed,reactive,onBeforeMount,defineComponent,ref  } from 'vue'
import  service  from '../../request/papi'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default defineComponent({
    setup(){
        const store=useStore();//调用useStore获取store
        // const orderList=computed(()=>{
        //     return store.getters.allOrder
        // })
        onBeforeMount(()=>{
            service.get('/getOrder.do',{params:{id:1}}).then(res=>{
                console.log(res.data);
                // store.dispatch("setOrderList",res.data);
                form.value = res.data[0];
            })  
            
        })
        const form = ref({})
    const   onSubmit = () => {
    // console.log(form.city);
    
    service.interceptors.request.use(config=>{
        console.log("进入请求拦截器");
        // console.log(config);
        return config;//放行请求
    },err=>{
        console.log("请求方向失败");
        console.log(err)
    });
    service({
        url: '/addOrder.do',
        method: 'get',
        params:{
            id:1,
            cancelTime:form.value.cancelTime,
            confirmTime:form.value.confirmTime,
            extendTime: form.value.extendTime,
            confirmTime1:form.value.confirmTime1,
            orderAmount:form.value.orderAmount,
            name:form.value.myname,
            tel:form.value.tel,
            province:form.value.province,
            city:form.value.city,
            area:form.value.area,
            address:form.value.address,
            describe:form.value.mydescribe,
        }
    }).then(res=>{
        console.log(res);
        if(res.status==200){
            ElMessage({
                 message: "保存成功！",
                type: "success",
            });
        }
    }).catch(err=>{
        console.log(err);
        
    })
};
    return { onSubmit,form }
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
        text-align: right;
        height: 30px;
        line-height: 30px;
    }
</style>