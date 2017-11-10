/**
 * Created by PlusNie on 2017/11/5.
 */
var express = require('express');
var router = express.Router();

var Category = require('../models/Category');

router.get('/',function (req, res, next) {
    // res.send('main-user');
    //console.log(req.userInfo);

    Category.find().then(function (categories) {
        console.log(categories);
        res.render('main/index',{
            userInfo: req.userInfo,
            categories:categories
        });
    })

});

module.exports = router;