/**
 * Created by PlusNie on 2017/11/5.
 */

var express = require('express');
var router = express.Router();

router.get('/user',function (req, res, next) {
    res.send('api-user');
});

module.exports = router;