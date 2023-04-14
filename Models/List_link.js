"use strict"

class List_link {
    constructor(link_list_id, link_list_restaurant_id) {
        this.link_list_id = link_list_id;
        this.link_list_restaurant_id = link_list_restaurant_id;

    }

    getLinkListId() {
        return this.link_list_id;
    }

    getLinkListRestaurantId() {
        return this.link_list_restaurant_id;
    }
}

module.exports = List_link;
