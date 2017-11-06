/**
 * Created by PlusNie on 2017/11/6.
 */

var mongoose = require('mongoose');

var userSchema = require('../schemas/users');

module.exports = mongoose.model('User',userSchema);