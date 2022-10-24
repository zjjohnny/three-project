<template>
  <div class="content1">
    <!-- 第一个部分 -->
    <div>
      <!-- 左边 -->
      <div class="items">
        <div class="title">
          <div>
            <div class="title-circle"></div>
            <div>运营数据</div>
          </div>
          <ul>
            <li>今日</li>
            <li>昨日</li>
            <li>本周</li>
            <li>上周</li>
          </ul>
        </div>
        <div class="content-item">
          <ul class="content-items">
            <li class="itemli">
              <span>今日交易(元)</span>
              <p>100</p>
            </li>
            <li class="itemli">
              <span>今日申请退单额(元)</span>
              <p>100</p>
            </li>
            <li>
              <span>今日订单(笔)</span>
              <p>100</p>
            </li>
            <li>
              <span>今日商品销量(件)</span>
              <p>100</p>
            </li>
            <li>
              <span>今日申请退单商品(件)</span>
              <p>100</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 右边 -->
      <div class="itemss">
        <div class="title">
          <div>
            <div class="title-circle"></div>
            <div>运营数据</div>
          </div>
        </div>
        <div class="content-item">
          <ul class="leftitem">
            <li class="leftitems">
              <div class="title-circle"></div>
              <div>
                <span>待发货订单</span>
                <p>10</p>
              </div>
            </li>
            <li class="leftitems">
              <div class="title-circle"></div>
              <div>
                <span>待退货订单</span>
                <p>10</p>
              </div>
            </li>
            <li class="leftitems">
              <div class="title-circle"></div>
              <div>
                <span>待审核体现</span>
                <p>10</p>
              </div>
            </li>
            <li class="leftitems">
              <div class="title-circle"></div>
              <div>
                <span>预警商品数量</span>
                <p>10</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 第二个部分 -->
    <div class="secendpart">
      <div class="itemscenter">
        <div class="title2">
          <div>
            <div class="title-circle"></div>
            <div>商品销量</div>
          </div>
          <ul>
            <li>
              <span>分类名称</span
              ><el-select
                v-model="value"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                /> </el-select
              ><span>本周</span>
            </li>
          </ul>
        </div>
        <!-- table -->
        <div>
          <el-table
            size="large"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </div>
      </div>
      <div class="itemsitemscenter">
        <div class="title2">
          <div>
            <div class="title-circle"></div>
            <div>商品销量</div>
          </div>
          <ul class="yue">
            <li>
              <span>分类名称</span
              ><el-select
                v-model="value"
                class="m-2"
                placeholder="Select"
                size="large"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                /> </el-select
              ><span>本月</span>
            </li>
          </ul>
        </div>
        <!-- table -->
        <div>
          <el-table
            size="large"
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </div>
      </div>
    </div>
    <!--echarts部分 -->
    <div>
      <div class="titlecharts">
        <ul>
          <li>
            <p class="title-circle"></p>
            <span>商品销量</span>
          </li>
          <li>
            <p class="title-circle"></p>
            <span>退单统计</span>
          </li>
          <li>
            <p class="title-circle"></p>
            <span>会员统计</span>
          </li>
        </ul>
        <ul>
          <li>本周</li>
          <li>上周</li>
          <li>本月</li>
          <li>上月</li>
        </ul>
      </div>
      <!-- 放置echarts -->
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
interface User {
  date: string;
  name: string;
  address: string;
}

const tableRowClassName = ({
  row,
  rowIndex,
}: {
  row: User;
  rowIndex: number;
}) => {
  if (rowIndex === 1) {
    return "warning-row";
  } else if (rowIndex === 3) {
    return "success-row";
  }
  return "";
};

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.content1 {
  width: 100%;
  > div {
    display: flex;
    width: 100%;
    height: 500px;
  }
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
.title {
  height: 70px;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    > div:first-child {
      margin-right: 10px;
    }
  }
  > ul {
    margin-left: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    > li {
      margin: 0 20px;
    }
  }
}
.items {
  width: 60%;
  margin-right: 10px;
  background-color: #ffffff;
}
.itemss {
  width: 40%;
  background-color: #ffffff;
  margin-right: 10px;
}
.title-circle {
  margin-left: 10px;
  width: 30px;
  height: 30px;
  background: inherit;
  background-color: rgba(215, 215, 215, 1);
  border: none;
  border-radius: 25px;
}

.content-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  > li {
    margin: 40px 0;
    height: calc(500px / 5);
    width: calc(100% / 3);
    > span {
      color: #333333;
      padding: 10px;
    }
    > p {
      font-weight: 700;
      font-style: normal;
      font-size: 25px;
      color: #009933;
    }
  }
}

.itemli {
  width: 50% !important;
}

.leftitem {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  > li {
    height: calc(400px / 2);
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    > div:first-child {
      margin-right: 10px;
    }
    title > div:last-child {
      text-align: left;
      > p {
        font-size: 16px;
        color: #ff9900;
        font-weight: 700;
      }
    }
  }
}

.title2 {
  margin-top: 10px;
  height: 70px;
  display: flex;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    > div:first-child {
      margin-right: 10px;
    }
  }
  > ul {
    margin-left: 60px;
    > li > span {
      margin: 0 10px;
    }
  }
}
.itemscenter {
  margin-right: 10px;
  width: 45%;
  height: 500px;
}
.itemsitemscenter {
  width: 55%;
}
.yue {
  display: flex;
  justify-content: space-between;
  > li {
    margin-left: 200px;
  }
}

.titlecharts {
  margin-top: 20px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  background-color: #ffffff;
  > ul {
    display: flex;
    align-items: center;
    > li {
      margin: 0 20px;
      display: flex;
      align-items: center;
      > p {
        margin-right: 10px;
      }
    }
  }
}

.secendpart {
  height: 300px !important;
  margin-bottom: 10px;
}
</style>