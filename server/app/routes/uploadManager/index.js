'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');

// config the uploader
var options = {
    tmpDir: __dirname + '/../../../../public/uploaded/tmp',
    publicDir: __dirname + '/../../../../public/uploaded',
    uploadDir: __dirname + '/../../../../public/uploaded/files',
    uploadUrl: '/uploaded/files/',
    maxPostSize: 11000000000, // 11 GB
    minFileSize: 1,
    maxFileSize: 10000000000, // 10 GB
    acceptFileTypes: /.+/i,
    // Files not matched by this regular expression force a download dialog,
    // to prevent executing any scripts in the context of the service domain:
    inlineFileTypes: /\.(gif|jpe?g|png)$/i,
    imageTypes: /\.(gif|jpe?g|png)$/i,
    imageVersions: {
        maxWidth: 80,
        maxHeight: 80
    },
    accessControl: {
        allowOrigin: '*',
        allowMethods: 'OPTIONS, HEAD, GET, POST, PUT, DELETE',
        allowHeaders: 'Content-Type, Content-Range, Content-Disposition'
    },
    storage : {
        type : 'local'
    },
    nodeStatic: {
        cache: 3600 // seconds to cache served files
    }
};

var uploader = require('blueimp-file-upload-expressjs')(options);


router.get('/upload', function(req, res) {
    uploader.get(req, res, function(err, obj) {
        res.send(JSON.stringify(obj));
    });

});

router.post('/upload', function(req, res) {
    console.log(req);
    uploader.post(req, res, function(err, obj) {
        res.send(JSON.stringify(obj));
    });

});

router.delete('/uploaded/files/:name', function(req, res) {
    uploader.delete(req, res, function(err, obj) {
        res.send(JSON.stringify(obj));
    });
});
