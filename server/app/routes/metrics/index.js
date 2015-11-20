'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

var mongoose = require('mongoose');
var Metric = mongoose.model('Metric');

router.get('/', function(req, res, next) {
  Metric.find(req.query).exec()
    .then(function(metrics) {
      res.json(metrics);
    })
    .then(null, next);
});

router.post('/', function(req, res, next) {
  var metric = new Metric(req.body);
  metric.save(function(err, savedMetric) {
    if (err) return next(err);
    res.status(201).json(savedMetric);
  });
});

router.param('id', function(req, res, next, id) {
  Metric.findById(id).exec()
    .then(function(metric) {
      if (!metric) throw Error('Not Found');
      req.metric = metric;
      next();
    })
    .then(null, function(e) {
      if (e.name === 'CastError' || e.message === 'Not Found') e.status = 404;
      next(e);
    });
});

router.get('/:id', function(req, res, next) {
  res.json(req.metric);
});

router.put('/:id', function(req, res) {
  req.metric.data.push(req.body);
  req.metric.save()
    .then(function(metric) {
      res.json(metric);
    })
    .then(null, next);
});