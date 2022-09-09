<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view></router-view>

    <!-- 登录组件 -->
    <!-- <Login></Login> -->

    <!-- 个人资料 -->
    <!-- <PersonalData></PersonalData> -->

    <!-- 安全设置 -->
    <!-- <SecuritySetting></SecuritySetting> -->

    <!-- 修改手机 -->
    <!-- <ModifyPhone></ModifyPhone> -->

    <!-- 修改密码 -->
    <!-- <ModifyPassword></ModifyPassword> -->

    <!-- 忘记密码 -->
    <!-- <RetrievePassword></RetrievePassword> -->

    <!-- 重置密码 -->
    <!-- <RestPassword></RestPassword> -->

    <!-- 设置新密码 -->
    <!-- <NewPassword></NewPassword> -->

    <!-- 操作日志 -->
    <OperaLog></OperaLog>

    <!-- App反馈 -->
    <!-- <AppFeedback></AppFeedback> -->

    <!-- 测试页面 -->
    <!-- <Test></Test> -->
  </div>
</template>

<script>
import Login from "./views/CRain/Login";
import PersonalData from "./views/CRain/PersonalData";
import SecuritySetting from "./views/CRain/SecuritySetting";
import ModifyPhone from "./views/CRain/ModifyPhone";
import ModifyPassword from "./views/CRain/ModifyPassword";
import RetrievePassword from "./views/CRain/RetrievePassword";
import RestPassword from "./views/CRain/RestPassword";
import NewPassword from "./views/CRain/NewPassword";
import OperaLog from "./views/CRain/OperaLog";
import AppFeedback from "./views/CRain/AppFeedback";
/* 测试页面 */
import Test from "./views/CRain/Test";

export default {
  nmae: "App",
  components: {
    Login,
    PersonalData,
    SecuritySetting,
    ModifyPhone,
    ModifyPassword,
    Test,
    RetrievePassword,
    RestPassword,
    NewPassword,
    OperaLog,
    AppFeedback,
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