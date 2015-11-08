/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var async = require('async');
var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Story = Promise.promisifyAll(mongoose.model('Story'));
var Metric = Promise.promisifyAll(mongoose.model('Metric'));

var stories = [{
  date: "Fri Oct 23 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Hesed Kim",
  anthorDescription: "",
  image: "survey_results/R_2OYJpC3ag4S9uox~IMG_2962.jpg",
  title: "",
  text: "Cornell Tech Multidisciplinary Student Team explore NYC by foot!",
  rating: 3
}, {
  date: "Fri Oct 23 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Anonymous",
  anthorDescription: "",
  text: "This is a story, the best story ever told. ",
  rating: 3
}, {
  date: "Thurs Oct 22 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Anonymous",
  anthorDescription: "",
  image: "",
  title: "",
  text: "I love Cornell Tech because it is capable of giving me exactly the education I want: both challenging masters level computer science as well as top notch product design experience. The professors and students bring an unrelenting energy to their work. I wouldn't want to go anywhere else.",
  rating: 5
}, {
  date: "Thurs Oct 22 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Ian Folau",
  anthorDescription: "",
  title: "",
  text: "This is how much I love cookies from Cornell Tech",
  video: "survey_results/R_3Ecp0C4JNb1Y0tV~MyCTStory.mp4",
  rating: 4
}, {
  date: "Thurs Oct 22 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Claire Opila",
  anthorDescription: "",
  title: "",
  image: "survey_results/R_27dOaVct557R1Wy~IMG_4717.jpg",
  text: "My name is Claire. I am a full time IS, CM student at Cornell Tech. I am currently doing a studio sprint. ",
  rating: 3
}, {
  date: "Thurs Oct 22 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Anonymous",
  anthorDescription: "",
  title: "",
  image: "survey_results/R_2sbYVGnvveKIWrj~IMG_2009.jpg",
  text: "",
  rating: 1
}, {
  date: "Thurs Oct 22 2015",
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Carlos Fernandez",
  anthorDescription: "",
  title: "",
  image: "survey_results/R_807zMYzZzyNRW01~image.jpg",
  text: "",
  rating: 1
}];

stories = stories.map(function(datum) {
  return new Story(datum);
});

var metrics = [{
  value: "10,000+",
  name: "Students",
  date: "Jun 04, 14"
}, {
  value: "83%",
  name: "Students graduated/still enrolled",
  date: "Nov 04, 14"
}, {
  value: "20,000+",
  name: "Field Placements",
  date: "Sep 18, 14"
}, {
  value: "92%",
  name: "Post-Grad Job Placement Rate",
  date: "Dec 31, 13"
}]

metrics = metrics.map(function(datum) {
  return new Metric(datum)
})

var users = [{
  email: 'investor',
  password: '123',
  role: 'investor'
}, {
  email: 'company',
  password: '123',
  role: 'company'
}, {
  email: 'VC',
  password: '123',
  role: 'VC'
}, {
  email: 'public',
  password: '123',
  role: 'public'
}, {
  email: 'admin',
  password: 'admin',
  role: 'admin'
}, {
  email: 'ct',
  password: '123',
  role: 'company',
  image: "https://pbs.twimg.com/profile_images/634014441462300672/2uKkwgQk.jpg",
  name: "Cornell Tech",
  description: "We develop pioneering leaders and technologies for the digital age.",
  website: "tech.cornell.edu",
  stories: stories,
  metrics: metrics,
}, {
  email: '2u',
  password: '123',
  role: 'company',
  image: "/2U.png",
  name: "2U",
  website: "http://2u.com",
  description: "Increasing access to quality education by partnering with leading universities to offer degree programs online",
}, {
  email: 'ss',
  password: '123',
  role: 'company',
  image: "http://citylightcap.com/img/heroes/shotspotter.jpg",
  name: "ShotSpotter",
  description: "This advanced Gunshot Location System pinpoints the location of gunfire in the real time and helps police reduce gun violence. "
}, {
  email: 'br',
  password: '123',
  role: 'company',
  image: "http://larryferlazzo.edublogs.org/files/2013/08/brainrush-q5dkeb.jpg",
  name: "BrainRush",
  description: "Developing adaptive learning games that keep students focused and learning faster."
}];

users = users.map(function(datum) {
  return new User(datum);
});

var all = users.concat(stories, metrics);
var models = [User, Story, Metric];

console.log('-removing-');
async.each(models,
  function(model, done) {
    model.remove({}, done);
  },
  function(err) {
    if (err) return console.error('error while removing documents', err);
    console.log('-done removing-');
    console.log('-saving-');
    async.each(all,
      function(doc, done) {
        doc.save(done);
      },
      function(err) {
        if (err) console.error('seed error', err);
        else console.log('-done saving-');
        console.log('---done seeding---');
        process.exit();
      }
    );
  }
);