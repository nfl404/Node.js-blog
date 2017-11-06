/*
    Created by PlusNie on 2017/11/3
    应用程序的启动（入口）文件
 */

//加载express模块
var express = require('express');
//创建app应用，NodeJs Http.,createServer();
var app = express();

app.get('/',function (req,res,next) {
    res.send('<h1>欢迎来到</h1>>')
})
//监听http请求
app.listen(8081);
