'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/stories', require('./stories'));
router.use('/users', require('./users'));
router.use('/categories', require('./categories'))
router.use('/contacts', require('./contacts'))
router.use('/metrics', require('./metrics'))

// Make sure this is after all of
// the registered routes!
router.use(function(req, res) {
  res.status(404).end();
});