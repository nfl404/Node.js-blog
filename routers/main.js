/**
 * Created by PlusNie on 2017/11/5.
 */
var express = require('express');
var router = express.Router();

var Category = require('../models/Category');
var Content = require('../models/Content');

/**
 * 前台首页
 */
router.get('/',function (req, res, next) {
    // res.send('main-user');
    //console.log(req.userInfo);
    var data = {
        userInfo: req.userInfo,
        category: req.query.category || '',
        categories: [],
        page: Number(req.query.page || 1),
        count: 0,
        limit: 3,
        pages: 1
    };

    var where = {};
    if (data.category) {
        where.category = data.category;
    }

    Category.find().then(function (categories) {
        console.log(categories);
        data.categories = categories;
        return Content.where(where).count();
    }).then(function (count) {
        data.count = count;
        //计算总页数
        data.pages = Math.ceil(data.count/data.limit); //向上区取整
        data. page = Math.min(data.page,data.pages); //取值不能超过pages
        data. page = Math.max(data.page, 1); //取值不能小于1

        var skip = (data.page -1 ) * data.limit;

        return  Content.where(where).find().sort({_id: -1}).limit(data.limit).skip(skip).populate(['category','user']).sort({
            addTime: -1
        });
    }).then(function (contents) {
        data.contents = contents;
        console.log(data);
        res.render('main/index', data);
    })

});

module.exports = router;