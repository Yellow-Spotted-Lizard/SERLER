const mongoose = require('mongoose');  

const evidenceSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: String,
  authors: [{
    firstName: String,
    lastName: String
  }],
  url: { type: String, required: true },
  date: Date,
  keywords: [String],
});

// use `url` field as key
evidenceSchema.path('url').set(function(url) {
  this.url = url;
  this._id = url;
  return url;
})

const Evidence = mongoose.model('Evidence', evidenceSchema);

module.exports = Evidence;