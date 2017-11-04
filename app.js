/**
 * Created by PlusNie on 2017/11/4.
 * 应用程序的启动入口文件
 */

//加载express模块
var express = require('express');
//加载模板处理模块
var swig = require('swig');
//创建app应用=>BideHs Http.createServer();
var app = express();

//配置应用模板
//定义当前应用所使用的模板引擎
//定一个参数:模板引擎的名称,同时也是模板文件的后缀,第二个参数表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
//设置模板文件存放的目录,第一个参数必须是views,第二个参数是目录
app.set('views','./views');
//注册所使用的模板引擎,第一个参数必须是view engine,第二个参数和app.engine这个方法中定义的模板引擎的名称(第一个参数)是一致的
app.set('view engine','html');
//在开放过程中,需要取消模板缓存
swig.setDefaults({cache:false});

/*
 *  req request对象
 *  res reqsponse对象
 *  next 函数
 */
app.get('/',function (req,res,next) {
    //res.send('<h1>欢迎来到NodeJS</h1>')
    //读取views目录下的指定文件,解析并返回给客户端,
    //第一个参数:标识模板文件,相对于views目录
    //第二个参数:传递给模板使用的数据
    res.render('index');
});

app.listen(8081);