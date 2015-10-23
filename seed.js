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

connectToDb.then(function() {
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