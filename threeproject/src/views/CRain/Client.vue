<template>
  <div class="content-container">
    <!-- 标题栏 -->
    <div class="header-text">用户列表(共{{ memberUserList.length }}条)</div>
    <!-- 操作栏 -->
    <div class="opera-box">
      <table>
        <tr>
          <td>
            用户名：<input
              v-model="searchList.userName"
              placeholder="请输入用户名"
            />
          </td>
          <td>
            手机号码：<input
              type="text"
              placeholder="请输入手机号码"
              v-model="searchList.userPhone"
            />
          </td>
          <td>
            邀请码：<input
              type="text"
              placeholder="请输入邀请码"
              v-model="searchList.invitationCode"
            />
          </td>
        </tr>
        <tr>
          <td>
            用户等级：
            <el-select
              v-model="searchList.userGrade"
              class="m-2"
              placeholder="全部"
            >
              <el-option
                v-for="item in gradeSelect"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </td>
          <td>
            用户分组：<el-select
              v-model="searchList.userGroup"
              class="m-2"
              placeholder="全部"
            >
              <el-option
                v-for="item in groupSelect"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </td>
          <td>
            <button @click="searchUser">搜索</button>
            <button @click="restSearch">重置</button>
          </td>
        </tr>
      </table>
    </div>
    <!-- 添加用户+总数据 -->
    <div class="add-count">
      <div class="add-box">
        <button @click="AddUser">添加用户</button>
      </div>
      <div class="user-count">共{{ memberUserList.length }}条数据</div>
    </div>
    <p style="clear: both"></p>
    <!-- 用户表格数据 -->
    <div class="user-data">
      <el-table :data="memberUserList" border style="width: 100%">
        <el-table-column
          label="头像"
          width="100"
          header-align="center"
          align="center"
        >
          <template #default="scope">
            <img
              :src="'http://localhost:8888/' + scope.row.userHeaderImg"
              style="width: 40px; height: 40px"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="userName"
          label="用户名"
          align:center
          width="100"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="userReCode"
          label="我的推荐码"
          width="100"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="grade"
          label="等级"
          width="100"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="userPhone"
          label="手机号"
          header-align="center"
          align="center"
          width="150"
        />
        <el-table-column
          prop="superReCode"
          label="上级推荐码"
          width="100"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="registerTime"
          label="注册时间"
          header-align="center"
          align="center"
        />
        <el-table-column
          prop="LastLoginTime"
          label="最后登录时间"
          header-align="center"
          align="center"
        />
        <el-table-column label="操作" header-align="center" align="center">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="updateUser(scope.row)"
              >编辑</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="open(scope.row)"
            >
              {{ scope.row.userStatus ? "禁用" : "启用" }}
            </el-button>
            <!-- 启用||禁用对话框 -->

            <el-button
              link
              type="primary"
              size="small"
              @click="getUserRebate(scope.row)"
              >查看返利记录</el-button
            >
            <!-- 返利记录弹出框 -->
            <el-dialog v-model="dialogTableVisible" title="返利记录">
              <el-table :data="gridData">
                <el-table-column
                  property="rePersonCode"
                  label="推荐人码"
                  header-align="center"
                  align="center"
                  width="100"
                />
                <el-table-column
                  property="referrerCode"
                  label="被推荐人码"
                  header-align="center"
                  align="center"
                  width="100"
                />
                <el-table-column
                  property="orderNumber"
                  label="订单号"
                  header-align="center"
                  align="center"
                />
                <el-table-column
                  property="orderAmount"
                  label="订单金额"
                  header-align="center"
                  align="center"
                  width="100"
                />
                <el-table-column
                  property="commissionAmount"
                  label="佣金金额"
                  header-align="center"
                  align="center"
                  width="100"
                />
                <el-table-column
                  property="orderTime"
                  label="下单时间"
                  header-align="center"
                  align="center"
                />
              </el-table>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, reactive, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage, ElMessageBox } from "element-plus";
import axios from "../../plugins/axiosInstance";
// import axios from "axios";
export default {
  name: "Client",
  setup() {
    //获取路由对象
    const router = useRouter();
    //获取store对象
    const store = useStore();
    //用户等级下拉框数据
    const gradeSelect = [
      {
        value: "全部",
        label: "全部",
      },
      {
        value: "一级",
        label: "一级",
      },
      {
        value: "二级",
        label: "二级",
      },
      {
        value: "三级",
        label: "三级",
      },
    ];
    //用户组别下拉框
    const groupSelect = [
      {
        value: "全部",
        label: "全部",
      },
      {
        value: "一组",
        label: "一组",
      },
      {
        value: "二组",
        label: "二组",
      },
      {
        value: "三组",
        label: "三组",
      },
    ];
    //搜索栏输入数据
    const searchList = reactive({
      userId: "",
      userName: "",
      userGrade: "",
      userGroup: "",
      userPhone: "",
      invitationCode: "",
    });
    //表格数据
    const userTableData = reactive([]);
    //是否显示禁用or启用对话框
    const centerDialogVisible = ref(false);
    //是否展示返利记录
    const dialogTableVisible = ref(false);
    const gridData = reactive([]);

    //方法
    /* 搜索用户 */
    const searchUser = function () {
      getAllUser(searchList);
    };
    /* 重置按钮 */
    const restSearch = function () {
      searchList.userName = "";
      searchList.userPhone = "";
      searchList.invitationCode = "";
      searchList.userGrade = "";
      searchList.userGroup = "";
      getAllUser(searchList);
    };
    /* 添加用户按钮 */
    const AddUser = function () {
      router.push("/adduser");
    };
    /* 编辑按钮 */
    const updateUser = function (row) {
      router.push({ path: "/updateuser", query: { userId: row.userId } });
    };
    /* 修改用户状态：启用||禁用 */
    const open = (row) => {
      ElMessageBox.confirm(
        `您确定${row.userStatus ? "禁用" : "启用"}该账户吗？`,
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          center: true,
        }
      )
        .then(() => {
          store.dispatch("updateMemberUserStatus", row.userId);
        })
        .catch(() => {});
    };
    /* 查看返利记录 */
    const getUserRebate = function (row) {
      gridData.length = 0;
      axios.get("/getAllUser.do?userId=" + row.userId).then((res) => {
        console.log(res.data.userList);
        for (let i = 0; i < res.data.userList[0].rebateLog.length; i++) {
          gridData.push(res.data.userList[0].rebateLog[i]);
        }
      });
      dialogTableVisible.value = true;
    };
    /* 获取用户列表 */
    const getAllUser = function (searchList) {
      userTableData.length = 0; //清空用户列表
      axios({
        method: "get",
        url: "getAllUser.do",
        params: {
          userId: searchList.userId,
          userName: searchList.userName,
          userPhone: searchList.userPhone,
          invitationCode: searchList.invitationCode,
          userGrade: searchList.userGrade,
          userGroup: searchList.userGroup,
        },
      }).then((res) => {
        console.log(res.data.userList);
        for (let i = 0; i < res.data.userList.length; i++) {
          const user = {
            userId: res.data.userList[i].userId,
            userHeaderImg: res.data.userList[i].userHeaderImg,
            userName: res.data.userList[i].userName,
            userReCode: res.data.userList[i].userReCode,
            grade: res.data.userList[i].grade,
            userPhone: res.data.userList[i].userPhone,
            superReCode: res.data.userList[i].superReCode,
            registerTime: res.data.userList[i].registerTime,
            LastLoginTime: res.data.userList[i].LastLoginTime,
            userStatus: res.data.userList[i].userStatus,
            group: res.data.userList[i].group,
            userPwd: res.data.userList[i].userPwd,
          };
          userTableData.push(user);
        }
        // console.log(userTableData);
        store.dispatch("savaMemberUserList", userTableData);
      });
    };

    onBeforeMount(function () {
      //初始化页面
      // getAllUser(searchList); //第一次执行拿到数据后注释掉，否则新增和修改不成功。但是搜索过后数据重置为原来的
    });
    //从store中获取用户数据
    const memberUserList = computed(() => store.state.memberUserList);

    return {
      searchList, //搜索栏input框
      gradeSelect, //等级下拉框
      memberUserList,
      centerDialogVisible,
      dialogTableVisible,
      gridData,
      groupSelect,
      searchUser,
      restSearch,
      AddUser,
      updateUser,
      open,
      getUserRebate,
    };
  },
};
</script>

<style scoped>
/* 禁用||启用 */
.dialog-footer button:first-child {
  margin-right: 10px;
}
/* 返利记录 */
.dialog-footer button:first-child {
  margin-right: 10px;
}
/* 其他 */
.content-container {
  background-color: white;
  padding: 20px;
}
.header-text {
  text-align: start;
  padding-bottom: 10px;
  color: #333333;
  border-bottom: 1px solid #efefef;
}
.opera-box {
  background-color: #f7f7f7;
  margin-top: 10px;
  padding: 20px;
  color: #666666;
  font-size: 14px;
}
.opera-box table tr {
  height: 60px;
}
.opera-box table td {
  width: 330px;
}
.opera-box table input {
  border: 1px solid #d9d9d9;
  padding: 8px;
  border-radius: 3px;
  width: 200px;
}
.opera-box table button {
  background-color: #108ee9;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
.add-count {
  margin: 10px 0;
}
.add-box {
  float: left;
}
.add-box button {
  background-color: #108ee9;
  color: white;
  padding: 5px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.user-count {
  float: right;
  font-size: 14px;
  color: #666666;
}
.user-data {
  margin-top: 30px;
}
</style>