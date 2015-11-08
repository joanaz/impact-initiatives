'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    date: {
        type: Date
    },
    image: {
        type: String
    },
    url: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    website: {
        type: String
    },
    stories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }],
    metrics: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Metric'
    }]
});

mongoose.model('Company', schema);