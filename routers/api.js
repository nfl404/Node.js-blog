/**
 * Created by PlusNie on 2017/11/5.
 */

var express = require('express');
var router = express.Router();
var User = require('../models/User');

//统一返回格式
var responseData;

router.use(function (req,res,next) {
    responseData = {
        code: 0,
        message: ''
    }
    next();
})

/**
 * 用户注册
 *  注册逻辑
 *  1。用户名不能为空
 *  2。密码不能为空
 *  3。两次输入密码不一致
 *
 *  1。用户是否已经被注册了
 *      数据库查询
 */
router.post('/user/register',function (req, res, next) {
    //console.log('register');
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;

    //用户是否为空
    if (username == '') {
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return;
    }

    //密码不能为空
    if (password == ''){
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }

    //确认密码不能为空
    if (repassword == '') {
        responseData.code = 3;
        responseData.message = '确认密码不能为空';
        res.json(responseData);
        return;
    }

    //两次输入的密码不一致
    if (password != repassword) {
        responseData.code = 4 ;
        responseData.message = '两次输入的密码不一致';
        res.json(responseData);
        return;
    }
    //用户名是否已经被注册了
    User.findOne({
        username: username
    }).then(function (userInfo) {
        //console.log(userInfo);
        if (userInfo) {
            responseData.code = 5;
            responseData.message = '用户名已经被注册了';
            res.json(responseData);
            return;
        }
        //保存用户注册的信息到数据库中
        var user= new User({
            username: username,
            password: password
        });
        return user.save();
    }).then(function (newUserInfo) {
       //console.log(newUserInfo);
        //注册成功
        responseData.message = '注册成功';
        res.json(responseData);
        return;
    });
});

/**
 * 登陆
 */
router.post('/user/login',function (req,res,next) {

    var username = req.body.username;
    var password = req.body.password;

    //用户名和密码不能为空
    if (username == '' || password == '') {
        responseData.code = 1;
        responseData.message = '用户名和密码不能为空';
        res.json(responseData);
        return;
    }

    //查询数据库中相同用户名和密码的记录是否存在，如果存在则登录成功
    User.findOne({
        username: username,
        password: password
    }).then(function (userInfo) {
        //console.log(userInfo);
        if (!userInfo) {
            responseData.code = 2;
            responseData.message = '用户名或密码错误';
            res.json(responseData);
            return;
        }
        responseData.message  = '登陆成功';
        responseData.userInfo = {
            _id : userInfo._id,
            username : userInfo.username
        }
        res.json(responseData);
        return;
    });
})

module.exports = router;