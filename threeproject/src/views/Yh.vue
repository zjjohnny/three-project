<template>
  <div class="about">
    <h1 class="btone"><img src="../sxwimg/yh1.png"></img><a href="../components/CaiWushouye.vue">返回</a><a href="" class="bttwo">后台管理系统<el-divider class="fenge" direction="vertical"></el-divider></a></h1>
    <div class="yhzh">银行账户</div>
    <el-divider></el-divider>
    <div class="qd">
    <img src="../sxwimg/qiandai.png"></img>
    <span>银行账户:</span>
    <span class="jtone">交通银行</span>
    <span class="jta">****</span>
    <span class="jtb">****</span>
    <span class="jtc">****</span>
    <span class="jtd">1234</span>
    <a @click="xiugai" class="yhxg">修改</a>
   </div>
   <div class="sja">银行预留手机：<span>123</span><span>****</span><span>1234</span></div>
   <div class="anquan">资金账户安全已校验目前环境为安全状态..</div>

   <div class="fenxian"><img src="../sxwimg/u47.png"></img></div>

   <div class="tisa">
    <img src="../sxwimg/u4735.png"></img>
     <span>温馨提示：</span>
   </div>
     <div class="tisb">修改银行账户，将会影响到财务的提现操作，请谨慎修改</div>
  </div>
 
</template>
<style>
  .btone{margin-left: 10px;
  color: dodgerblue;}
  .bttwo {margin-left: 300px;}
  .btone a{text-decoration:none;
    color: dodgerblue;}

  .fenge{height: 50px;
  
  margin-left: 25px;}
  .yhzh{float: left;
  position: absolute;
  margin-left: 650px;
  margin-top: -60px;
  font-size: 20px;
  color: rgb(107, 106, 106);}
  .qd img{width: 40px;}
  .qd{margin-left:80px;
     margin-top: 60px;}
  .qd span{
    position: absolute;
    margin-left: 20px;
    margin-top: 12px;}
  .jtone{
      
    padding-left: 100px;}
  .jta{padding-left: 180px;}
  .jtb{padding-left: 230px;}
  .jtc{padding-left: 280px;}
  .jtd{padding-left: 320px;}
  
  .yhxg{text-decoration: none;
    color: dodgerblue;
    float: left;
    position: absolute;
    margin-left: 480px;
    margin-top: 10px;}

    .sja{float: left;
    position: absolute;
    margin-left: 245px;
    margin-top: 40px;
    color:  rgb(107, 106, 106);}
    .sja span{padding-left: 8px;}

    .anquan{float: left;
    position: absolute;
    margin-left: 140px;
    margin-top: 140px;
    width: 580px;
    height: 50px;
    background-color: rgba(244, 254, 227, 1);
    padding-left: 40px;
    padding-top: 30px;}

    .fenxian{margin-top: 320px;}
    .tisa{margin-left: 20px;
    margin-top: 20px;}
    .tisa span{position: absolute;
     margin-left: 20px;
     font-size: 20px;
     color:  rgb(87, 86, 86);}

     .tisb{margin-left: 140px;
     margin-top: 30px;
     color:  rgb(87, 86, 86);}
</style>
<script>
  
    export default{
        methods:{
            xiugai (){
            //  路径/home对应我在router目录下index.js中定义的path属性值
                this.$router.push('/xiugai');
            }
        }
    }

</script>