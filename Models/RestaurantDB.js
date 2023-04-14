"use strict"
var db = require('../db-connection');
const Restaurant = require('../Models/Restaurant');

class RestaurantDB {
    searchRestaurant(request, respond) {
        console.log(request.body)
    }
    getAllRestaurants(request, respond) {
        var sql = "SELECT * FROM restaurant_review.restaurant";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getCompareLocation(request, respond) {
        var search = request.body.search;
        var sql = "SELECT restaurant_name, address FROM restaurant INNER JOIN address ON restaurant.address_id = address.address_id where instr(restaurant_name, ?)";

        db.query(sql, search, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    addRestaurant(request, respond) {
        var now = new Date();
        var restaurantObject = new Restaurant(null, request.body.restaurant_name, request.body.restaurant_description,
            request.body.restaurant_image, request.body.restaurant_address, request.body.restaurant_open_hours, request.body.restaurant_website_url, request.body.restaurant_price_range, request.body.restaurant_category, now.toString());
        var sql = "INSERT INTO restaurant_review.restaurant (restaurant_name, restaurant_description, restaurant_image, restaurant_address, restaurant_open_hours, restaurant_website_url, restaurant_price_range, restaurant_category) VALUES(?,?,?,?,?,?,?,?)";
        var values = [restaurantObject.getRestaurantName(), restaurantObject.getRestaurantDescription(),
            restaurantObject.getRestaurantImage(), restaurantObject.getRestaurantAddress(), restaurantObject.getRestaurantOpenHours(), restaurantObject.getRestaurantWebsiteUrl(), restaurantObject.getRestaurantPriceRange(), restaurantObject.getRestaurantCategory()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    updateRestaurant(request, respond) {

        var restaurantObject = new Restaurant(request.params.id, request.body.restaurant_name, request.body.restaurant_description,
            request.body.restaurant_image, request.body.restaurant_address, request.body.restaurant_open_hours, request.body.restaurant_website_url, request.body.restaurant_price_range, request.body.restaurant_category);

        var sql = "UPDATE restaurant_review.restaurant SET restaurant_name = ?, restaurant_description = ?, restaurant_image = ?, restaurant_address = ?, restaurant_open_hours = ?, restaurant_website_url = ?, restaurant_price_range = ?, restaurant_category = ?  WHERE restaurant_id = ?";
        var values = [restaurantObject.getRestaurantName(), restaurantObject.getRestaurantDescription(), restaurantObject.getRestaurantImage(), restaurantObject.getRestaurantAddress(), restaurantObject.getRestaurantOpenHours(), restaurantObject.getRestaurantWebsiteUrl(), restaurantObject.getRestaurantPriceRange(), restaurantObject.getRestaurantCategory(), restaurantObject.getRestaurantId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteRestaurant(request, respond) {
        var restaurantID = request.params.id;
        var sql = "DELETE FROM restaurant_review.restaurant WHERE restaurant_id = ?";
        db.query(sql, restaurantID, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getGeneralSearch(request, respond) {
        var search = request.body.search;
        var sql = "SELECT * FROM restaurant_review.restaurant WHERE INSTR(restaurant_description, ?) OR INSTR(restaurant_name, ?)";
        var values = [search, search]

        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

module.exports = RestaurantDB;


