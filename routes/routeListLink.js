"use strict"


const listlinkdb = require('../Models/List_linkDB');

var listLinkDBObject = new listlinkdb();

function routeListLink(app) {
    app.route('/listlink')
        .post(listLinkDBObject.addListLink)
        .get(listLinkDBObject.getAllListLink)
        .delete(listLinkDBObject.deleteListLink)
    app.route('/listlink/:id')
        .get(listLinkDBObject.getListLink);


}

module.exports = {routeListLink};


