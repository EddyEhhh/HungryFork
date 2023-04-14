"use strict"

class Restaurant {
    constructor(restaurant_id, restaurant_name, restaurant_description, restaurant_image, restaurant_address, restaurant_open_hours, restaurant_website_url, restaurant_price_range, restaurant_category) {
        this.restaurant_id = restaurant_id;
        this.restaurant_name = restaurant_name;
        this.restaurant_description = restaurant_description;
        this.restaurant_image = restaurant_image;
        this.restaurant_address = restaurant_address;
        this.restaurant_open_hours = restaurant_open_hours;
        this.restaurant_website_url = restaurant_website_url;
        this.restaurant_price_range = restaurant_price_range;
        this.restaurant_category = restaurant_category;

    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getRestaurantName() {
        return this.restaurant_name;
    }

    getRestaurantDescription() {
        return this.restaurant_description;
    }

    getRestaurantImage() {
        return this.restaurant_image;
    }

    getRestaurantAddress() {
        return this.restaurant_address;
    }

    getRestaurantOpenHours() {
        return this.restaurant_open_hours;
    }

    getRestaurantWebsiteUrl() {
        return this.restaurant_website_url;
    }

    getRestaurantPriceRange() {
        return this.restaurant_price_range;
    }

    getRestaurantCategory() {
        return this.restaurant_category;
    }


}

module.exports = Restaurant;
