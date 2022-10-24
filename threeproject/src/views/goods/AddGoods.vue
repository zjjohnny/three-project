<template>
    <div class="goods-box">
        <div class="header-text">添加商品</div>
        <div class="select-goods">
            <div class="select-input">
                <span class="red-improt">*</span>商品编码：<el-input v-model="goodsData.goodsNum"/>
            </div>
            <div class="select-input">
                <span class="red-improt">*</span>
                商品标题：<el-input v-model="goodsData.goodsTitle" />
            </div>
            <div class="select-input">
                <span class="red-improt">*</span>
                商品库存：<el-input v-model="goodsData.goodsCount" />
            </div>
            <div class="select-input">
                <span class="red-improt">*</span>
                商品类别：
                <el-select v-model="goodsData.goodsType" placeholder="全部" >
                    <el-option v-for="item in typeOptions" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
            </div>
            <div class="select-input">
                <span class="red-improt">*</span>
                设置邮费：<el-input v-model="goodsData.goodsPostage" />
            </div>
            <div class="select-input">
                包邮金额：<el-input v-model="goodsData.goodsPostagePrice" />
            </div><br/>
            <div class="select-input">
                <span class="red-improt">*</span>
                商品价格：<el-input v-model="goodsData.goodsPrice" />
            </div>
            <div class="select-input">
                成本价格：<el-input v-model="goodsData.goodsPriceCost" />
            </div>
            <div class="select-input">
                市场价格：<el-input v-model="goodsData.goodsPriceMarket" />
            </div>
            <div class="upload-img">
                <span class="red-improt">*</span>
                <span>商品图片：</span>
                <el-upload action="#"  list-type="picture-card" :auto-upload="false">
                    <el-icon>+</el-icon>
                    <template #file="{ file }">
                    <div>
                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                        <span class="el-upload-list__item-actions">
                        <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                        >
                            <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                        >
                            <el-icon>X</el-icon>
                        </span>
                        </span>
                    </div>
                    </template>
                </el-upload>

                <el-dialog v-model="dialogVisible">
                    <img w-full :src="dialogImageUrl" alt="Preview Image" />
                </el-dialog>
            </div>
            <br/>
            
        </div>
        <el-button type="primary" class="add-btn" @click="AddGood">确认添加</el-button>
       
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onBeforeMount,ref } from 'vue';
  import { useRoute } from 'vue-router';
  import {useStore} from 'vuex';
  import axios from 'axios';
  import type { UploadFile } from 'element-plus'
  export default defineComponent({  
    name: 'AddGoods',
    setup(){
        const dialogImageUrl = ref('')
        const dialogVisible = ref(false)
        const disabled = ref(false)
        const handleRemove = (file: UploadFile) => {
            console.log(file)
        }
        const handlePictureCardPreview = (file: UploadFile) => {
            dialogImageUrl.value = file.url!
            dialogVisible.value = true;
        }
        const store = useStore()
        const route = useRoute();
        // const goodInfo = ref({});//存储当前拿到的商品详细信息
        const goodsData = ref({
            goodsId:0,
            goodsNum:'',
            goodsTitle:'',
            goodsCount:'',
            goodsPrice:'',
            goodsType:'',
            goodsSales: 0,
            goodsPostage:'',
            goodsPriceMarket:'',
            goodsPriceCost:'',
            goodsPostagePrice:''
        })
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
        //添加商品
        const AddGood = ()=>{
            if(goodsData.value.goodsNum == ''){
                alert('请输入商品编码');
                return
            }
            if(goodsData.value.goodsTitle == ''){
                alert('请输入商品标题')
                return
            }
            if(goodsData.value.goodsCount == ''){
                alert('请输入商品库存')
                return
            }
            if(goodsData.value.goodsPrice == ''){
                alert('请输入商品价格')
                return
            }
            if(goodsData.value.goodsType == ''){
                alert('请选择商品类型')
                return
            }
            if(goodsData.value.goodsPostage == ''){
                alert('请设置商品邮费')
                return
            }
            if(goodsData.value.goodsNum != '' && goodsData.value.goodsTitle != '' && goodsData.value.goodsCount != '' 
            && goodsData.value.goodsPrice != '' && goodsData.value.goodsType != '' && goodsData.value.goodsPostage != ''){
                console.log(goodsData.value);
                store.dispatch('addGoods',goodsData.value);
                // let newData = JSON.parse(localStorage.getItem('goodslist'))
                // goodsData.value.goodsId = newData.length+1;
                // console.log("add",goodsData.value);
                
                // // axios.get("http://localhost:8888/getGoodInfo.do?id="+route.query.id)
                // axios({
                //     mehtod:'post',
                //     url:'http://localhost:8888/getGoodsList.do',
                //     params:goodsData.value
                // }).then((res)=>{
                    
                // })
                
                // newData.push(goodsData.value);
                // console.log(newData);
                // localStorage.setItem('goodslist',JSON.stringify(newData));
                // alert("添加商品成功")
            }
            
        }
        onBeforeMount(()=>{
            
        })
        return{
            typeOptions,goodsData,
            AddGood,
            handlePictureCardPreview,handleRemove,disabled,dialogVisible,dialogImageUrl,
            
        }
    }
  });
  </script>

<style lang="scss" scoped>
    .goods-box{
        padding: 0 10px;
        .header-text {
            padding-bottom: 10px;
            color: #333333;
            border-bottom: 1px solid #efefef;
        }
        //商品搜索box
        .select-goods{
            color: gray;
            font-size: 14px;
            width: 88%;
            padding: 10px 0;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            .el-input,.el-select{
                width: 70%;
                margin-bottom: 10px;
            }
            .select-input{
                display: flex;
                width: 30%;
                margin: 5px 10px;
            }
        
        }
    }
    .upload-img{
        display: flex;
        margin: 5px 10px;
    }
    .red-improt{
        color: red;
        font-size: 16px;
        font-weight: 600;
        line-height: 25px;
        padding: 2px;
    }
    .add-btn{
        float: right;
        margin-right: 100px;
    }
</style>