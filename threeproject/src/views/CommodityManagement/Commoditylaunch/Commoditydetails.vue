<template>
  <div class="bigcontent">
    <!-- 商品属性 -->
    <div class="commoditydetali">
      <div><i class="el-icon-s-claim"></i> <span>商品属性</span></div>
      <div class="comodeitycontent">
        <!-- 分类 -->
        <div>
          <div><i class="el-icon-star-on"></i><span>商品分类</span></div>
          <div>
            {{ categoryedit }}
            <div v-if="this.selectlist.length == 3">
              {{ selectlist[0] }}>{{ selectlist[1] }}>{{ selectlist[2] }}
            </div>
            <div v-if="this.selectlist.length == 2">
              {{ selectlist[0] }}>{{ selectlist[1] }}
            </div>
            <el-button type="warning" size="mini" plain @click="editcateger"
              >修改</el-button
            >
          </div>
        </div>
        <!-- 名称 -->
        <div>
          <div><i class="el-icon-star-on"></i><span>商品名称</span></div>
          <div>
            <el-input
              class="inputsieze"
              v-model="input"
              placeholder="请输入内容"
              maxlength="30"
              minlength="2"
            ></el-input
            ><span>产品名称长度4~60个字符，即2~30个汉字。</span>
          </div>
        </div>
        <!-- 简介 -->
        <div>
          <div><i class="el-icon-star-on"></i><span>商品简介</span></div>
          <div>
            <el-input
              class="inputsieze"
              resize="none"
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="40"
              show-word-limit
              rows="5"
              minlength="2"
            >
            </el-input>
            <span>产品名称长度4~80个字符，即2~40个汉字</span>
          </div>
        </div>
        <!-- 上传主图 -->
        <div>
          <div class="pothopart">
            <i class="el-icon-star-on"></i> <span>上传主图</span>
          </div>
          <div>
            <el-upload
              class="avatar-uploader"
              action=""
              :limit="1"
              :auto-upload="true"
              :http-request="onRequest"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              name="image"
            >
              <i class="el-icon-plus "></i>
              <img v-if="dialogImageUrl" :src="dialogImageUrl" class="avatar" />
            </el-upload>
          </div>
        </div>
        <!-- 商品报价 -->
        <div>
          <div><i class="el-icon-star-on"></i> <span>商品报价</span></div>
          <div>
            <el-input v-model="inputmoeny" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>
    </div>

    <!-- 商品详情 -->
    <div class="commoditydetali">
      <div><i class="el-icon-s-claim"></i> <span>产品详情页</span></div>
      <div>
        <div><i class="el-icon-star-on"></i> <span>商品描述</span></div>
        <div><Ueditor mes="mes"></Ueditor></div>
      </div>
    </div>
    <!--其他信息  -->
    <div class="commoditydetali1 commoditydetali">
      <div><i class="el-icon-s-claim"></i> <span>其他信息</span></div>
      <div>
        <span>同步移动端</span
        ><el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div>
        <span>商品发布</span>
        <div><el-radio v-model="radio" label="1">商品发布</el-radio></div>
      </div>
      <div>
        <span>是否推荐</span>
        <div>
          <el-radio v-model="isradio" label="1">是</el-radio>
          <el-radio v-model="isradio" label="2">否</el-radio
          ><span class="s1">被推荐的商品会显示在店铺首页</span>
        </div>
      </div>
    </div>

    <!-- 搜索优化 -->
    <div class="commoditydetali commoditydetali2">
      <div><i class="el-icon-s-claim"></i> <span>搜索优化</span></div>
      <div>
        <span>SEO标题</span>
        <div>
          <el-input
            maxlength="80"
            class="inputsieze"
            v-model="inputseo"
            placeholder="请输入标题"
          ></el-input>
          <span class="s1">用于商品搜索引擎的优化，一般不超过80个字</span>
        </div>
      </div>
      <div>
        <span>SEO关键词</span>
        <div>
          <el-input
            maxlength="100"
            class="inputsieze"
            v-model="inputseokey"
            placeholder="请输入关键词"
          ></el-input>
          <span class="s1"
            >用于商品搜索引擎的优化，关键字之间请用英文逗号分隔，一般不超过100个字</span
          >
        </div>
      </div>
      <div>
        <span>SEO商品描述</span>
        <div>
          <el-input
            class="inputsieze"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入商品描述"
            v-model="textarea2"
            resize="none"
            maxlength="120"
          >
          </el-input>

          <span class="s1">用于商品搜索引擎的优化，建议120字以内</span>
        </div>
      </div>
    </div>

    <!-- 按钮组 -->
    <!-- <div class="commoditydetali">
      <el-button type="success" @click="launch">发布商品</el-button>
    </div> -->
  </div>
</template>

<script>
// import steptiame from "@/components/Commodity Management/steptiame.vue";
import Ueditor from "@/components/CommodityManagement/ueditor.vue";
import { mapState } from "vuex";
export default {
  props: ["active", "selectlist"],
  components: {
    Ueditor,
  },
  data() {
    return {
      input: "", //商品名称搜索，
      textarea: "", //商品简介
      inputmoeny: "", //商品报价
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ], //下拉框数据的值
      value: "", //下拉框选择的值
      radio: "1", //商品发布单选框的值 1选择 0 没选择
      isradio: "2", //1表示是 2 表示否
      inputseo: "", //SEO标题
      inputseokey: "", //SEO关键词
      textarea2: "", //商品描述
      mes: "", //副文本
      category: this.selectlist, //商品分類 是要从上个页面拿到的
      categoryedit: "",
      dialogImageUrl: "",
      dialogVisible: false,
      imageUrl: "", //上传图片的路径
      imgurledit:''//临时储存图片data给修改不上传图片使用
    };
  },
  mounted() {
    const data = this.$route.query;
    // 做回显
    if (data.isEdit) {
      this.editproductsshow(data.rowId);
    }

    // console.log("%c ======>>>>>>>>", "color:blue;", this.roleeidttData);
    // this.input = this.roleeidttData.goodsName;
    // this.textarea = this.roleeidttData.remarks;
    // this.inputmoeny = this.roleeidttData.price;
    // this.mes = this.roleeidttData.remarks;
    // this.category = this.roleeidttData.category;
    // if (this.roleeidttData.state == true) {
    //   this.radio === "1";
    // } else {
    //   this.radio === "0";
    // }
  },
  computed: {
    ...mapState(["roleeidttData"]),
  },
  methods: {
    onRequest(file) {
      const files = new FormData();
      files.append("file", file.file);
      this.postpicture(files);
    },
    // 调用编辑的方法
    async postpicture(file) {
      try {
        const res = await this.$axios.uploadimg(file);
        if (res.code == 200) {
          this.imageUrl = res.data;
          this.$emit("imgurl", this.imageUrl);
        }
      } catch (err) {
        alert(err);
      }
    },
    // handleAvatarSuccess(file) {
    //   console.log("%c ======>>>>>>>>", "color:orange;", file.raw);
    //   // this.imageUrl=file.raw;
    //   this.$emit('imgurl',file.raw);
    // },
    // 发布商品
    launch() {
      // this.active = this.active + 1;
      this.editproducts;
    },
    //编辑回显
    async editproductsshow(id) {
      try {
        const res = await this.$axios.editproductshow({ id });
        if (res.code === 200) {
          console.log("%c ======>>>>>>>>", "color:orange;", res.data);
          this.imgurledit= res.data.image
          this.input = res.data.goodsName;
          this.textarea = res.data.remarks;
          this.inputmoeny = res.data.price;
          this.category = res.data.category;
          this.dialogImageUrl =
            "http://42.192.152.16:8080/" + "imageUpload/" + res.data.image;
          this.categoryedit = res.data.category;
        }
      } catch (error) {
        console.log("%c ======>>>>>>>>", "color:orange;", error);
      }
    },

    //修改种类
    editcateger() {
      this.$emit("editcateger", this.category);
    },
    // 图片加载方法删除
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 图片预览
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.bigcontent {
  width: 100%;
  min-width: 1200px;
}

.commoditydetali {
  margin: 30px 60px;
  i {
    color: red;
  }
  > div:first-child {
    margin-bottom: 30px;
  }
}
.comodeitycontent {
  > div {
    display: flex;
    margin: 10px 0;
    > div:first-child {
      width: 100px;
      display: flex;
    }
    > div:last-child {
      //右边部分
      display: flex;
      > span {
        font-size: 13px;
        color: #949494;
        padding-left: 20px;
      }
      > button {
        margin-left: 20px;
      }
    }
  }
}

.inputsieze {
  width: 600px;
}

.commoditydetali {
  > div:last-child {
    > div:first-child {
      margin: 10px 0;
    }
    > div:last-child {
      width: 80%;
    }
  }
}

.commoditydetali1 {
  > div {
    display: flex;
    margin: 20px 0;
    > span {
      width: 100px;
    }
  }
}

.s1 {
  font-size: 13px;
  color: #949494;
  padding-left: 20px;
}

.commoditydetali2 {
  > div {
    display: flex;
    margin: 10px 0;
    > span {
      width: 120px;
    }
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
  position: absolute;
  left: 40%;
  top: 59%;
}
</style>