<template>
  <div>
    <div class="content-container">
      <!-- 头像框 -->
      <div class="header-box">
        点击上传头像
        <!-- <img src="" alt="" /> -->
      </div>
      <!-- 添加的数据 -->
      <div>
        <table>
          <tr>
            <td>用户名</td>
            <td><input type="text" v-model="userInfo.userName" /></td>
            <td>*手机号码</td>
            <td><input type="text" v-model="userInfo.userPhone" /></td>
          </tr>
          <tr>
            <td>*账户密码</td>
            <td><input type="text" v-model="userInfo.userPwd" /></td>
            <td>*会员等级</td>
            <td><input type="text" v-model="userInfo.grade" /></td>
          </tr>
          <tr>
            <td colspan="4" class="select-group">
              选择分组
              <el-radio-group
                v-model="userInfo.group"
                class="ml-4"
              >
                <el-radio label="一组" size="large">一组</el-radio>
                <el-radio label="二组" size="large">二组</el-radio>
                <el-radio label="三组" size="large">三组</el-radio>
              </el-radio-group>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- 其他数据 -->
    <div class="other-info">
      <div>
        <span>账户余额</span>&nbsp;&nbsp;&nbsp;
        <span>1000.00元</span>
      </div>
      <div>
        <span>我的推荐码</span>&nbsp;&nbsp;&nbsp;
        <span>{{ userInfo.userReCode }}</span>
      </div>
      <div>
        <span>上级推荐码</span>&nbsp;&nbsp;&nbsp;
        <span>{{ userInfo.superReCode }}</span>
      </div>
    </div>
    <p style="clear: both"></p>
    <!-- 按钮 -->
    <div class="btn-box">
      <button @click="updateUser">提交</button>
      <button @click="backPre">返回</button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, onBeforeMount, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "../../plugins/axiosInstance";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "updateUser",
  setup() {
    //获取路由对象
    const router = useRouter();
    //获取store对象
    const store = useStore();
    //引入route对象
    const route = useRoute();
    //用户信息
    const userInfo = reactive({
      userId:'',
      userHeaderImg: "user1.png",
      userName: "",
      userReCode: "",
      grade: "",
      userPwd: "",
      userPhone: "",
      group: "",
      superReCode: "",
      userStatus: true,
      LastLoginTime: "2019.01.01-10:00",
      registerTime: "2019.01.01-10:00",
    });
    //方法
    /* 提交按钮 */
    const updateUser = function () {
      store.dispatch('updateMemberUser',userInfo);
    };
    /* 获取用户数据 */
    const getUserInfo = function () {
      axios.get("/getAllUser.do?userId=" + route.query.userId)
        .then((res: any) => {
          userInfo.userId = res.data.userList[0].userId;
          userInfo.userName = res.data.userList[0].userName;
          userInfo.userPhone = res.data.userList[0].userPhone;
          userInfo.userPwd = res.data.userList[0].userPwd;
          userInfo.grade = res.data.userList[0].grade;
          userInfo.group = res.data.userList[0].group;
          userInfo.userReCode = res.data.userList[0].userReCode;
          userInfo.superReCode = res.data.userList[0].superReCode;
        });
    };
    /* 返回 */
    const backPre = function () {
      router.push("/client");
    };
    onBeforeMount(() => {
      getUserInfo();
    });
    return {
      userInfo,
      updateUser,
      backPre,
    };
  },
});
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #666666;
  padding: 20px 0 0 50px;
  border-bottom: 1px solid #ebebeb;
}
.content-container .header-box {
  /* width: 100px; */
  /* height: 100px; */
  color: #333333;
  line-height: 100px;
  border-radius: 50px;
  text-align: center;
  /* margin-right: 30px; */
  background-color: #f5f5f9;
}
.content-container tr {
  line-height: 40px;
}
.content-container table input {
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  /* margin: 0 50px 0 10px; */
  padding: 5px;
}
.content-container table tr .select-group input {
  /* margin: 0 0 0 16px; */
}
.btn-box {
  margin-top: 60px;
  padding-left: 180px;
}
.btn-box button {
  cursor: pointer;
  padding: 5px 20px;
  background-color: #f3f3f3;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  margin-right: 20px;
}
.other-info {
  font-size: 12px;
  color: #666666;
  margin-top: 20px;
  padding-left: 180px;
}
.other-info div {
  float: left;
  margin-right: 50px;
}
</style>