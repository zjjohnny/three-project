<template>
  <div>
    <PersonalHeader :security="true"></PersonalHeader>

    <div class="content-container">
      <span>您的基础信息</span>
      <table>
        <tr>
          <td class="first-column">会员名：</td>
          <td class="second-column">{{ userInfo.userName }}</td>
        </tr>
        <tr>
          <td>登录邮箱：</td>
          <td>{{ userInfo.userEmail }}</td>
        </tr>
        <tr>
          <td>已绑定手机：</td>
          <td>{{ userInfo.userPhone }}</td>
          <td>
            <span class="modify-btn" @click="modifyPhone">修改手机</span>
          </td>
        </tr>
      </table>
      <span class="mar-top">安全设置</span>
      <table>
        <tr>
          <td class="first-column-2">安全等级：</td>
          <td colspan="2">
            <el-progress
              :percentage="percentage"
              status="success"
            ></el-progress>
          </td>
        </tr>
        <tr>
          <td>
            <!-- <img src="" /> -->
            <div class="success-box">
              <i class="el-icon-check"></i>
              <span class="fontsize-set">已设置</span>
            </div>
          </td>
          <td class="first-column-2">登陆密码</td>
          <td class="font-size-color">
            安全性高的密码可以使账号更安全，建议您定期更换密码
          </td>
          <td>
            <span class="modify-btn" @click="modifyPassowrd">修改密码</span>
          </td>
        </tr>
        <tr>
          <td>
            <!-- <img src="" /> -->
            <div class="success-box">
              <i class="el-icon-check"></i>
              <span class="fontsize-set">已绑定</span>
            </div>
          </td>
          <td>绑定手机</td>
          <td class="font-size-color">
            绑定手机之后，您即可使用验证码进行登陆和方便找回密码
          </td>
          <td>
            <span class="modify-btn" @click="modifyPhone">修改手机</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";
import { mapState } from "vuex";
export default {
  name: "SecuritySetting",
  data() {
    return {
      name: "CRain",
      percentage: 100,
    };
  },
  methods: {
    /* 修改手机号 */
    modifyPhone() {
      this.$router.push("/ModifyPhone");
    },
    /* 修改密码 */
    modifyPassowrd() {
      this.$router.push("/ModifyPassword");
    },
  },
  computed: {
    ...mapState("m_user", ["userInfo"]),
  },
  components: {
    PersonalHeader,
  },
};
</script>

<style scoped>
.content-container {
  padding: 30px 50px;
  border: 1px solid #efefef;
  color: #333333;
  width: 800px;
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.content-container span {
  font-size: 18px;
}
.content-container table {
  margin-left: 70px;
}
.content-container table tr {
  line-height: 50px;
}
.content-container table .first-column {
  width: 140px;
}
.content-container table .second-column {
  width: 200px;
}
.modify-btn {
  color: #49b5f2;
  font-weight: bold;
  cursor: pointer;
}
.success-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.success-box i {
  color: #abda36;
}
.first-column-2 {
  width: 120px;
}
.success-box .fontsize-set {
  font-size: 16px;
}
.font-size-color {
  font-size: 14px;
  color: gray;
  width: 400px;
}
.mar-top {
  display: inline-block;
  margin-top: 30px;
}

/* 修改进度条element-ui样式 */
</style>