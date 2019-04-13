// app/router.js

var posts = require('../api/post');
module.exports = function(router) {

    // Posting a new post and getting all posts afterwards
    router.route('/api/posts').post(function(req, res) {
        console.log(req.body);
        posts.addPost(req, res);        
    }).get(function(req, res) {
        posts.getAllPosts(req,res);
    });

};