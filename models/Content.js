/**
 * Created by PlusNie on 2017/11/6.
 */

var mongoose = require('mongoose');

var contentSchema = require('../schemas/contents');

module.exports = mongoose.model('Content',contentSchema);