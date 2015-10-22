'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    text: {
        type: String
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Story', schema);