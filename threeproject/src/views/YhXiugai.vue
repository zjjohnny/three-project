<template>
    <div class="xiugai">
      <h1 class="btone"><img src="../sxwimg/yh1.png"></img><a href="../components/CaiWushouye.vue">返回</a><a href="" class="bttwo">后台管理系统<el-divider class="fenge" direction="vertical"></el-divider></a></h1>
      <div class="yhzh">修改银行账户</div>
      <el-divider></el-divider>
      <div class="jinggao">
        <img src="../sxwimg/u2.png"></img>
        <span>请填写以下信息，用于支付和提现功能</span>
      </div>
      <div class="ysgong">
        <span class="kahao">银行卡号</span>
        <input class="puta"></input>
        <span class="kha">输入卡号会智能识别银行和卡种</span>
      </div>
      <div class="ysgong">
        <span class="kahao">手机号码</span>
        <input class="puta"></input>
        <span class="kha">请填写您在银行预留的手机号码，以验证银行卡是否属于您本人</span>
        <div class="yanzm">获取验证码</div>
      </div>

      <div class="yzma">
        <span>验证码：</span>
        <input placeholder="请输入验证码"></input>
      </div>
      <div class="quedin">
        <button><span>确定</span></button>
      </div>

      <div class="fenxiana"><img src="../sxwimg/u47.png"></img></div>

      <div class="tisc">
         <img src="../sxwimg/u4735.png"></img>
         <span>温馨提示：</span>
   </div>
      <div class="tisd">修改银行账户，将会影响到财务的提现操作，请谨慎修改</div>
  </div>
</template>
<style scoped>
  .ysgong{color: rgb(76, 75, 75);}
  .jinggao{width: 1000px;
  height: 40px;
  background-color:rgba(229, 245, 255, 1);
}
.jinggao img{margin-left: 30px;
  margin-top: 7px;}
  .jinggao span{
    float: left;
    position: absolute;
    margin-left: 30px;
    margin-top: 10px;
  }
  .kahao{font-size: 22px;
      float: left;
      position: absolute;
      margin-left: 100px;
      margin-top: 90px;}
.puta{width: 400px;
       height: 50px;
       margin-top: 80px;
       margin-left: 210px;
       outline-color:gainsboro;
       border-radius: 8px;
      }
 .kha{float: left;
      position: absolute;
      margin-top: 150px;
      margin-left: -405px;
      color:grey ;
     font-size: 14px;}
.yanzm{border: 1px solid dodgerblue;
      float: left;
      position: absolute;
      width: 120px;
      height: 55px;
      border-radius: 8px;
      margin-left: 640px;
      margin-top:-55px;
      text-align: center;
      line-height: 55px;
      color: dodgerblue;}
      .yzma{float: left;
      position: absolute;
      margin-left: 210px;
      margin-top: 80px;
       font-size: 22px;
      color:rgb(76, 75, 75);}
      .yzma input{width: 300px;
      height: 50px;
      border-radius: 8px;
      padding-left: 20px;}

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

  .quedin button{width: 500px;
  height: 50px;
  background-color:  dodgerblue;
  border-radius: 8px;
  border: none;
 }
 .quedin{ float: left;
  position: absolute;
  margin-left: 120px;
  margin-top: 200px;
  }
  .quedin span{color: white;}

  .tisc{margin-left: 20px;
    margin-top: 100px;}
    .tisc span{position: absolute;
     margin-left: 20px;
     font-size: 20px;
     color:  rgb(87, 86, 86);}
     .tisd{margin-left: 140px;
     margin-top: 30px;
     color:  rgb(87, 86, 86);}
     .fenxiana{margin-top: 380px;}
</style>

