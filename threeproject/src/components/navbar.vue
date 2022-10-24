<template>
  <div>
    <el-menu default-active="1" class="el-menu-vertical-demo" :router="true">
      <!-- 有子路由 -->
      <div v-for="item in isNavData" :key="item.id">
        <!-- 没有子路由 -->
        <el-menu-item
          :index="item.id"
          :route="item.path"
          v-if="!item.children.length"
        >
          <el-icon><icon-menu /></el-icon>
          <span>{{ item.title }}</span>
        </el-menu-item>

        <el-sub-menu v-else :index="item.id">
          <template #title>
            <el-icon><span :class="item.icon"></span></el-icon>
            <span>{{ item.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(el, index) in item.children"
              :route="el.path"
              :key="item.id + (index + 1)"
              :index="el.id"
              >{{ el.title }}</el-menu-item
            >
          </el-menu-item-group>
        </el-sub-menu>
      </div>
    </el-menu>
  </div>
</template>

<script setup >
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import navData from "@/config/navbar";
import { computed, onMounted } from "vue";
onMounted(() => {
  // console.log(navData);
  // 获取本地存储的addAcess
  const addAcess = localStorage.getItem("addAcess");
  // 获取本地的user
  const user = localStorage.getItem("user");

});

const handleOpen = (key, keyPath) => {
  // console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  // console.log(key, keyPath);
};
const changeContent = (path) => {
  console.log(path); //这里拿到的是页面中绑定的Index的值=》index绑定的是数据中的 menuUrl:"/role"
};

const isNavData = computed(() => {
  // 自动生成id
  for (let i = 0; i < navData.length; i++) {
    const el = navData[i];
    el.id = i + 1;
    el.id = String(el.id);
    if (el.children.length) {
      for (let j = 0; j < el.children.length; j++) {
        const element = el.children[j];
        element.id = el.id + "-" + (j + 1);
      }
    }
  }
  return navData;
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.el-menu {
  border-right: none !important;
}
</style>