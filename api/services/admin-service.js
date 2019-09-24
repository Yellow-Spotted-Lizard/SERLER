const adminService = require('./admin-service');
const userService = require('./user-service');

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

exports.seedUsers = function() {
    return notImplementedResult;
}

exports.disposeUsers = function() {
    return notImplementedResult;
}
