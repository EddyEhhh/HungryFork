"use strict"
var db = require('../db-connection');
const Category = require('../Models/Category');

class CategoryDB {
    getAllCategorys(request, respond) {
        var sql = "SELECT * FROM restaurant_review.category";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    addCategory(request, respond) {
        var categoryObject = new Category(request.body.category_id, request.body.category_name);
        var sql = "INSERT INTO restaurant_review.category(category_name) VALUES(?)";
        var values = [categoryObject.getCategoryName()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateCategory(request, respond) {

        var categoryObject = new Category(request.params.id, request.body.category_name);

        var sql = "UPDATE restaurant_review.category SET category_name = ? WHERE category_id = ?";
        var values = [categoryObject.getCategoryName(), categoryObject.getCategoryId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteCategory(request, respond) {
        var categoryID = request.params.id;
        var sql = "DELETE FROM restaurant_review.category WHERE category_id = ?";
        db.query(sql, categoryID, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

module.exports = CategoryDB;


