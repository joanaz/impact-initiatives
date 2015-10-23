'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

var mongoose = require('mongoose');
var Story = mongoose.model('Story');

var multiparty = require('multiparty'); // https://github.com/andrewrk/node-multiparty
var multer = require('multer');
var AWS = require('aws-sdk');

var accessKeyId = 'AKIAJRXI4IXUK4RSQHAA';
var secretAccessKey = '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';

AWS.config.update({
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});

var s3 = new AWS.S3();

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

router.get('/file', function(req, res, next){    
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
      '<form action="upload" enctype="multipart/form-data" method="post">'+
      '<input type="file" name="upload"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );
});

//router.post('/upload', function(req, res, next) {
//    var form = new multiparty.Form();    
//    form.parse(req, function(err, fields, files) {
        //console.log(files);
//        if (err) {
//            res.writeHead(400, {'content-type': 'text/plain'});
//            res.end("invalid request: " + err.message);
//            return;
//        }
//        console.log('fileds');
//        console.log(files);
//        res.writeHead(200, {'content-type': 'text/plain'});
//        res.write('received fields:\n\n '+util.inspect(fields));
//        res.write('\n\n');
//        res.end('received files:\n\n '+util.inspect(files));
//    });
//});

//var upload = multer({ // https://github.com/expressjs/multer
//  dest: './public/uploads/',
//  onFileUploadData: function (file, data, req, res) {
//    console.log('on file upload');
//    var params = {
//      Bucket: 'node-upload-dev',
//      Key: file.name,
//      Body: data
//    };
//
//    s3.putObject(params, function (perr, pres) {
//      if (perr) {
//        console.log("Error uploading data: ", perr);
//      } else {
//        console.log("Successfully uploaded data to myBucket/myKey");
//      }
//    });
//  }
//});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

var upload = multer({ storage: storage });

router.post('/upload', 
upload.single('upload'),
function(req, res){
    console.log('here');
    console.log(req.file);
    //if(req.files.image !== undefined){ // `image` is the field name from your form
    res.redirect("/uploads"); // success
    //}else{
    //    res.send("error, no file chosen");
    //}
});
