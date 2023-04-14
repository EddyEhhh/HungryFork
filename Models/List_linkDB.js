"use strict"
var db = require('../db-connection');
const List_link = require('../Models/List_link');

class List_linkDB {
    getAllListLink(request, respond) {
        var sql = "SELECT * FROM restaurant_review.list_link";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getListLink(request, respond) {
        var restaurantId = request.params.id;
        console.log(restaurantId)
        var sql = "SELECT * FROM restaurant_review.list_link WHERE link_list_id = ?";
        db.query(sql, restaurantId, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    addListLink(request, respond) {
        var listLinkObject = new List_link(request.body.link_list_id, request.body.link_list_restaurant_id);
        var sql = "INSERT INTO restaurant_review.list_link (link_list_id, link_list_restaurant_id) VALUES(?,?)";
        var values = [listLinkObject.getLinkListId(), listLinkObject.getLinkListRestaurantId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    deleteListLink(request, respond) {

        var listLinkObject = new List_link(request.body.link_list_id, request.body.link_list_restaurant_id);
        var sql = "DELETE FROM restaurant_review.list_link WHERE link_list_id = ? AND link_list_restaurant_id = ?";
        var values = [listLinkObject.getLinkListId(), listLinkObject.getLinkListRestaurantId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

module.exports = List_linkDB;


