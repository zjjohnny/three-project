
export default [
  /**
   * title: 标题
   * icon: 图标
   * path: 路径
   * children: 子路由
   * flag: 权限
   * children = {
   *  title: 标题
   *  path: 路径 routes里面配置的
   * }
   *
   */
  {
    title: "工作台",
    icon: "iconfont icon-anquan-xian",
    children: [
      {
        title: "工作台数据",
        name:'home',
        path: "/home",
      }
    ],
    path: "/main", //
    flag: 1,
  },
  {
    title: "会员管理",
    icon: "iconfont icon-anzhuangjilu-xian",
    children: [
      {
        title: "会员管理",
        name:'client',
        path: "/client",
      },
      {
        title: "会员等级",
        path: "/highSeas",
      },
    ],
    path: "/user",
    flag: 2,
  },
  {
    title: "商品",
    icon: "iconfont icon-caigou-xian",
    children: [
      {
        title: "商品管理",
        path: "/GoodsView",
      },
      {
        title: "仓库管理",
        path: "/GoodsHouse",
      },
    ],
    path: "",
    flag: 3,
  },

  {
    title: "交易",
    icon: "iconfont icon-cangkutiaobo-xian",
    children: [
      {
        title: "订单列表",
        path: "/dindan",
      },{
        title: "订单清关",
        path: "/Dda",
      }

    ],
    path: "",
    flag: 4,
  },
  // {
  //   title: "售后管理",
  //   icon: "el-icon-s-opportunity",
  //   children: [
  //     {
  //       title: "工单管理",
  //       path: "",
  //     },
  //   ],
  //   path: "",
  //   flag: 4,
  // },
  {
    title: "营销",
    icon: "iconfont icon-xianchangkantan-xian",
    children: [
      {
        title: "满减",
        path: "/ManJian",
      },
      {
        title: "优惠券",
        path: "/YouHuiJuan",
      },

    ],
    path: "",
    flag: 5,
  },
  {
    title: "财务",
    icon: "iconfont icon-duoren-xian",
    children: [
      {
        title: "资金流水",
        path: "/record",
      },
      {
        title: "佣金体现",
        path: "/finane",
      },
    ],
    path: "",
    flag: 5,
  },

  {
    title: "权限",
    icon: "iconfont icon-tixingtongzhi-xian",
    children: [
      {
        title: "权限角色",
        path: "/data",
      },],
    path: "",
    flag: 5,
  },
  {
    title: "系统设置",
    icon: "iconfont icon-cangkutiaobo-xian",
    children: [
      {
        title: "订单设置",
        path: "/orderSetting",
      }, {
        title: "国籍管理",
        path: "/countryManage",
      }],
    path: "",
    flag: 5,
  }

]