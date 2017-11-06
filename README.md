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
   

##### 静态文件托管

- 模板引擎的配置和使用

   app.use('/public',express.static(__dirname + '/public'));
   
   1.用户发送http请求->url->解析路由->找到匹配的规则->制定绑定的函数,返回对应内容至用户
   
   2./public->静态->直接读取制定目录下的文件,返回给用户
   
   3.动态->处理业务逻辑,加载模板,即系模板->返回数据给用户
   
   
##### 模块划分

- 模块划分
    
    根据功能进行模块划分:
    
    后台:app.use('/admin',require('./router/admin'));
    
    前台:app.use('/',require('./router/main'));
    
    Api:app.use('api',require('.router/api'));
    
    
##### 前台路由+模板

- main模块

    /                   首页
    
    /view               内容也
    
##### api路由+模板
    
- api模块

    /                   首页
    
    /register           用户注册
    
    /login              用户登录
    
    /comment            评论获取
    
    /comment/post       评论提交
 
##### 后台路由+模板
    
- admin模块
    
    /                   首页
    
    用户管理
    
    /user               用户列表
    
    分类管理
    
    /category           分类列表
        
    /category/add       分类添加
    
    /category/edit      分类修改
    
    /category/delete    分类删除
   
    文章管理
    
    /article            内容列表
    
    /article/add        内容添加
    
    /article/edit       内容修改
    
    /article/delete     内容删除
    
    评论管理
    
    /comment            评论列表
    
    /comment/delete     评论删除
    
##### 功能开发顺序

- 功能模块开发顺序

    用户
    
    栏目
    
    内容
    
    评论
    
- 编码顺序

    通过Schema定义设计数据村塾结构
    
    功能逻辑
    
    页面展示
    
##### 用户注册

- UserSchema结构设计

- 注册界面

- 注册逻辑

    使用ajax方式实现注册
    
    api接口编写
   
   
##### Mongodb数据库

- 开启mongodb数据库

    mongodb --dbpath=数据文件保存路径

    https://www.mongodb.com

- 数据库保存

    使用mongoose操作数据库

    http:mongoosejs.com/

- 创建model

    通过Schema创建模型类

    mongoose.model('模型类名称', Schema);
   
   
   
   
   
   
   
   
   
   
   
 It is maintained by PlusNie.