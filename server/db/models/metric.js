'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    value: {
        type: String
    },
    date: {
        type: String
    }
});

mongoose.model('Metric', schema);