'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Story = mongoose.model('Story');

var multiparty = require('multiparty');
var multer = require('multer');

// get all user (optionally sort by parameters)
router.get('/', function(req, res, next) {
  User.find(req.query).exec()
    .then(function(users) {
      res.json(users);
    })
    .then(null, next);
});

router.get('/file', function(req, res, next) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.end(
    '<form action="upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="url"><br>' +
    '<input type="text" name="title"><br>' +
    '<input type="text" name="text"><br>' +
    '<input type="text" name="website"><br>' +
    '<input type="file" name="upload"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
});

router.get('/story', function(req, res, next) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.end(
    '<form action="upload" enctype="multipart/form-data" method="post">' +
    '<input type="text" name="url"><br>' +
    '<input type="text" name="title"><br>' +
    '<input type="text" name="text"><br>' +
    '<input type="text" name="website"><br>' +
    '<input type="file" name="upload"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

var upload = multer({
  storage: storage
});

router.post('/upload', upload.single('upload'),
  function(req, res) {
    console.log('here');
    console.log(req.body);
    console.log(req.file.path.substring(7));
    var user = new User(req.body);
    user["image"] = req.file.path.substring(7);
    user.save(function(err, savedUser) {
      if (err) return next(err);
      res.status(200).json(savedUser);
    });
  });

// post a new user (sends it back to frontend)
router.post('/', function(req, res, next) {
  console.log(req.body);
  var user = new User(req.body);
  user.save(function(err, savedUser) {
    if (err) return next(err);
    res.status(201).json(savedUser);
  });
});

router.param('id', function(req, res, next, id) {
  User.findById(id)
    .populate('category stories metrics')
    .exec()
    .then(function(user) {
      if (!user) throw Error('Not Found');
      req.user = user;
      next();
    })
    .then(null, function(e) {
      if (e.name === 'CastError' || e.message === 'Not Found') e.status = 404;
      next(e);
    });
});

router.get('/:id', function(req, res, next) {
  res.json(req.user);
});

router.put('/:id', function(req, res) {
  _.merge(req.user, req.body);
  req.user.save()
    .then(function(user) {
      res.json(user);
    })
    .then(null, next);
});

router.put('/:id/newStory', upload.single('upload'), function(req, res) {
  var story = new Story(req.body);
  story.user = req.user.id;
  story["image"] = req.file.path.substring(7);
  story["date"] = new Date();
  story.save(function(err, savedStory) {
    if (err) return next(err);
    res.status(201).json(savedStory);
  }).then(function() {
    req.user.stories.push(story.id);
    req.user.save().then(function(user) {
        res.json(user);
      })
      .then(null, next);
  });
});