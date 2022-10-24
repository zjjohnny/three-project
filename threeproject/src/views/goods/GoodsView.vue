<template>
    <div class="goods-box">
        <!-- 标题栏 -->
        <div class="header-text">商品列表(共{{ goodsList.length }}条)</div>
        <div class="select-goods">
            <div class="select-input">
                商品标题：<el-input v-model="selectData.goodsTitle" placeholder="请输入商品标题"/>
            </div>
            <div class="select-input">
                商品编码：<el-input v-model="selectData.goodsNum" placeholder="请输入商品编码" />
            </div>
            <div class="select-input">
                商品类别：
                <el-select v-model="selectData.goodsType" placeholder="全部" >
                    <el-option
                    v-for="item in typeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
                <!-- 商品类别：<el-input v-model="selectData.goods_num" placeholder="请输入商品编码" /> -->
            </div>
            <el-button type="primary" @click="searchGoods">搜索</el-button>
            <el-button type="primary" @click="resetSearch">重置</el-button>
        </div>
        <!-- 商品排序 -->
        <div class="sort-goods">
            <div class="select-input">
                排序方式：
                <el-select v-model="selectData.goodsType" placeholder="全部" >
                    <el-option
                    v-for="item in sortOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    />
                </el-select>
            </div>
            <div class="add-goods">
                <el-button type="primary" @click="addGoods">添加商品</el-button>
                <el-button type="primary" @click="">批量上架</el-button>
                <el-button type="primary" @click="">批量下架</el-button>
            </div>
        </div>
        <!-- 商品操作 -->
        
        <!-- 商品数据表格 -->
        <div class="goods-data">
            <el-table :data="goodsList" border row-class-name="goods-tab" @selection-change="handleSelectionChange"
            :header-cell-style="{'text-align': 'center',background: '#F4F5F8',color: '#666666',height:'50px'}"
             :cell-style="{ 'text-align': 'center' }" style="width: 100%" ref="multipleTableRef">
             
                <el-table-column type="selection" width="55" >
                    <!-- <template #default="scope">          
                        <el-checkbox v-model="scope.row.checked" @change="checkedGoods(scope.row)"/>          
                    </template>   -->
                </el-table-column>
                <el-table-column prop="goodsNum" label="商品编号" width="90" />
                <el-table-column prop="" label="商品图片" width="150" >
                    <template  #default="scope">
                        <img :src="'http://localhost:8888/'+scope.row.goodsImg" min-width="70" height="70"/>
                    </template>
                </el-table-column>
                <el-table-column prop="goodsTitle" label="商品标题" width="130" />
                <el-table-column prop="goodsCount" label="商品库存" width="100" />
                <el-table-column prop="goodsPrice" label="销售价格" width="120" />
                <el-table-column prop="goodsType" label="分类" width="90" />
                <el-table-column prop="goodsSales" label="销量" width="90"/>
                <el-table-column prop="goodsShelves" label="是否上架" width="100"/>
                <el-table-column label="操作" >
                    <template #default="scope">
                        <el-button link type="primary" @click="dialogFormVisible = true,changeGoods(scope.row)" >编辑</el-button>
                        <el-button link type="primary" @click="dialogVisible = true;deleteGoods(scope.row)">删除</el-button>
                        <el-button link type="primary" @click="downGoods(scope.row)">下架</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 修改商品信息弹框 -->
        <el-dialog v-model="dialogFormVisible" title="修改商品信息" width="40%">
            <el-form :model="goodInfo">
                <el-form-item label="商品编号" :label-width="formLabelWidth">
                    <el-input v-model="goodInfo.goodsNum" disabled/>
                </el-form-item>
                <el-form-item label="商品标题" :label-width="formLabelWidth">
                    <el-input v-model="goodInfo.goodsTitle" autocomplete="off"/>
                </el-form-item>
                <el-form-item label="商品库存" :label-width="formLabelWidth">
                    <el-input v-model="goodInfo.goodsCount" />
                </el-form-item>
                <el-form-item label="商品价格" :label-width="formLabelWidth">
                    <el-input v-model="goodInfo.goodsPrice" />
                </el-form-item>
                <el-form-item label="商品类别" :label-width="formLabelWidth">
                    <el-select v-model="goodInfo.goodsType">
                    <el-option label="服饰" value="服饰" />
                    <el-option label="手机" value="手机" />
                    <el-option label="家居" value="家居" />
                    </el-select>
                </el-form-item>
                <el-form-item label="是否上架" :label-width="formLabelWidth">
                    <el-select v-model="goodInfo.goodsShelves" placeholder="请选择商品类别">
                    <el-option label="是" value="是" />
                    <el-option label="否" value="否" />
                    </el-select>
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
            <span>确定删除此商品吗？</span>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogVisible = false,deletSubmit()" >确定</el-button>
            </span>
            </template>
        </el-dialog>
    </div>
  </template>
  
  <script>
  import { defineComponent,reactive,ref, onBeforeMount } from 'vue';
  import axios from 'axios';
  import {useStore} from 'vuex';
  import {useRouter} from 'vue-router'
  import { computed } from '@vue/reactivity';
  export default defineComponent({  
    name: 'GoodsView',
    setup(){
        const dialogFormVisible = ref(false)
        const formLabelWidth = '120px'
        const dialogVisible = ref(false)
        let goodInfo = ref({goodsNum:'',goodsTitle:'',goodsCount:'',goodsPrice:'',goodsType:'',goodsShelves:'',checked:false});
        // const {proxy} = getCurrentInstance()  //这样拿组件实例，相对于this
        const store = useStore();//调用useStore获取store
        const router = useRouter();//获取路由对象
        // const tableData = [];
        // 搜索字段、关键字
        const selectData = reactive({
            goodsTitle:'',
            goodsNum:'',
            goodsType:''
        })
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
        const sortOptions = [
            {
                value: '销量',
                label: '销量',
            },
            {
                value: '单价',
                label: '单价',
            }
        ];
        let downID = 0//下架商品ID
        let delID=0
        //vuex拿到全部商品数据
        let goodsList = computed(()=>{
            return store.getters.allGoodsList
        })
        // 修改商品信息
        const changeGoods=(row)=>{
            goodInfo.value = row;
        }
        //确认修改
        const changeSubmit=()=>{
            store.dispatch('changeGoods',goodInfo.value);
        }
        // 添加商品
        const addGoods=()=>{
            router.push('/AddGoods')
        }
        const getLocalData=()=>{
            return JSON.parse(localStorage.getItem('goodslist'))
        }
        //搜索商品
        const searchGoods=()=>{
            console.log(selectData);
            if(selectData.goodsTitle=='' && selectData.goodsNum=='' && selectData.goodsType==''){
                alert("请输入搜索内容")
            }
            store.dispatch('searchGoods',selectData);
            console.log(goodsList);
        }
        //重置搜索框
        const resetSearch=()=>{
            selectData.goodsTitle = ''
            selectData.goodsNum = ''
            selectData.goodsType = '';
            let data = JSON.parse(localStorage.getItem('goodslist'))
            store.dispatch('resetSearch',data);
        }
        //下架商品
        const downGoods=(row)=>{
            if(row.goodsShelves == '否'){
                alert("该商品暂未上架");
            }else{
                downID = row.goodsId;
                store.dispatch('downGoods',downID);
            }
        }
        //删除商品
        const deleteGoods=(row)=>{
            delID = row.goodsId
        }
        //确认删除
        const deletSubmit=()=>{
            store.dispatch('deleteGoods',delID);
        }
        //全选
        const handleSelectionChange = () => {
            console.log("ww");
        }
        const checkedGoods=(row)=>{
            console.log(row);
        }
        onBeforeMount(()=>{
            axios.get('http://localhost:8888/getGoodsList.do')
            .then((res)=>{
                // console.log(res.data);

                store.dispatch('setGoodsList',res.data);//拿到所有商品信息，存入vuex
                
            })
        })
        return{
            selectData,typeOptions,sortOptions,
            goodsList,changeGoods,addGoods,searchGoods,resetSearch,changeSubmit,downGoods,
            dialogFormVisible,formLabelWidth,dialogVisible,goodInfo,handleSelectionChange,checkedGoods,
            deleteGoods,delID,deletSubmit
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
        .select-goods,.sort-goods{
            color: gray;
            font-size: 14px;
            width: 100%;
            padding-top: 30px;
            display: flex;
            // justify-content: space-around;
            .el-input,.el-select{
                width: 70%;
            }
            .select-input{
                width: 25%;
                margin-right: 10px;
            }
        }
        .sort-goods{
            margin-bottom: 20px;
            padding-top: 15px;

        }

        //商品表格数据
        .goods-data{
            font-size: 16px;
            .goods-tab{
                height: 30px;
                text-align: center;
            }
            
        }

    }

    .el-button--text {
        margin-right: 15px;
    }
    .el-select {
        width: 300px;
    }
    .el-input {
        width: 300px;
    }
    .dialog-footer button:first-child {
        margin-right: 10px;
    }
    
    </style>