"use strict"


const addressdb = require('../Models/AddressDB');

var addressDBObject = new addressdb();

function routeAddress(app) {
    app.route('/address')
        .post(addressDBObject.addAddress)
        .get(addressDBObject.getAllAddress);
    app.route('/address/restaurant')
        .post(addressDBObject.getRestaurantAddress)
    app.route('/address/:id')
        .delete(addressDBObject.deleteAddress)
        .put(addressDBObject.updateAddress);


}

module.exports = {routeAddress};


