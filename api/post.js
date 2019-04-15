// api/post.js

var Post = require('../models/post');
var Comment = require('../models/comment');

module.exports.getAllPosts = function(req, res) {
    Post.find(function(err, posts) {
        if (err) {
            res.send(err);
        }
        res.json({posts: posts});
    }).sort({x:1});
};


module.exports.addPost = function(req, res) {
    var post = new Post(req.body.post);
    post.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({post: post});
    });
};