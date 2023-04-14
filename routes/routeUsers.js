"use strict"

const userdb = require('../Models/UserDB');

var usersDBObject = new userdb();

function routeUsers(app) {
    app.route('/user')
        .get(usersDBObject.getAllUsers)
    app.route('/user/:id')
        .delete(usersDBObject.deleteUser)
    app.route('/user/data/:id')
        .put(usersDBObject.updateUser)
    app.route('/user/changepassword/:id')
        .put(usersDBObject.updateUserPassword)
    app.route('/register')
        .post(usersDBObject.addUser)
    app.route('/login')
        .post(usersDBObject.getLoginCredentials);
}

module.exports = {routeUsers};