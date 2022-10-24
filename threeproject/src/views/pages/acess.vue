<template>
  <div class="centwe">
    <div class="title">
      <h2>权限设置</h2>
    </div>
    <div class="content">
      <h5>请选择屏蔽用户的菜单</h5>
      <el-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
        >全部选择</el-checkbox
      >
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox v-for="city in cities" :key="city" :label="city">{{
          city
        }}</el-checkbox>
      </el-checkbox-group>
      <el-button type="info" class="btn" @click="suer">确定</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter(); //获取路由对象
const route = useRoute();
const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(["权限", "系统设置"]);
const id = route.query.id;
const cities = [
  "工作台",
  "会员管理",
  "商品",
  "交易",
  "营销",
  "财务",
  "权限",
  "系统设置",
];
const handleCheckAllChange = (val: boolean) => {
  // 全选框的ture false

  checkedCities.value = val ? cities : [];
  isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
  // 选中的数组
  console.log("%c ======>>>>>>>>", "color:orange;", value);
  const id = route.query.id;
  // store.getters.getUserlist[id].acess = checkedCities._rawValue;
  const checkedCount = value.length;
  checkAll.value = checkedCount === cities.length;
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
const suer = () => {
  // 存到vuex
  store.dispatch("steacess",{
    id:route.query.id,
    acess:checkedCities._rawValue
  });
  router.push({
    path:"/data",
  });
 
  // checkedCities = ref("");
};

onBeforeMount(() => {
  const id = route.query.id;
  // 设置权限传过来的对应用户id
  console.log("%c ======>>>>>>>>", "color:orange;", route.query.id);
});
</script>

<style lang="scss" scoped>
.title {
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6d8d8;
  margin-bottom: 40px;
  > h2 {
    margin-left: 30px;
  }
}

.centwe {
  background-color: #fff;
}

.content {
  margin-left: 40px;
}

.btn {
  margin: 40px 50px;
}
</style>