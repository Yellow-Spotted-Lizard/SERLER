const adminService = require('./admin-service');
const userService = require('./user-service');
const User = require('../model/user');

const successfulResult = {
    status: true,
    message: 'The operation has been successfully completed'
}

const unexpectedResult = {
    status: false,
    message: 'The unexpected exception has been thrown'
}

const notImplementedResult = {
    status: false,
    message: 'The operation has not been implemented'
}

var errorResult = {
    status: false,
    message: '<error>'
}

exports.seedUsers = function (res) {
    User.findOne({ login: '# asgard' }, function(err, user) {
        if (err) {
            console.info(err);
        } 
        else {
            if (user == null) {
                var userList = userService.getInitialUserList();
                userList.forEach(function (value, index, array) {
                    var user = new User();
                    user.login = value.login;
                    user.password = value.password;
                    user.full_name = value.full_name;
                    user.email = value.email;
                    user.role = value.role;
            
                    user.markModified("login");
                    user.markModified("password");
                    user.markModified("full_name");
                    user.markModified("full_name");
                    user.markModified("email");
            
                    user.save()
                    .then(user => {
                        if (res != null) {
                            res.status(200).json({'user': 'user added successfully'});
                        }
                    })
                    .catch(err => {
                        if (res != null) {
                            res.status(400).send('Unable to add new user. Error: ' + err.message);
                        }
                    });
                });
            }
            else {
                if (res != null) {
                    res.json(successfulResult);
                }
            }
        }
    });
    
    return successfulResult;
}

exports.disposeUsers = function (res) {
    User.deleteMany({ }, function (err) {});

    if (res != null) {
        res.json(successfulResult);
    }
}
