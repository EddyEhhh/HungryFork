"use strict"
var db = require('../db-connection');
const List = require('../Models/List');

class ListDB {
    getAllLists(request, respond) {
        var sql = "SELECT * FROM restaurant_review.list";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    addList(request, respond) {
        var listObject = new List(request.body.list_id, request.body.list_user_id, request.body.list_name);
        var sql = "INSERT INTO restaurant_review.list (list_user_id, list_name) VALUES(?, ?)";
        var values = [listObject.getListUserId(), listObject.getListName()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    updateList(request, respond) {

        var listObject = new List(request.params.id, request.body.list_user_id, request.body.list_name);

        var sql = "UPDATE restaurant_review.list SET list_name = ? WHERE list_id = ?";
        var values = [listObject.getListName(), listObject.getListId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteList(request, respond) {
        var listID = request.params.id;
        var sql = "DELETE FROM restaurant_review.list WHERE list_id = ?";
        db.query(sql, listID, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

module.exports = ListDB;


