'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

var mongoose = require('mongoose');
var Story = mongoose.model('Story');

// get all stories (optionally sort by parameters)
router.get('/', function(req, res, next) {
    Story.find({}).exec()
    .then(function(stories) {
        res.json(stories);
    })
    .then(null, next);
});
