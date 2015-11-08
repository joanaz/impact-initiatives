'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/stories', require('./stories'));
router.use('/users', require('./users'));
// router.use('/companies', require('./companies'))
router.use('/contacts', require('./contacts'))

// Make sure this is after all of
// the registered routes!
router.use(function(req, res) {
  res.status(404).end();
});