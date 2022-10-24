<template>
    <div class="goods-box">
        <h3>修改商品</h3>
        <div class="select-goods">
            <div class="select-input">
                商品编码：<el-input v-model="goodInfo.goodsNum" disabled/>
            </div>
            <div class="select-input">
                商品标题：<el-input v-model="goodInfo.goodsTitle" />
            </div>
            <div class="select-input">
                商品库存：<el-input v-model="goodInfo.goodsCount" />
            </div>
            <div class="select-input">
                商品价格：<el-input v-model="goodInfo.goodsPrice" />
            </div>
            <div class="select-input">
                商品类别：
                <el-select v-model="goodsData.goods_type" :placeholder="goodInfo.goodsType" >
                    <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
                <!-- 商品类别：<el-input v-model="selectData.goods_num" placeholder="请输入商品编码" /> -->
            </div>
            <el-button type="primary" @click="changed">确认修改</el-button>
        </div>
       
    </div>
  </template>
  
  <script>
  import { defineComponent, onBeforeMount,ref } from 'vue';
  import { useRoute } from 'vue-router';
  import {useStore} from 'vuex'
  import axios from 'axios';
  export default defineComponent({  
    name: 'ChangeGoods',
    setup(){
        const store = useStore()
        const route = useRoute();
        //存储当前拿到的商品详细信息
        const goodInfo = ref({goodsNum:'',goodsTitle:'',goodsCount:'',goodsPrice:'',goodsType:''});
        const goodsData = {
            goods_type:''
        }
        //商品类别
        const typeOptions = [
            {
                value: '服饰',
                label: '服饰',
            },
            {
                value: '手机',
                label: '手机',
            },
            {
                value: '家居',
                label: '家居',
            }
        ];
        //修改商品信息
        const changed=()=>{
            console.log("修改",goodInfo.value);
            // store.commit("changeGoods",goodInfo.value)
            // store.dispatch('changeGoods',goodInfo.value);
            let localData = JSON.parse(localStorage.getItem('goodslist'))
            for(let i=0;i<localData.length;i++){
                if(localData[i].goodsId == goodInfo.value.goodsId){
                    localData.splice(i,1,goodInfo.value);
                    localStorage.setItem('goodslist',JSON.stringify(localData))
                    alert("修改成功")
                }
            };
        }
        onBeforeMount(()=>{
            let localData = JSON.parse(localStorage.getItem('goodslist'))
            let filterData = localData.filter((item)=>{
                return item.goodsId == parseInt(route.query.id)
            })
            goodInfo.value = filterData[0]
            console.log(goodInfo.value);
            // axios.get("http://localhost:8888/getGoodInfo.do?id="+route.query.id)
            // .then((res)=>{
            //     console.log(res.data[0]);
            //     // goodInfo.value = res.data[0]
            // })
            
        })
        return{
            typeOptions,goodsData,
            goodInfo,changed
        }
    }
  });
  </script>

<style lang="scss" scoped>
    .goods-box{
        padding-left: 20px;
        //商品搜索box
        .select-goods{
            color: gray;
            font-size: 14px;
            width: 100%;
            padding: 10px 0;
            display: flex;
            flex-wrap: wrap;
            .el-input,.el-select{
                width: 70%;
                margin-bottom: 10px;
            }
            .select-input{
                width: 25%;
                margin-right: 10px;
            }
        
        }
    }
    
</style>