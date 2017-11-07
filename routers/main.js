/**
 * Created by PlusNie on 2017/11/5.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    // res.send('main-user');
    //console.log(req.userInfo);
    res.render('main/index',{
        userInfo: req.userInfo
    });
});

module.exports = router;