"use strict"

class Address {
    constructor(address_id, address, postal_code, phone, restaurant_googlemap_url) {
        this.address_id = address_id;
        this.address = address;
        this.postal_code = postal_code;
        this.phone = phone;
        this.restaurant_googlemap_url = restaurant_googlemap_url;
    }


    getAddressId() {
        return this.address_id;
    }

    getAddress() {
        return this.address;
    }

    getPostalCode() {
        return this.postal_code;
    }

    getPhone() {
        return this.phone;
    }

    getRestaurantGooglemapUrl() {
        return this.restaurant_googlemap_url;
    }


    setAddress(address) {
        this.address = address;
    }

    setPostalCode(postal_code) {
        this.postal_code = postal_code;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setRestaurantGooglemapUrl(restaurant_googlemap_url) {
        this.restaurant_googlemap_url = restaurant_googlemap_url;
    }


}

module.exports = Address;
