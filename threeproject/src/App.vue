<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/> -->

    <!-- 登录组件 -->
    <!-- <Login></Login> -->

    <!-- 个人资料组件 -->
    <PersonalData></PersonalData>

    <!-- 个人设置组件 -->
    <!-- <SecuritySetting></SecuritySetting> -->

    <!-- 修改手机组件 -->
    <!-- <ModifyPhone></ModifyPhone> -->
  </div>
</template>

<script>
import Login from "./views/CRain/Login";
import PersonalData from "./views/CRain/PersonalData";
import SecuritySetting from "./views/CRain/SecuritySetting";
import ModifyPhone from "./views/CRain/ModifyPhone";

export default {
  nmae: "App",
  components: {
    Login,
    PersonalData,
    SecuritySetting,
    ModifyPhone,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>