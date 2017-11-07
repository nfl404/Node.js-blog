/**
 * Created by PlusNie on 2017/11/5.
 */

var express = require('express');
var router = express.Router();

var User = require('../models/User');

router.use(function (req,res,next) {
   if (!req.userInfo.isAdmin) {
       //如果当前用户是非管理员
       res.send('对不起，只有管理员才可以进入后台管理');
       return;
   }
   next();
});

/**
 * 后台管理
 */
router.get('/',function (req,res,next) {
    // res.send('Admin_User');
    res.render('admin/index', {
        userInfo: req.userInfo
    });
});
/**
 * 用户管理
 */
router.get('/user',function (req, res, next) {
    /**
     * 从数据库中读取所有用户数据
     *
     * limit(Number):限制获取的数据条数
     *
     * skip(2):或略数据的条数
     *
     * 每页显示2条
     * 1： 1-2 skip：0 -> (当前页-1)*limit
     * 2： 3-4 skip：2
     *
     */

    var page = Number(req.query.page || 1);
    var limit = 2;
    var pages = 1;

    User.count().then(function (count) {
        //计算总页数
        pages = Math.ceil(count/limit); //向上区取整
        page = Math.min(page,pages); //取值不能超过pages
        page = Math.max(page, 1); //取值不能小于1

        var skip = (page -1 ) * 2;

        User.find().limit(limit).skip(skip).then(function (users) {
            //console.log(users);
            res.render('admin/user', {
                userInfo: req.userInfo,
                users: users,
                count: count,
                pages: pages,
                limit: limit,
                page: page
            })
        });
    });

});
module.exports = router;
