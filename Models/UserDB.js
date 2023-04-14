"use strict";
var db = require('../db-connection');
const User = require('../Models/User');

class UserDB {

    getLoginCredentials(request, respond) {
        console.log(request.body)
        var username = request.body.uname;
        var user_password = request.body.psw;
        var msg = "";
        var sql = "SELECT user_password FROM restaurant_review.user WHERE username = ?";

        db.query(sql, [username], function (error, result) {
            if (error) {
                throw error;
            } else {
                if (result.length > 0) {
                    if (user_password == result[0].user_password) {
                        msg = "Successful login";
                        respond.redirect('/?username=' + username)
                    } else {
                        msg = "Wrong Password";
                        respond.redirect('/?loginError=' + 1)
                        console.log(msg);
                    }
                } else {
                    msg = "USER NOT FOUND!";
                    respond.redirect('/?loginError=' + 2)
                    console.log(msg);
                }

            }
        });
    }

    addUser(request, respond) {
        var username = request.body.uname;
        var user_password = request.body.psw;
        var msg = ""
        var userObject = new User(null, request.body.uname, request.body.user_profile,
            request.body.psw, request.body.email, request.body.Gender, request.body.fname, request.body.lname);
        var sql = "INSERT INTO restaurant_review.user (username, user_profile, user_password, user_email, user_gender, first_name, last_name) VALUES(?,?,?,?,?,?,?)";
        var values = [userObject.getUsername(), userObject.getUserProfile(), userObject.getUserPassword(),
            userObject.getUserEmail(), userObject.getUserGender(), userObject.getFirstName(), userObject.getLastName()];
        db.query(sql, values, function (error, result) {
            if (error) {
                if (error.code === "ER_DUP_ENTRY") {
                    respond.json(prepareMessage("Username already exist"))
                    msg = "Wrong Password";
                    respond.redirect('/?registerError=' + 1)
                    console.log(msg);

                } else {
                    throw error;
                }
            } else {
                msg = "Successful register";
                respond.redirect('/?username=' + username)
            }
        });
    }


    getAllUsers(request, respond) {
        var sql = "SELECT * FROM restaurant_review.user";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    updateUser(request, respond) {

        var userObject = new User(request.params.id, request.body.username, request.body.user_profile,
            request.body.user_password, request.body.user_email, request.body.user_gender, request.body.first_name, request.body.last_name);

        var sql = "UPDATE restaurant_review.user SET username = ?, user_profile= ?, user_email = ?, user_gender = ?, first_name = ?, last_name = ?  WHERE user_id = ?";
        var values = [userObject.getUsername(), userObject.getUserProfile(), userObject.getUserEmail(), userObject.getUserGender(), userObject.getFirstName(), userObject.getLastName(), userObject.getUserId()];

        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    updateUserPassword(request, respond) {

        var userObject = new User(request.params.id, request.body.username, request.body.user_profile,
            request.body.user_password, request.body.user_email, request.body.user_gender, request.body.first_name, request.body.last_name);

        var sql = "UPDATE restaurant_review.user SET user_password = ? WHERE user_id = ?";
        var values = [userObject.getUserPassword(), userObject.getUserId()];
        console.log(userObject.getUserPassword())
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteUser(request, respond) {
        var userID = request.params.id;
        var sql = "DELETE FROM restaurant_review.user WHERE user_id = ?";
        db.query(sql, userID, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

function prepareMessage(msg) {
    var obj = {"message": msg};
    return obj;
}

module.exports = UserDB;