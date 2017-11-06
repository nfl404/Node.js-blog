/**
 * Created by PlusNie on 2017/11/5.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    // res.send('main-user');
    res.render('main/index');
});

module.exports = router;