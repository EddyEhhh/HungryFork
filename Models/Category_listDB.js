"use strict"
var db = require('../db-connection');
const Category_list = require('../Models/Category_list');

class Category_listDB {
    getAllCategoryList(request, respond) {
        var sql = "SELECT * FROM restaurant_review.category_list";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getRestaurantCategoryList(request, respond) {
        var restaurantId = request.params.link_restaurant_id;
        var sql = "SELECT * FROM restaurant_review.category_list WHERE link_restaurant_id = ? ";
        db.query(sql, restaurantId, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    addCategoryList(request, respond) {
        var categoryListObject = new Category_list(request.body.link_category_id, request.body.link_restaurant_id);
        var sql = "INSERT INTO restaurant_review.category_list(link_category_id, link_restaurant_id) VALUES(?,?)";
        var values = [categoryListObject.getLinkCategoryId(), categoryListObject.getLinkRestaurantId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    deleteCategoryList(request, respond) {

        var categoryListObject = new Category_list(request.body.link_category_id, request.body.link_restaurant_id);

        var sql = "DELETE FROM restaurant_review.category_list WHERE link_category_id = ? AND link_restaurant_id = ?";
        var values = [categoryListObject.getLinkCategoryId(), categoryListObject.getLinkRestaurantId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

module.exports = Category_listDB;


