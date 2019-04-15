// models/post.js
var multer = require('multer');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: 'string',
    image: 'string',
    text: 'string'
});


module.exports = mongoose.model('Post', postSchema);