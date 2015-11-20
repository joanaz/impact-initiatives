'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    image: {
        type: String
    },
    video: {
        type: String
    },
    profile: {
        type: String
    },
    author: {
        type: String
    },
    anthorDescription: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    rating: {
        type: Number
    },
    date: {
        type: Date
    },
    public: {
        type: Boolean,
        default: false
    }
    // writer: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    // company: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
});

mongoose.model('Story', schema);