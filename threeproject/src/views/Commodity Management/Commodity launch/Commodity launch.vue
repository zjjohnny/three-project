<template>
  <div>
    <!-- 进度条 -->
    <div>
      <steptiame ref="asss"></steptiame>
    </div>
    <!-- 选择商品分类 -->
    <div v-show="active === 1">
      <div class="selectpart">
        <span>您已选：<span></span>><span></span>><span></span></span>
      </div>
      <!-- 穿梭框 -->
      <div class="treepart">
        <el-cascader-panel
          :options="options"
          @change="handleChange"
        ></el-cascader-panel>
      </div>
    </div>
    <!-- 填写商品详情 -->
    <div>
      <commodity-details
        v-show="active === 2"
        @editdata="editdata"
        :active="active"
        ref="details"
      ></commodity-details>
    </div>
    <commodity-susscess v-show="active === 3"></commodity-susscess>

    <div class="btn" v-if="ishow">
      <el-button type="success" @click="btns">下一步</el-button>
    </div>
  </div>
</template>


<script>
import steptiame from "@/components/Commodity Management/steptiame.vue";
import CommodityDetails from "./Commodity details.vue";
import CommoditySusscess from "./Commodity susscess.vue";
import { mapState } from "vuex";
export default {
  name: "CommodityLaunch",
  components: {
    steptiame,
    CommodityDetails,
    CommoditySusscess,
  },
  data() {
    return {
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
      active: 1,
      ishow: true,
      editlist: "",
    };
  },

  computed: {
    ...mapState(["roleeidttData"]),
  },

  methods: {
    handleChange(value) {
      console.log("%c ======>>>>>>>>", "color:orange;", value); //获取选中的树形的值
    },
    // 编辑时里面的值
    editdata(data) {
      console.log("%c ======>>>>>>>>", "color:orange;", data);
      data = this.editlist;
    },
    // 编辑路由跳转传参
    btns() {
      const data = this.$route.query;
      // console.log("%c ======>>>>>>>>", "color:orange;", data);
      console.log("%c ======>>>>>>>>", "color:blue;", this.active);
      if (this.active === 2) {
        const details = this.$refs.details.$data;
        // console.log("%c ======>>>>>>>>", "color:orange;", details);
        const objedit = {
          category: details.category,
          goodsName: details.input,
          id: data.rowId,
          price: details.inputmoeny,
          remarks: details.textarea,
        };
        if (data && data.isEdit === "true") {
          console.log("%c ======>>>>>>>>", "color:orange;", objedit);
          this.editproducts(objedit);
        } else {
          // 调用新建的接口
          this.addproducts(objedit);
        }
        return false;
      }
      if (this.active === 3) {
        this.ishow = false;
      }
      const dom = this.$refs.asss;
      dom.active = dom.active + 1;
      this.active = dom.active;
    },

    // 编辑的接口
    async editproducts(obj) {
      try {
        const res = await this.$axios.editproduct(obj);
        if (res.code === 200) {
          // 要将修改后的list返回给tablelist从新渲染表格
          console.log("%c ======>>>>>>>>", "color:orange;", res);
          this.active = 3;
        }
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
    },

    // 新增接口
    async addproducts(obj) {
      try {
        //
        const res = await this.$axios.addproudct(obj);
        if (res.code === 200) {
          this.$message({
            message: "新增成功",
            type: "success",
          });
          // this.getaprtmentslist();
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.treepart {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  width: 600px;
}
.selectpart {
  height: 40px;
  background-color: #f2f2f2;
  margin: 30px 10px;
  display: flex;
  align-items: center;
  > span:first-child {
    padding-left: 30px;
  }
}

.btn {
  display: flex;
  justify-content: center;
  // width: 120px;
  > button {
    width: 130px;
  }
}
</style>