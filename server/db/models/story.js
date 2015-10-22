'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    text: {
        type: String
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Story', schema);