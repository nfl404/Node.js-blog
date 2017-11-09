/**
 * Created by PlusNie on 2017/11/5.
 */

var mongoose = require('mongoose');

//分类的表结构
module.exports = new mongoose.Schema({
    //分类名称
    name: String
});