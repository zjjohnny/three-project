<template>
    <div class="goods-box">
        <!-- 标题栏 -->
        <div class="header-text">仓库列表(共{{ goodsHoList.length }}条)</div>
        <!-- 商品数据表格 -->
        <div class="goods-data">
            <!-- {{goodsList}} -->
            <el-table :data="goodsHoList" border row-class-name="goods-tab" 
            :header-cell-style="{'text-align': 'center',background: '#F4F5F8',color: '#666666',height:'50px'}"
             :cell-style="{ 'text-align': 'center' }" style="width: 100%" ref="multipleTableRef">
                <el-table-column prop="goodsHoTitle" label="商品仓库" width="180" />
                <el-table-column prop="goodsFullMail" label="满金额包邮" width="160" />
                <el-table-column prop="goodsHoAdress" label="仓库地址" width="220" />
                <el-table-column prop="goodsHoNode" label="备注" width="220" />
                <el-table-column label="操作" >
                    <template #default="scope">
                        <el-button link type="primary" @click="dialogFormVisible = true,changeGoods(scope.row)" >编辑</el-button>
                        <el-button link type="primary" @click="dialogVisible = true,deleteGoodsHo(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 修改商品信息弹框 -->
        <el-dialog v-model="dialogFormVisible" title="编辑仓库" width="36%">
            <el-form :model="goodInfo">
            <el-form-item label="仓库名称" :label-width="formLabelWidth">
                <el-input v-model="goodInfo.goodsHoTitle"/>
            </el-form-item>
            <el-form-item label="设置包邮金额" :label-width="formLabelWidth">
                <el-input v-model="goodInfo.goodsFullMail" autocomplete="off"/>
            </el-form-item>
            <el-form-item label="仓库地址" :label-width="formLabelWidth">
                <el-input v-model="goodInfo.goodsHoAdress" />
            </el-form-item>
            <el-form-item label="备注" :label-width="formLabelWidth">
                <el-input v-model="goodInfo.goodsHoNode" />
            </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false,changeSubmit()"
                >确认</el-button
                >
            </span>
            </template>
        </el-dialog>
        <!-- 下架商品确认弹框 -->
        <el-dialog v-model="dialogVisible" width="20%">
            <span>确定删除此仓库吗？</span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false,deleteSubmit()" >确定</el-button>
            </span>
            </template>
        </el-dialog>
    </div>
  </template>
  
  <script>
  import { defineComponent,ref, onBeforeMount } from 'vue';
  import axios from 'axios';
  import {useStore} from 'vuex';
  import { computed } from '@vue/reactivity';
  export default defineComponent({  
    name: 'GoodsHouse',
    setup(){
        const dialogFormVisible = ref(false)
        const formLabelWidth = '120px'
        const dialogVisible = ref(false)
        let goodInfo = ref({goodsHoTitle:'',goodsFullMail:'',goodsHoAdress:'',goodsHoNode:''});
        // const {proxy} = getCurrentInstance()  //这样拿组件实例，相对于this
        const store = useStore();//调用useStore获取store
        
        let downID = 0//下架商品ID
        //vuex拿到全部商品数据
        let goodsHoList = computed(()=>{
            return store.getters.allGoodsHolist
        })
        // 修改仓库信息
        const changeGoods=(row)=>{
            goodInfo.value = row;
        }
        //确认修改
        const changeSubmit=()=>{
            for(let i=0;i<goodsHoList.value.length;i++){
                if((goodsHoList.value)[i].id == goodInfo.value.id){
                    goodsHoList.value.splice(i,1,goodInfo.value);
                }
            };
            localStorage.setItem('goodsHoList',JSON.stringify(goodsHoList.value))
        }
        //删除仓库
        const deleteGoodsHo=(row)=>{
            downID = row.id;
            console.log(downID);
        }
        //确认下架
        const deleteSubmit=()=>{
            for(let i=0;i<goodsHoList.value.length;i++){
                if((goodsHoList.value)[i].id == downID){
                    goodsHoList.value.splice(i,1)
                }
            }
            localStorage.setItem('goodsHoList',JSON.stringify(goodsHoList.value))
        }
        onBeforeMount(()=>{
            axios.get('http://localhost:8888/getGoodsHouse.do')
            .then((res)=>{
                // console.log(res.data);
                store.dispatch('setGoodsHoList',res.data);//拿到所有商品信息，存入vuex
            })
        })
        return{
            changeGoods,goodsHoList,formLabelWidth,goodInfo,changeSubmit,deleteGoodsHo,deleteSubmit,
            dialogFormVisible,dialogVisible
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
        //商品表格数据
        .goods-data{
            margin-top: 20px;
            font-size: 16px;
            .goods-tab{
                height: 30px;
                text-align: center;
            }
            
        }

    }

    
    
    </style>