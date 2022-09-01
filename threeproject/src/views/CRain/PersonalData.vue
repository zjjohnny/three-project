<template>
  <div>
    <!-- 头部 -->
    <PersonalHeader :personal="true"></PersonalHeader>
    <!-- 修改框 -->
    <div class="modify-box">
      <span>亲爱的{{ userName }}，填写真实资料会比较利于后台的管理哦</span>
      <table>
        <tr class="tr-height">
          <td class="td-width">当前头像：</td>
          <td class="head-portrait">
            <img src="../../assets/images/accountPic.png" />
            <router-link to="/SecuritySetting">
              <div class="modify-btn">修改头像</div>
            </router-link>
          </td>
        </tr>
        <tr>
          <td>姓名：</td>
          <td>
            <input type="text" v-model="userName" class="input-box" />
          </td>
        </tr>
        <tr class="tr-height">
          <td>性别：</td>
          <td>
            <input
              type="radio"
              name="sex"
              id="nan"
              @click="getUserSex('nan')"
            /><label for="nan" class="td-right">男</label>
            <input
              type="radio"
              name="sex"
              id="nv"
              @click="getUserSex('nv')"
            /><label for="nv">女</label>
          </td>
        </tr>
        <tr>
          <td>居住地址：</td>
          <td>
            <input type="text" v-model="userAddress" class="input-box" />
          </td>
        </tr>
      </table>
      <div class="save-btn">
        <button @click="saveModify">保存</button>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import PersonalHeader from "../../components/CRain/PersonalHeader";
export default {
  name: "PersonalData",
  data() {
    return {
      userName: "CRain",
      userAddress: "成都市高新区天府二街",
    };
  },
  methods: {
    saveModify() {
      console.log(this.userName, this.userAddress);
    },
    getUserSex(val) {
      console.log(val);
    },
  },
  components: {
    PersonalHeader,
  },
};
</script>

<style scoped>
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