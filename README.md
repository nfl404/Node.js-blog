# Node.js-blog

node.js实现前后台开发,案例:博客开发

##### 技术框架介绍

- NodeJs

    版本: v5.10.1

    基础核心开发语言

- Express

    版本: ^4.1.40

    一个简洁而灵活的node.js Web应用框架,提供一系列强大的特性帮助我们创建各种web应用

- Mongodb

    版本:3.2.4
    
- 第三方模块&中间插件

    bodyParser:解析post请求数据
    
    cookies:读/写cookie
    
    swig:模板解析引擎
    
    mongoose:操作mongodb数据库
    
    markdown:markdown语法解析生成模块


##### 项目初始化

    npm init

##### 安装express框架&插件

    npm install --save express
    npm install --save body-parser
    npm install --save cookies
    npm install --save swig
    npm install --save mongoose
    npm install --save markdown
    
##### 使用模板
   
- 模板的使用:

    后端逻辑和页面表现分离-前后端分离
   
- 模板使用
   
   var swig = require('swig');
   
   app.engine('html',swig.renderFile);//定义模板引擎,使用swig.renderFile方法解析后缀为html的文件
   
   app.set('views','./views');//设置模板存放目录
   
   app.set('views engine','html');//注册模板引擎
   
   swig.setDefaults({cache:false});
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 It is maintained by PlusNie.