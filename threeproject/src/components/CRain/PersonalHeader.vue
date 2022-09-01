<template>
  <div class="header-box">
    <!-- 后台管理系统 -->
    <div class="project-name" @click="goToHomePage">后台管理系统</div>
    <!-- 当前页标题 -->
    <div class="personal-data" v-if="personal">个人资料</div>
    <div class="security-setting" v-if="security">安全设置</div>
    <div class="security-setting" v-if="modify">修改手机</div>
    <!-- 点击跳转的页面 -->
    <div class="jump-box">
      <img
        src="../../assets/images/accountPic.png"
        v-if="security || personal"
      />
      <router-link to="{path:'SecuritySetting'}">
        <span v-if="personal">安全设置</span>
      </router-link>

      <span v-if="security" @click="goToPersonalData">个人资料</span>
      <span v-if="modify" @click="goToLogin" class="login-btn">登陆</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonalHeader",
  data() {
    return {};
  },
  methods: {
    /* 跳转到首页 */
    goToHomePage() {
      console.log("goTohomePage");
    },
    /* 跳转到安全设置页 */
    flushCom() {
      console.log("goToLoginPage");
      this.$router.go(0)
    },
    /* 跳转到个人资料页 */
    goToPersonalData() {
      console.log("goToPersonalDataPage");
    },
    /* 跳转到登陆页 */
    goToLogin() {
      console.log("goToLoginPage");
    },
  },
  props: {
    security: {
      type: Boolean,
      default: false,
    },
    personal: {
      type: Boolean,
      default: false,
    },
    modify: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.header-box {
  padding: 10px 0;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
}
.header-box .project-name {
  font-size: 32px;
  font-weight: bold;
  color: #43a6f9;
  cursor: pointer;
  padding: 10px 10px;
  margin-right: 30px;
  border-right: 1px solid gray;
}
.header-box .personal-data,
.security-setting {
  font-size: 20px;
  color: #666666;
}
.header-box .jump-box {
  display: flex;
  align-items: center;
  margin-left: 100px;
  font-weight: bold;
  color: #43a6f9;
  cursor: pointer;
}
.jump-box img {
  height: 30px;
  width: 30px;
  margin-right: 5px;
}
.login-btn {
  font-size: 20px;
  color: #666666;
  font-weight: 400;
}
</style>