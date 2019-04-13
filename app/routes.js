// app/router.js

var posts = require('../api/post');
module.exports = function(router) {

    // Posting a new post and get on same subdomain
    router.route('/api/posts').post(function(req, res) {
        console.log(req.body);
        posts.addPost(req, res);        
    }).get(function(req, res) {
        posts.getAllPosts(req,res);
    });

    router.route('*').get(function(req, res) {
        res.sendfile('../public/index.html'); // load our public/index.html file

    });

};