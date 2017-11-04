/**
 * Created by PlusNie on 2017/11/4.
 * 应用程序的启动入口文件
 */

//加载express模块
var express = require('express');
//创建app应用=>BideHs Http.createServer();
var app = express();

/*
    req request对象
    res reqsponse对象
    next 函数
 */
app.get('/',function (req,res,next) {
    res.send('<h1>欢迎来到NodeJS</h1>')
});

app.listen(8081);