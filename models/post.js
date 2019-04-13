// models/post.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: 'string',
    image: 'string',
    text: 'string'
});


module.exports = mongoose.model('Post', postSchema);