<template>
  <el-menu default-active="1-4-1" 
          class="el-menu-vertical-demo"
          background-color="#000" 
          text-color="#fff"
          active-text-color="#fed000"
          style="height:100%"
          @open="handleOpen" @close="handleClose"
    :collapse="isCollapse">
    <h3>{{isCollapse ? '后台':'后台管理系统'}}</h3>
    <el-menu-item v-for="item in nochildren" 
    @click="clickMenu(item)"
    :index="item.path" 
    :key="item.path">
      <i :class="item.icon"></i>
      <span slot="title">{{ item.lable }}</span>
    </el-menu-item>
    <el-submenu v-for="item in haschildren" :index="item.path" :key="item.path" >
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.lable}}</span>
      </template>
      <el-menu-item-group v-for="submenu in item.children":key="submenu.path">
        <el-menu-item :index="submenu.path">{{submenu.lable}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          lable: "首页",
          icon: "el-icon-s-home",
          url: "Home/home",
        },
        {
          path:"商品管理",
          lable: "商品管理",
          icon: "el-icon-shopping-cart-full",
          children: [
            {
              path: "Commodity management",
              name: "Commodity management",
              lable: "商品管理",
              url: "other/pageone",
            },
            {
              path: "Product release",
              name: "Product release",
              lable: "商品发布",
              url: "other/pagetwo",
            },
            {
              path: "Product review",
              name: "Product review",
              lable: "商品评论",
              url: "other/pagethree",
            },
            {
              path: "Commodity recycle bin",
              name: "Commodity recycle bin",
              lable: "商品回收站",
              url: "other/pagefour",
            },
          ],
        },
        {
           path:"订单管理",
           lable:'订单管理',
           icon:'el-icon-s-order',
           children:[{
                path:'Order management',
                name:'Order management',
                lable:'订单管理',
                url:'other/pageone'
            },
            {
                    path:'Refund management',
                    name:'Refund management',
                    lable:'退款管理',
                    url:'other/pagetwo'
            }]
        },
        {
           path:"运营管理",
           lable:'运营管理',
           icon:'el-icon-data-line',
           children:[{
                path:'Carousel management',
                name:'Carousel management',
                lable:'轮播图管理',
                url:'other/pageone'
           },
           {
                path:'Navigation classification',
                name:'Navigation classification',
                lable:'导航分类',
                url:'other/pagetwo'
           },
           {
                path:'Mall information',
                name:'Mall information',
                lable:'商城信息',
                url:'other/pagethree'
           },
           {
                path:'Mall settings',
                name:'Mall settings',
                lable:'商城设置',
                url:'other/pagefour'
           }]
        },
        {
          path:"营销管理",
          lable:'营销管理',
          icon:'el-icon-finished',
          children:[{
                path:'Coupon management',
                name:'Coupon management',
                lable:'优惠券管理',
                url:'other/pageone'
            },
            {
                    path:'discount package',
                    name:'discount package',
                    lable:'优惠套餐',
                    url:'other/pagetwo'
            }]
        },
        {
            path:"数据统计",
            lable:'数据统计',
            icon:'el-icon-edit-outline',
            children:[{
                  path:'New user',
                  name:'New user',
                  lable:'新增用户',
                  url:'other/pageone'
              },
              {
                  path:'Active users',
                  name:'Active users',
                  lable:'活跃用户',
                  url:'other/pagetwo'
              },
               {
                  path:'Business data',
                  name:'Business data',
                  lable:'业务数据',
                  url:'other/pagetwo'
              }]
        },
        {
            path:"财务管理",
            lable:'财务管理',
            icon:'el-icon-s-goods',
            children:[{
                  path:'My assets',
                  name:'My assets',
                  lable:'我的资产',
                  url:'other/pageone'
              },
              {
                  path:'Account Statement',
                  name:'Account Statement',
                  lable:'对账单',
                  url:'other/pagetwo'
              },
               {
                  path:'financial data',
                  name:'financial data',
                  lable:'财务数据',
                  url:'other/pagetwo'
              }]
        }, 
        {
            path:"账号管理",
            lable:'账号管理',
            icon:'el-icon-user',
            children:[{
                  path:'Account list',
                  name:'Account list',
                  lable:'账号列表',
                  url:'other/pageone'
              },
              {
                  path:'Role management',
                  name:'Role management',
                  lable:'角色管理',
                  url:'other/pagetwo'
              }]
        },
        {
            path:"用户反馈",
            lable:'用户反馈',
            icon:'el-icon-notebook-2',
            children:[{
                  path:'App feedback',
                  name:'App feedback',
                  lable:'APP反馈',
                  url:'other/pageone'
              }]
        },  
        {
            path:"设置",
            lable:'设置',
            icon:'el-icon-setting',
            children:[{
                  path:'Operation settings',
                  name:'Operation settings',
                  lable:'操作设置',
                  url:'other/pageone'
              }]
        },     
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
    clickMenu(item){
        this.$router.push({
          name:item.name
        })
    },
  },
  computed: {
    nochildren() {
      return this.menu.filter((item) => !item.children);
    },
    haschildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  h3{
    color: white;
    text-align: center;
    line-height: 50px;
  }
}
</style>