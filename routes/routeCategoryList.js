"use strict"


const categorylistdb = require('../Models/Category_listDB');

var categoryListDBObject = new categorylistdb();

function routeCategoryList(app) {
    app.route('/categorylist')
        .post(categoryListDBObject.addCategoryList)
        .get(categoryListDBObject.getAllCategoryList)
        .delete(categoryListDBObject.deleteCategoryList)
    app.route('/categorylist/restaurant/:link_restaurant_id')
        .get(categoryListDBObject.getRestaurantCategoryList);


}

module.exports = {routeCategoryList};


