"use strict"

class List {
    constructor(list_id, list_user_id, list_name) {
        this.list_id = list_id;
        this.list_user_id = list_user_id;
        this.list_name = list_name;
    }


    getListId() {
        return this.list_id;
    }

    getListUserId() {
        return this.list_user_id;
    }

    getListName() {
        return this.list_name;
    }

}

module.exports = List;
