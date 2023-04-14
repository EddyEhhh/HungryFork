"use strict"
var db = require('../db-connection');
const Address = require('../Models/Address');

class AddressDB {
    getAllAddress(request, respond) {
        var sql = "SELECT * FROM restaurant_review.address";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getRestaurantAddress(request, respond) {
        var AddressId = request.body.address_id;
        var sql = "SELECT restaurant_name FROM restaurant_review.restaurant WHERE address_id = ?";
        db.query(sql, AddressId, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    addAddress(request, respond) {
        var now = new Date();
        var addressObject = new Address(null, request.body.address, request.body.postal_code, request.body.phone,
            request.body.restaurant_googlemap_url, now.toString());
        var sql = "INSERT INTO restaurant_review.address (address, postal_code, phone, restaurant_googlemap_url) VALUES(?,?,?,?)";
        var values = [addressObject.getAddress(), addressObject.getPostalCode(), addressObject.getPhone(), addressObject.getRestaurantGooglemapUrl()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateAddress(request, respond) {
        var now = new Date();

        var addressObject = new Address(request.params.id, request.body.address, request.body.postal_code, request.body.phone,
            request.body.restaurant_googlemap_url, now.toString());

        var sql = "UPDATE restaurant_review.address SET address = ?, postal_code = ?, phone = ?, restaurant_googlemap_url = ? WHERE address_id = ?";
        var values = [addressObject.getAddress(), addressObject.getPostalCode(), addressObject.getPhone(), addressObject.getRestaurantGooglemapUrl(), addressObject.getAddressId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteAddress(request, respond) {
        var addressID = request.params.id;
        var sql = "DELETE FROM restaurant_review.address WHERE address_id = ?";
        db.query(sql, addressID, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

}

module.exports = AddressDB;


