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

// post a new story (sends it back to frontend)
router.post('/', function(req, res, next) {
    var story = new Story(req.body);
    story.save(function(err, savedStory) {
        if (err) return next(err);
        res.status(201).json(savedStory);
    });
});
