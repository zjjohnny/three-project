// 导入 express
const express = require('express')
// 创建 app
const app = express()
let { conMysql } = require('./mysql.ts')
// 设置跨域访问
const cors = require('cors')
app.use(cors())
// 处理 x-www-form-urlencoded

// 处理POST参数
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
app.use(bodyParser.urlencoded({
  extended:true
}));

// 处理 application/json
app.use(bodyParser.json())
// 处理 mutipart/form-data
app.use(multiparty())
// 创建统一的返回报文对象
class Response {
  constructor(isSucceed, msg, code, data) {
    isSucceed = isSucceed;
    msg = msg;
    code = code;
    data = data;
  }
}


// 处理 x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
// 处理 application/json
app.use(bodyParser.json())
// 处理 mutipart/form-data
app.use(multiparty())
// 测试接口能否正常调用
app.get('/info', (req, res) => {
  res.send("Hello shaoyahu !")
})

// 获取列表的接口
app.get('/getUser', (req, res) => {
  let sql = 'select * from userlist'
  conMysql(sql).then(result => {
    res.send(result)
  })
})

// 登录的接口
// 登录
app.post('/login', (req, res) => {
  let sql = `select * from userlist where username = '${req.body.username}';`
  conMysql(sql).then(result => {
    res.send(result)
    console.log('%c ======>>>>>>>>','color:orange;',result,'===')
    if (result[0].password === req.body.password) {
      let response = new Response(true, '登录成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '用户名或密码错误', 400,'k')
      res.status(400).send(response)
    }
  }).catch(err => {
    res.status(500).send('数据库连接出错!')
  })
})
// 修改密码
// 修改密码
app.post('/updatePassword', (req, res) => {
  let sql = `update userlist set password = '${req.body.newPassword}' where username = '${req.body.username}'`
  conMysql(sql).then(result => {
    if (result.affectedRows == 1) {
      let response = new Response(true, '修改成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '修改失败,请稍后重试', 400,'k')
      res.status(400).send(response)
    }
  }).catch(err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 获取当前用户信息
app.get('/getUserInfo', (req, res) => {
  let sql = `select * from userlist where username = '${req.query.username}'`
  conMysql(sql).then(result => {
    let response = new Response(true, '获取成功', 200, result)
    res.send(response)
  }).catch(err => {
    res.status(500).send('数据库连接出错!')
  })
})


// 启动
app.listen(3000, () => {
  console.log('express server running at http://127.0.0.1:' + 3000);
})
export { }

