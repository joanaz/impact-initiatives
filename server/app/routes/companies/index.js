'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

var mongoose = require('mongoose');
var Company = mongoose.model('Company');
var Story = mongoose.model('Story');

var multiparty = require('multiparty');
var multer = require('multer');

// get all company (optionally sort by parameters)
router.get('/', function(req, res, next) {
    Company.find({}).exec()
    .then(function(companies) {
        res.json(companies);
    })
    .then(null, next);
});

router.get('/file', function(req, res, next){    
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
      '<form action="upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="url"><br>'+
      '<input type="text" name="title"><br>'+
      '<input type="text" name="text"><br>'+
      '<input type="text" name="website"><br>'+
      '<input type="file" name="upload"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );
});

router.get('/story', function(req, res, next){    
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
      '<form action="upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="url"><br>'+
      '<input type="text" name="title"><br>'+
      '<input type="text" name="text"><br>'+
      '<input type="text" name="website"><br>'+
      '<input type="file" name="upload"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

var upload = multer({ storage: storage });

router.post('/upload', upload.single('upload'),
    function(req, res){
        console.log('here');
        console.log(req.body);
        console.log(req.file.path.substring(7));
        var company = new Company(req.body);
        company["image"] = req.file.path.substring(7);
        company.save(function(err, savedCompany) {
            if (err) return next(err);
            res.status(200).json(savedCompany);
        });
});

// post a new company (sends it back to frontend)
router.post('/', function(req, res, next) {
    console.log(req.body);
    var company = new Company(req.body);
    company.save(function(err, savedCompany) {
        if (err) return next(err);
        res.status(201).json(savedCompany);
    });
});

router.param('id', function(req, res, next, id) {
    Company.findById(id).exec()
        .then(function(company) {
            if (!company) throw Error('Not Found');
            req.company = company;
            next();
        })
        .then(null, function(e) {
            if (e.name === 'CastError' || e.message === 'Not Found') e.status = 404;
            next(e);
        });
});

router.put('/:id', upload.single('upload'),
    function(req, res) {
        var story = new Story(req.body);
        story.company = req.company.id;
        story["image"] = req.file.path.substring(7);
        story["date"] = new Date();
        story.save(function(err, savedStory) {
            if (err) return next(err);
            res.status(201).json(savedStory);
        }).then(function() {
            req.company.stories.push(story.id);
            req.company.save().then(function(company) {
                res.json(company);
            })
            .then(null, next);
        });
});