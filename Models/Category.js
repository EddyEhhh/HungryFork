"use strict"

class Category {
    constructor(category_id, category_name) {
        this.category_id = category_id;
        this.category_name = category_name;
    }


    getCategoryId() {
        return this.category_id;
    }

    getCategoryName() {
        return this.category_name;
    }


}

module.exports = Category;
