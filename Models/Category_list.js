"use strict"

class Category_list {
    constructor(link_category__id, link_restaurant_id) {
        this.link_category__id = link_category__id;
        this.link_restaurant_id = link_restaurant_id;

    }

    getLinkCategoryId() {
        return this.link_category__id;
    }

    getLinkRestaurantId() {
        return this.link_restaurant_id;
    }
}

module.exports = Category_list;
