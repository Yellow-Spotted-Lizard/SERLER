const userService = require('./user-service');
const User = require('../model/user');

exports.getInitialUserList = function() {
    // Eirik Guestsson - Guest
    var guest = {
        login: 'eirik',
        password: 'Passw0rd',
        full_name: 'Eirik Guestsson',
        email: 'eirik.guestsson@allzeek.com',
        role: 'guest'
    };

    // Veleif Usersson - User
    var user = {
        login: 'veleif',
        password: 'Passw0rd',
        full_name: 'Veleif Usersson',
        email: 'veleif.usersson@allzeek.com',
        role: 'user'
    };

    // Torhild Analystdottir - Analyst
    var analyst = {
        login: 'analyst',
        password: 'Passw0rd',
        full_name: 'Torhild Analystdottir',
        email: 'torhild.analystdottir@allzeek.com',
        role: 'analyst'
    };

    // Ragneid Moderatordottir - Moderator
    var moderator = {
        login: 'ragneid',
        password: 'Passw0rd',
        full_name: 'Ragneid Moderatordottir',
        email: 'ragneid.moderatordottir@allzeek.com',
        role: 'moderator'
    };

    // Ornolf Submittersson - Submitter
    var submitter = {
        login: 'ornolf',
        password: 'Passw0rd',
        full_name: 'Ornolf Submittersson',
        email: 'ornolf.submittersson@allzeek.com',
        role: 'submitter'
    };

    // Asgard Admindottir - Admin
    var admin = {
        login: 'asgard',
        password: 'Passw0rd',
        full_name: 'Asgard Admindottir',
        email: 'asgard.admindottir@allzeek.com',
        role: 'admin'
    };

    var userList = [];
    userList.push(guest);
    userList.push(user);
    userList.push(analyst);
    userList.push(moderator);
    userList.push(submitter);
    userList.push(admin);

    return userList;
}

exports.getUserList = function(res) {
    User.find(function(err, users) {
        if (err) {
            console.info(err);
        } 
        else {
            if (users != null) {
                res.json(users);
            }
        }
    }).sort({login: 'Asc'}); 
} 

exports.getUserByLogin = function(login, res) {
    User.findOne({ login: login }, function(err, user) {
        if (err) {
            console.info(err);
        } 
        else {
            if (user != null) {
                res.json(user);
            }
            else {
                res.json(null);
            }
        }
    });
}

exports.getUserById = function(id) {
    User.findById(id, function(err, user) {
        if (err) {
            console.info(err);
        } 
        else {
            if (user != null) {
                res.json(user);
            }
            else {
                res.json(null);
            }
        }
    });
}
