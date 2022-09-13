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
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="change"
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
          <el-table-column prop="rtName" label="类目名称"> </el-table-column>
          <el-table-column prop="qualification" label="资质名称">
          </el-table-column>
          <el-table-column prop="quaImg" label="资质电子版">
            <template slot-scope="scope">
              <el-popover placement="top-start" title="" trigger="hover">
                <img
                  :src="scope.row.quaImg"
                  alt=""
                  style="width: 150px; height: 150px"
                />
              </el-popover>
            </template>
          </el-table-column>
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
      AllData: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    change() {
      this.$router.push({
        path: "/changeinformation",
        query: {
          id: 1,
          name: this.carddata[0].content,
          phone: this.carddata[1].content,
          email: this.carddata[2].content,
        },
      });
    },
    init() {
      this.getlist();
    },

    // 获取信息
    async getlist() {
      try {
        const res = await this.$axios.getMallmes();
        if (res.code === 0) {
          console.log("%c ======>>>>>>>>", "color:orange;", res.data);
          const datass = res.data.shop.runType;
          const datas = res.data;
          this.carddata[0].content = datas.name;
          this.carddata[1].content = datas.phoneNumber;
          this.carddata[2].content = datas.email;
          this.carddata2[0].content = datas.shop.shopName;
          this.carddata2[1].content = datas.shop.shopLevel;
          this.carddata2[2].content = datas.shop.runType.rtName;
          this.carddata3[0].content = datas.shop.firm.firName;
          this.carddata3[1].content = datas.shop.firm.firNumCode;
          this.carddata3[2].content = datas.shop.firm.legalImg; //营业执照
          this.carddata3[3].content = datas.shop.firm.firLocation;
          this.carddata3[4].content = datas.shop.firm.legalName;
          this.carddata3[5].content = datas.shop.firm.legalNum;
          this.carddata3[6].content = datas.shop.firm.scImg;
          this.AllData.push({
            rtName: datass.rtName,
            qualification: datass.qualification,
            quaImg:
              "http://42.192.152.16:8080/" + "getImage/" + datass.quaImg,
            date: datass.beginTime + "至" + datass.endTime,
          }); //法人身份证
        }
      } catch (err) {
        console.log("%c ======>>>>>>>>", "color:orange;", err);
      }
    },
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