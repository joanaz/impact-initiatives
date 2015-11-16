'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

var mongoose = require('mongoose');
var Category = mongoose.model('Category');

router.get('/', function(req, res, next) {
  Category.find(req.query).exec()
    .then(function(categories) {
      res.json(categories);
    })
    .then(null, next);
});

router.post('/', function(req, res, next) {
  var category = new Category(req.body);
  category.save(function(err, savedCategory) {
    if (err) return next(err);
    res.status(201).json(savedCategory);
  });
});

router.param('id', function(req, res, next, id) {
  Category.findById(id).exec()
    .then(function(category) {
      if (!category) throw Error('Not Found');
      req.category = category;
      next();
    })
    .then(null, function(e) {
      if (e.name === 'CastError' || e.message === 'Not Found') e.status = 404;
      next(e);
    });
});

router.get('/:id', function(req, res, next) {
  res.json(req.category);
});

router.put('/:id', function(req, res) {
  _.merge(req.category, req.body);
  req.category.save()
    .then(function(category) {
      res.json(category);
    })
    .then(null, next);
});