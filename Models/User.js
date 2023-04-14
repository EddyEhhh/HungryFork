"use strict"

class User {
    constructor(user_id, username, user_profile, user_password, user_email, user_gender, first_name, last_name) {
        this.user_id = user_id;
        this.username = username;
        this.last_name = last_name;
        this.first_name = first_name;
        this.user_password = user_password;
        this.user_profile = user_profile;
        this.user_email = user_email;
        this.user_gender = user_gender;


    }

    getUserId() {
        return this.user_id;
    }

    getUsername() {
        return this.username;
    }

    getLastName() {
        return this.last_name;
    }

    getFirstName() {
        return this.first_name;
    }

    getUserPassword() {
        return this.user_password;
    }


    getUserProfile() {
        return this.user_profile;
    }

    getUserEmail() {
        return this.user_email;
    }

    getUserGender() {
        return this.user_gender;
    }


}

module.exports = User;