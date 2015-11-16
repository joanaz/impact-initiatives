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
var Category = Promise.promisifyAll(mongoose.model('Category'));

var date1 = new Date(2015, 10, 23);
var date2 = new Date(2015, 10, 22);

var categories = [{
  image: "http://www.houseintuscany.com/sub_category_copies/0000/0006/photo_education.jpg?1410270167",
  name: "Education & Media",
  description: "Ensure that the right technology is leveraged as fully as possible to deliver the best possible education to learners everywhere.",
}, {
  image: "http://www.metro.us/_internal/gxml!0/4dntvuhh2yeo4npyb3igdet73odaolf$fsf867qru2psg24byqk48w8os841zyh/shotSpotter.jpeg",
  name: "Safety & Security",
  description: "Ensure that the best safety and security platforms receive the funding and support they need.",
}, {
  image: "http://www.eurocontrol.int/sites/default/files/styles/colorbox-max/public/illustration/environmental-protection.jpg?itok=cIdgasYM",
  name: "Energy & Environment",
  description: "Conserving energy and natural resources is critical to the health and future of our planet.",
}]

categories = categories.map(function(datum) {
  return new Category(datum)
});

var stories = [{
  date: date1.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Hesed Kim",
  anthorDescription: "",
  image: "survey_results/R_2OYJpC3ag4S9uox~IMG_2962.jpg",
  title: "",
  text: "Cornell Tech Multidisciplinary Student Team explore NYC by foot!",
  rating: 3
}, {
  date: date1.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Anonymous",
  anthorDescription: "",
  text: "This is a story, the best story ever told. ",
  rating: 3
}, {
  date: date2.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Anonymous",
  anthorDescription: "",
  image: "",
  title: "",
  text: "I love Cornell Tech because it is capable of giving me exactly the education I want: both challenging masters level computer science as well as top notch product design experience. The professors and students bring an unrelenting energy to their work. I wouldn't want to go anywhere else.",
  rating: 5
}, {
  date: date2.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Ian Folau",
  anthorDescription: "",
  title: "",
  text: "This is how much I love cookies from Cornell Tech",
  video: "survey_results/R_3Ecp0C4JNb1Y0tV~MyCTStory.mp4",
  rating: 4
}, {
  date: date2.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Claire Opila",
  anthorDescription: "",
  title: "",
  image: "survey_results/R_27dOaVct557R1Wy~IMG_4717.jpg",
  text: "My name is Claire. I am a full time IS, CM student at Cornell Tech. I am currently doing a studio sprint. ",
  rating: 3
}, {
  date: date2.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Anonymous",
  anthorDescription: "",
  title: "",
  image: "survey_results/R_2sbYVGnvveKIWrj~IMG_2009.jpg",
  text: "",
  rating: 1
}, {
  date: date2.toDateString(),
  profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
  author: "Carlos Fernandez",
  anthorDescription: "",
  title: "",
  image: "survey_results/R_807zMYzZzyNRW01~image.jpg",
  text: "",
  rating: 1
}];

stories = stories.map(function(datum) {
  return new Story(datum)
});

var metrics_2u = [{
  name: "Students",
  data: [{
    value: "10,000+",
    date: "Jun 04, 14"
  }]
}, {
  name: "Students graduated/still enrolled",
  data: [{
    value: "83%",
    date: "Nov 04, 14"
  }]
}, {
  name: "Field Placements",
  data: [{
    value: "20,000+",
    date: "Sep 18, 14"
  }]
}, {
  name: "Post-Grad Job Placement Rate",
  data: [{
    value: "92%",
    date: "Dec 31, 13"
  }]
}]

var metrics_ct = [{
  name: "Students",
  data: [{
    value: "150",
    date: "Aug 20, 15"
  }]
}, {
  name: "Startups created",
  data: [{
    value: "10",
    date: "Aug 20, 15"
  }]
}, {
  name: "Research projects",
  data: [{
    value: "40",
    date: "Sep 18, 14"
  }]
}, {
  name: "Countries students come from",
  data: [{
    value: "20",
    date: "Dec 31, 13"
  }]
}]

metrics_2u = metrics_2u.map(function(datum) {
  return new Metric(datum)
})

metrics_ct = metrics_ct.map(function(datum) {
  return new Metric(datum)
})

var portfolio = [{
  email: 'admin@2u.com',
  password: '123',
  role: 'Company',
  image: "/2U.png",
  name: "2U",
  website: "http://2u.com",
  description: "Increasing access to quality education by partnering with leading universities to offer degree programs online",
  category: categories[0],
  metrics: metrics_2u
}, {
  email: 'ss',
  password: '123',
  role: 'Company',
  image: "http://citylightcap.com/img/heroes/shotspotter.jpg",
  name: "ShotSpotter",
  description: "This advanced Gunshot Location System pinpoints the location of gunfire in the real time and helps police reduce gun violence. ",
  category: categories[1]

}, {
  email: 'et',
  password: '123',
  role: 'Company',
  image: "http://www.citylightcap.com/img/heroes/enertrac.jpg",
  name: "EnerTrac",
  description: "A provider of game-changing tank delivery automation technology that optimizes fuel delivery and reduces carbon waste.",
  category: categories[2]

}]

portfolio = portfolio.map(function(datum) {
  return new User(datum)
});

var users = [{
  email: 'investor',
  password: '123',
  role: 'Investor'
}, {
  email: 'city@light.com',
  password: '123',
  role: 'VC',
  image: "http://www.citylightcap.com/img/logo.png",
  name: "City Light Capital",
  description: "Invest forward, and further what's possible",
  portfolio: portfolio
}, {
  email: 'public',
  password: '123',
  role: 'Community'
}, {
  email: 'admin',
  password: 'admin',
  role: 'Admin'
}, {
  email: 'tech@cornell.edu',
  password: '123',
  role: 'Company',
  image: "https://pbs.twimg.com/profile_images/634014441462300672/2uKkwgQk.jpg",
  name: "Cornell Tech",
  description: "We develop pioneering leaders and technologies for the digital age.",
  website: "tech.cornell.edu",
  stories: stories,
  metrics: metrics_ct,
  category: categories[0]
}];

users = users.map(function(datum) {
  return new User(datum);
});

var all = categories.concat(stories, metrics_2u, metrics_ct, portfolio, users);
var models = [Category, Story, Metric, User];

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