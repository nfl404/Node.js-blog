/**
 * Created by PlusNie on 2017/11/6.
 */

var mongoose = require('mongoose');

var categorySchema = require('../schemas/categories');

module.exports = mongoose.model('Category',categorySchema);