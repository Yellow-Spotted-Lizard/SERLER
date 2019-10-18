const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, 'User login is a mandatory field']
    },
    password: {
        type: String
    },
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String,
        enum: ['guest', 'user', 'analyst', 'moderator', 'submitter', 'admin'],
        required: [true, 'User role is a mandatory field']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
