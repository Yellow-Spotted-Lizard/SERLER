const users = require('./users');

exports.getInitialUserList = function() {
    // Eirik Guestsson - Guest
    var guest = {
        user_id: 'guest',
        user_password: 'Passw0rd',
        user_full_name: 'Eirik Guestsson',
        user_email: 'eirik.guestsson@allzeek.com',
        user_role: 'guest'
    };

    // Veleif Usersson - User
    var user = {
        user_id: 'user',
        user_password: 'Passw0rd',
        user_full_name: 'Veleif Usersson',
        user_email: 'veleif.usersson@allzeek.com',
        user_role: 'user'
    };

    // Torhild Analystdottir - Analyst
    var analyst = {
        user_id: 'analyst',
        user_password: 'Passw0rd',
        user_full_name: 'Torhild Analystdottir',
        user_email: 'torhild.analystdottir@allzeek.com',
        user_role: 'analyst'
    };

    // Ragneid Moderatordottir - Moderator
    var moderator = {
        user_id: 'moderator',
        user_password: 'Passw0rd',
        user_full_name: 'Ragneid Moderatordottir',
        user_email: 'ragneid.moderatordottir@allzeek.com',
        user_role: 'moderator'
    };

    // Ornolf Submittersson - Submitter
    var submitter = {
        user_id: 'submitter',
        user_password: 'Passw0rd',
        user_full_name: 'Ornolf Submittersson',
        user_email: 'ornolf.submittersson@allzeek.com',
        user_role: 'submitter'
    };

    // Asgard Admindottir - Admin
    var admin = {
        user_id: 'admin',
        user_password: 'Passw0rd',
        user_full_name: 'Asgard Admindottir',
        user_email: 'asgard.admindottir@allzeek.com',
        user_role: 'admin'
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

exports.getUserById = function(id) {
    var userList = users.getInitialUserList();
    var user = userList.find(function(element) { 
        return element.user_id == id; 
    }); 

    return user;
}