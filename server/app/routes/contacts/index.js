'use strict';
var router = require('express').Router();
module.exports = router;
var _ = require('lodash');
var nodemailer = require('nodemailer');

var multiparty = require('multiparty');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.csv')
  }
});

var upload = multer({
  storage: storage
});

router.get('/sendEmail', function(req, res, next) {
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  res.end(
    '<form action="send" enctype="multipart/form-data" method="post">' +
    '<input type="file" name="upload"><br>' +
    '<input type="text" name="subject"><br>' +
    '<input type="text" name="html"><br>' +
    '<input type="submit" value="Upload">' +
    '</form>'
  );
});

router.post('/send', upload.single('upload'), function(req, res, next) {
	var fs = require('fs');
	var parse = require('csv-parse');
	var parser = parse({delimiter: ';'}, function(err, data){
		var emails = data[0].join();
	  	var transporter = nodemailer.createTransport({
			service: 'Gmail',
			auth: {
				user: '2nd.bottom.line@gmail.com',
				pass: 'CityLightC@pital'
			}
		});

		var mailOptions = {
			from: 'LoopFeed <2nd.bottom.line@gmail.com>',
			//to: 'hz375@cornell.edu, rz258@cornell.edu, dam363@cornell.edu, bod4@cornell.edu, air38@cornell.edu',
			to: emails,
			subject: JSON.parse(req.body.data)["subject"],
			text: 'Test Email',
			html: JSON.parse(req.body.data)["html"]
		};

		transporter.sendMail(mailOptions, function(error, info) {
			if (error) {
				console.log(error);
				res.redirect('/');
			} else {
				console.log('Message Sent: ' + info.response);
				res.redirect('/');
			}
		});
	});
	fs.createReadStream(__dirname+'/../../../../public/'+req.file.path.substring(7)).pipe(parser);
});