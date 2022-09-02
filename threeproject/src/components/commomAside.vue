<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h3>后台管理系统</h3>
    <el-menu-item
      v-for="item in nochildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="item.icon"></i>
      <span slot="title">{{ item.lable }}</span>
    </el-menu-item>
    <el-submenu v-for="item in haschildren" :index="item.path" :key="item.path">
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.lable }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path"
      >
        <!-- <span slot="title"></span> -->
        <el-menu-item :index="subIndex">{{ subItem.lable }}</el-menu-item>
        <!-- <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
      <el-menu-item index="1-4">选项4</el-menu-item>  -->
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航三</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航四</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航五</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航6</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航七</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航八</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="9">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航九</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="10">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航十</span>
      </template>
      <el-menu-item-group>
        <span slot="title"></span>
        <el-menu-item index="1-1">选项1</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menu: [
        {
          path: "/",
          name: "home",
          lable: "首页",
          icon: "el-icon-s-home",
          url: "Home/home",
        },
        {
          lable: "商品管理",
          icon: "el-icon-shopping-cart-full",
          children: [
            {
              path: "/page1",
              name: "page1",
              lable: "商品管理",
              url: "other/pageone",
            },
            {
              path: "/page2",
              name: "page2",
              lable: "商品发布",
              url: "other/pagetwo",
            },
            {
              path: "/page3",
              name: "page3",
              lable: "商品评论",
              url: "other/pagethree",
            },
            {
              path: "/page4",
              name: "page4",
              lable: "商品回收站",
              url: "other/pagefour",
            },
          ],
        },
        // {
        //    lable:'订单管理',
        //    icon:'el-icon-s-order',
        //    children:[{
        //         path:'/page1',
        //         name:'page1',
        //         lable:'订单管理',
        //         url:'other/pageone'
        //     },
        //     {
        //             path:'/page2',
        //             name:'page2',
        //             lable:'退款管理',
        //             url:'other/pagetwo'
        //     },
        //     ]},
        // {
        //    lable:'运营管理',
        //    icon:'el-icon-data-line',
        //    children:[{
        //         path:'/page1',
        //         name:'page1',
        //         lable:'轮播图管理',
        //         url:'other/pageone'
        //    },
        //    {
        //         path:'/page2',
        //         name:'page2',
        //         lable:'导航分类',
        //         url:'other/pagetwo'
        //    },
        //    {
        //         path:'/page3',
        //         name:'page3',
        //         lable:'商城信息',
        //         url:'other/pagethree'
        //    },
        //    {
        //         path:'/page4',
        //         name:'page4',
        //         lable:'商城设置',
        //         url:'other/pagefour'
        //    }
        //     ]},
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  computed: {
    nochildren() {
      return this.menu.filter((item) => !item.childern);
    },
    haschildren() {
      return this.menu.filter((item) => item.childern);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>