/**
 * Created by PlusNie on 2017/11/5.
 */

var express = require('express');
var router = express.Router();

var User = require('../models/User');
var Category = require('../models/Category');

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
            res.render('admin/user_index', {
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

/**
 * 分类首页
 */
router.get('/category',function (req,res,next) {
    res.render('admin/category_index',{
        userInfo:req.userInfo
    });
});

/**
 * 分类的添加
 */
router.get('/category/add',function (req, res, next) {
    res.render('admin/category_add',{
        userInfo:req.userInfo
    });
});

/**
 * 分类的保存
 */
router.post('/category/add',function (req,res,next){
    //console.log(req.body);
    var name = req.body.name || '';
    if (name == '') {
        res.render('admin/error',{
            userInfo: req.userInfo,
            message: '名称不能为空'
        });
        return;
    }
    // 数据库中是否已经存在同名分类名称
    Category.findOne({
        name: name
    }).then(function (rs) {
        //console.log(rs);
        if (rs) {
            //数据库中已经存在该分类了
            res.render('admin/error',{
                userInfo: req.userInfo,
                message: '分类已经存在了'
            });
            return Promise.reject();
        } else {
            //数据库中不存在分类，可以保存
            return new Category({
                name: name
            }).save();
        }
    }).then(function (newCategory) {
        //console.log(newCategory);
        res.render('admin/success',{
            userInfo: req.userInfo,
            message: '分类保存成功',
            url: '/admin/category'
        });
    })
})


module.exports = router;
