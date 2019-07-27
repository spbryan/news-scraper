/********************************
  * Comment.js for News Scraper
  * 
  * @author Sean Bryan
  * 
  * 2019-07-27
  ********************************/
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  body: String
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
