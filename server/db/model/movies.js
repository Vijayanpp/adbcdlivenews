var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var movieSchema = new Schema({
  title: String,
  Creators: { Director: String, Author:String,Music:String},
  Cast: { Hero: String, Heroine:String,Villain:String},
  overview: String,
  review:Array,
  imageUrl: String,
  meta: {
    age: Number,
    website: String
  },
  release_at: Date,
  category: String
});

var Movie = mongoose.model('User', movieSchema);

// make this available to our users in our Node applications
module.exports =Movie;