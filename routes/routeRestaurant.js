"use strict"


const restaurantdb = require('../Models/RestaurantDB');

var restaurantDBObject = new restaurantdb();

function routeRestaurant(app) {
    app.route('/restaurant')
        .post(restaurantDBObject.addRestaurant)
        .get(restaurantDBObject.getAllRestaurants);
    app.route('/restaurant/:id')
        .delete(restaurantDBObject.deleteRestaurant)
        .put(restaurantDBObject.updateRestaurant);
    app.route('/restaurant/search')
        .post(restaurantDBObject.getGeneralSearch);
    app.route('/restaurant/compareloc')
        .post(restaurantDBObject.getCompareLocation);
    app.route('/searchRestaurant')
        .post(restaurantDBObject.searchRestaurant);
}

module.exports = {routeRestaurant};


