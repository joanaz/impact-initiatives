'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
});

mongoose.model('Category', schema);