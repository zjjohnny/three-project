<template>
  <div class="contenbox">
    <Headers ></Headers>
    <Navbars class="nav"></Navbars>
    <div class="isContent">
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import Headers from "@/components/header.vue";
import Navbars from "@/components/navbar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "main",
  components: {
    Headers,
    Navbars,
  },
});
</script>

<style lang="scss" scoped>
.contenbox {
  width: 100%;
  height: 100vh;
  position: relative;
}
.nav {
  position: absolute;
  top: 74px;
  // left: 10px;
  /* 宽度设置 */
  width: 229px;
  // height: calc(100vh - 83px);
  height: calc(100vh - 74px);
  border-right: 1px solid red;
  // background-color:rgba(25, 158, 216, 1);
  overflow-y: auto;
}
.nav::-webkit-scrollbar {
  /* 纵向滚动条的宽 */
  width: 8px;
  /* 横向滚动条的高 */
  height: 8px;
  /* border: 2px solid red; */
  background-color: #fff;
}

.nav::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgb(148, 70, 70);
  background-clip: padding-box;
  border: 1px solid transparent;
}
.nav::-webkit-scrollbar-thumb:hover {
  background-clip: border-box;
}

.isContent {
  // display: none;
  min-width: 600px;
  position: absolute;
  top: 74px;
  left: 230px;
  overflow-y: auto;
  // width: calc(100vw - 250px);
  width: calc(100vw - 273px);

  height: calc(100vh - 94px);
  padding-top: 20px;
  padding-left: 20px;
  background-color: rgb(243, 248, 255);
}
</style>