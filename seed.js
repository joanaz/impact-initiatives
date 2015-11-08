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

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));
var Company = Promise.promisifyAll(mongoose.model('Company'));
var Story = Promise.promisifyAll(mongoose.model('Story'));
var async = require('async');

var seedUsers = function() {

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
    }];

    return User.createAsync(users);

};

// var story;

// User.findOne().then(function(user) {
//     story.writer = user.id;
//     User.findOne().then(function(user) {
//         story.company = user.id
//         Story.create(story)
//     })
// })
var seedCompanies = function() {
    Story.removeAsync();
    var company_stories = [{
      date: "Fri Oct 23 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Hesed Kim",
      anthorDescription: "",
      image: "survey_results/R_2OYJpC3ag4S9uox~IMG_2962.jpg",
      title: "",
      text: "Cornell Tech Multidisciplinary Student Team explore NYC by foot!"
    }, {
      date: "Fri Oct 23 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Anonymous",
      anthorDescription: "",
      text: "This is a story, the best story ever told. "
    }, {
      date: "Thurs Oct 22 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Anonymous",
      anthorDescription: "",
      image: "",
      title: "",
      text: "I love Cornell Tech because it is capable of giving me exactly the education I want: both challenging masters level computer science as well as top notch product design experience. The professors and students bring an unrelenting energy to their work. I wouldn't want to go anywhere else."
    }, {
      date: "Thurs Oct 22 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Ian Folau",
      anthorDescription: "",
      title: "",
      text: "This is how much I love cookies from Cornell Tech",
      video: "survey_results/R_3Ecp0C4JNb1Y0tV~MyCTStory.mp4"
    }, {
      date: "Thurs Oct 22 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Claire Opila",
      anthorDescription: "",
      title: "",
      image: "survey_results/R_27dOaVct557R1Wy~IMG_4717.jpg",
      text: "My name is Claire. I am a full time IS, CM student at Cornell Tech. I am currently doing a studio sprint. "
    }, {
      date: "Thurs Oct 22 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Anonymous",
      anthorDescription: "",
      title: "",
      image: "survey_results/R_2sbYVGnvveKIWrj~IMG_2009.jpg",
      text: ""
    }, {
      date: "Thurs Oct 22 2015",
      profile: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png",
      author: "Carlos Fernandez",
      anthorDescription: "",
      title: "",
      image: "survey_results/R_807zMYzZzyNRW01~image.jpg",
      text: ""
    }];
    company_stories=company_stories.map(function(datum) {return new Story(datum);});
    var companies = [{
        image: "https://pbs.twimg.com/profile_images/634014441462300672/2uKkwgQk.jpg",
        title: "Cornell Tech",
        url: "cornell-tech",
        text: "We develop pioneering leaders and technologies for the digital age.",
        website: "tech.cornell.edu",
        stories: company_stories
    }, {
        image: "/2U.png",
        title: "2U",
        url: "2u",
        website: "http://2u.com",
        text: "Increasing access to quality education by partnering with leading universities to offer degree programs online",
    },
    {
        image: "http://citylightcap.com/img/heroes/shotspotter.jpg",
        title: "ShotSpotter",
        text: "This advanced Gunshot Location System pinpoints the location of gunfire in the real time and helps police reduce gun violence. "
    }, {
        image: "http://larryferlazzo.edublogs.org/files/2013/08/brainrush-q5dkeb.jpg",
        title: "BrainRush",
        text: "Developing adaptive learning games that keep students focused and learning faster."
    }];
    Company.removeAsync();
    async.each(company_stories, function(story, done){
        story.save(done);
    }, function(err) {
        console.log(err);
    });
    return Company.createAsync(companies);
};

var seedStories = function() {

    
    Story.removeAsync();
    return Story.createAsync(stories);
};

connectToDb.then(function() {
    seedCompanies();
    //seedStories()
    User.findAsync({}).then(function(users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function() {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function(err) {
        console.error(err);
        process.kill(1);
    });
});