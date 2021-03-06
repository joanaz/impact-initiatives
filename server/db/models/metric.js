'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String
  },
  data: [{
    value: {
      type: String
    },
    date: {
      type: Date
    }
  }]
});

mongoose.model('Metric', schema);