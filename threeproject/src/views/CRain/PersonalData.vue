<template>
  <div>
    <!-- 头部 -->
    <PersonalHeader :personal="true"></PersonalHeader>
    <div v-if="showSuccess" class="showSuccess">修改成功</div>
    <!-- 修改框 -->
    <div class="modify-box">
      <span
        >亲爱的&nbsp;{{
          userInfo.userName
        }}&nbsp;，填写真实资料会比较利于后台的管理哦</span
      >
      <table>
        <tr class="tr-height">
          <td class="td-width">当前头像：</td>
          <td class="head-portrait">
            <img :src="`http://42.192.152.16:8080/ssmTwo/image/1.png`" />
            <div class="modify-btn">修改头像</div>
          </td>
        </tr>
        <tr>
          <td>姓名：</td>
          <td>
            <input
              type="text"
              v-model="userName"
              class="input-box"
              :placeholder="userInfo.userName"
            />
          </td>
        </tr>
        <tr class="tr-height">
          <td>性别：</td>
          <td>
            <input
              type="radio"
              name="sex"
              id="nan"
              :checked="userSexM"
              @click="getUserSex(1)"
            /><label for="nan" class="td-right">男</label>
            <input
              type="radio"
              name="sex"
              id="nv"
              :checked="userSexW"
              @click="getUserSex(0)"
            /><label for="nv">女</label>
          </td>
        </tr>
        <tr>
          <td>居住地址：</td>
          <td>
            <input
              type="text"
              v-model="userAddress"
              class="input-box"
              :placeholder="userInfo.userLocation"
            />
          </td>
        </tr>
      </table>
      <div class="save-btn">
        <button @click="saveModify">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";
import { mapState } from "vuex";
export default {
  name: "PersonalData",
  data() {
    return {
      userName: "",
      userAddress: "",
      impSrc: "",
      userSex: "",
      showSuccess: false,
    };
  },
  methods: {
    /* 点击保存按钮 */
    async saveModify() {
      const res = await this.$axios({
        method: "post",
        url: "http://42.192.152.16:8080/ssmTwo/updateUser",
        params: {
          userName:
            this.userName == "" ? this.userInfo.userName : this.userName,
          userSex: this.userSex == "" ? this.userInfo.userSex : this.userSex,
          userLocation:
            this.userAddress == ""
              ? this.userInfo.userLocation
              : this.userAddress,
          userId: this.userInfo.userId,
        },
      });
      console.log(res);
      if (res.data.code !== 0) return alert("修改失败");
      /* 修改成功，跳转到重置密码页面 */
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
        this.$router.push("/RestPassword");
      }, 1000);
    },
    /* 修改用户性别 */
    getUserSex(val) {
      this.userSex = val;
    },
  },
  computed: {
    ...mapState("m_user", ["userInfo"]),
    userSexM() {
      const userSex = this.$store.state.m_user.userInfo.userSex;
      if (userSex == 1) return true;
      return false;
    },
    userSexW() {
      const userSex = this.$store.state.m_user.userInfo.userSex;
      if (userSex == 0) return true;
      return false;
    },
  },
  components: {
    PersonalHeader,
  },
};
</script>

<style scoped>
.showSuccess {
  padding: 10px 60px;
  color: white;
  font-weight: bold;
  background-color: black;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
}
.modify-box {
  width: 550px;
  padding: 20px 70px;
  border: 1px solid #efefef;
  color: #333333;
  position: relative;
  left: 50%;
  margin-top: 10px;
  transform: translateX(-50%);
}
.head-portrait {
  display: flex;
  align-items: center;
}
.head-portrait img {
  margin: 0 20px 0 0;
  width: 50px;
  height: 50px;
}
.head-portrait .modify-btn {
  color: #49b5f3;
  font-weight: bold;
  cursor: pointer;
}
.input-box {
  padding: 5px 10px;
  border-radius: 10px;
  border: 1px solid #efefef;
  line-height: 30px;
  width: 388px;
}
.tr-height {
  height: 110px;
  line-height: 110px;
}
.save-btn button {
  width: 100%;
  background-color: #43a6f9;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  line-height: 40px;
  font-size: 18px;
  margin-top: 80px;
  cursor: pointer;
}
.td-right {
  margin-right: 80px;
}
.td-width {
  width: 124px;
}
</style>