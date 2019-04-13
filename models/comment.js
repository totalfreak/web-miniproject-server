// models/comment.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	text: 'string'
});

module.exports = mongoose.model('Comment', commentSchema);