/**
 * Created by PlusNie on 2017/11/5.
 */

var express = require('express');
var router = express.Router();

router.get('/user',function (req,res,next) {
    res.send('Admin_User');
});

module.exports = router;
