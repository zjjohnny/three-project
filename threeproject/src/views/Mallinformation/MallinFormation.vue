<template>
  <div>
    <div>
      <Inputteams><span slot="h1titel">商城信息</span></Inputteams>
    </div>
    <div class="content">
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>联系人信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="change"
              >修改联系人信息</el-button
            >
          </div>
          <div v-for="item in carddata" :key="item.id" class="text item">
            {{ item.name }} : {{ item.content }}
          </div>
        </el-card>
      </div>
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>店铺信息</span>
          </div>
          <div v-for="item in carddata2" :key="item.id" class="text item">
            {{ item.name }} : {{ item.content }}
          </div>
        </el-card>
      </div>
      <!-- 行业资质 -->
      <div>
        <h5>经营类目行业资质</h5>
        <el-table :data="AllData" style="width: 100%">
          <el-table-column prop="name" label="类目名称"> </el-table-column>
          <el-table-column prop="goodsname" label="资质名称"> </el-table-column>
          <el-table-column prop="text" label="资质电子版"> </el-table-column>
          <el-table-column prop="date" label="有效期"> </el-table-column>
        </el-table>
      </div>
      <!-- /公司信息 -->
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>公司信息</span>
          </div>
          <div v-for="item in carddata3" :key="item.id" class="text item">
            {{ item.name }} : {{ item.content }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import Inputteams from "@/components/CommodityManagement/Commoditytitle.vue";

export default {
  components: { Inputteams },
  data() {
    return {
      carddata: [
        { id: 1, name: "联系人姓名", content: "" },
        { id: 2, name: "联系人电话", content: "" },
        { id: 3, name: "联系人邮箱", content: "" },
      ], //联系人信息
      carddata2: [
        { id: 1, name: "店铺名称", content: "" },
        { id: 2, name: "店铺等级", content: "" },
        { id: 3, name: "经营类目", content: "" },
      ], //店铺信息
      carddata3: [
        { id: 1, name: "公司名称", content: "" },
        { id: 2, name: "信用代码", content: "" },
        { id: 3, name: "营业执照", content: "" },
        { id: 4, name: "公司地址", content: "" },
        { id: 5, name: "法人姓名", content: "" },
        { id: 6, name: "法人身份证号", content: "" },
        { id: 7, name: "法人身份证", content: "" },
      ],
      AllData: [
        {
          name: "考试费1",
          goodsname: 2001,
          text: "200",
          date: "2020-10-10",
        },
      ],
    };
  },
  methods: {
    change(){
      this.$router.push('/changeinformation')
    }
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(228, 228, 228, 1);
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
.content {
  margin: 30px;
  > div {
    margin: 20px 0;
  }
}
</style>