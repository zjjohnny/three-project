<template>
  <div class="centwe">
    <div class="title">
      <h2>角色列表</h2>
    </div>
    <div class="content">
      <div class="contentbtn">
        <el-button type="primary" @click="dialogVisible = true"
          >添加角色</el-button
        >
        <el-dialog v-model="dialogVisible" title="添加角色" width="30%">
          <span>
            <el-input v-model="name" placeholder="请输入账户名" />
            <br />
            <br />
            <el-input v-model="username" placeholder="请输入角色名" />
            <br />
            <br />

            <el-input
              v-model="password"
              type="password"
              placeholder="请输入密码"
              show-password
          /></span>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="addroles">确定</el-button>
            </span>
          </template>
        </el-dialog>
      </div>
      <!-- table -->
      <div class="tablelist">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="username" label="角色名" />
          <el-table-column prop="name" label="账户名" />
          <el-table-column prop="date" label="创建时间" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button
                link
                type="primary"
                size="small"
                @click="handleClick(scope.$index, scope.row)"
                >设置权限</el-button
              >
              <el-button
                link
                type="primary"
                size="small"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "@/node-server/axios";

const username = ref(""); //密码
const name = ref(""); //密码
const password = ref(""); //密码
const dialogVisible = ref(false);
const store = useStore();
const router = useRouter(); //获取路由对象
const handleClick = (index: number, row: any) => {
  // 设置权限 传的是index
  console.log(index, row);
  // 点击进下个页面
  router.push({
    path: "/acess",
    query: {
      id: row.id,
    },
  });
};

// 删除
const handleDelete = (index: number, row: any) => {
  // 删除
  if (confirm("确定删除吗")) {
    store.dispatch("deleteUser", index);
  }
  console.log(index, row);
};


// 新增
const addroles = () => {
  getmes()
  if (username.value == "" || password.value == "") {
    ElMessage.error("账号或密码不能为空");
    return;
  }
  store.dispatch("addUser", {
    username: username.value,
    password: password.value,
    name: name.value,
  });
  dialogVisible.value = false;
  username.value = "";
  password.value = "";
  name.value = "";
};

const tableData = computed(() => {
  // 取出本地存储的数据
  // 取出vuex中的userlist
  return store.state.userlist;
});

const getmes=()=>{
axios({
  method: 'get',
  url: '/getUser',
}).then((res:any) => {
  console.log(res); //拿到所有用户信息，将用户信息存入vuex
  // store.dispatch("setUserList", res.data);
})
}
</script>

<style lang="scss" scoped>
.centwe {
  background-color: #fff;
}
.title {
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6d8d8;
  margin-bottom: 40px;
  > h2 {
    margin-left: 30px;
  }
}

.content {
  > div {
    margin-left: 40px;
  }
  > .contentbtn {
    margin-bottom: 40px;
  }
}
</style>