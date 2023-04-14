"use strict"


const listdb = require('../Models/ListDB');

var listDBObject = new listdb();

function routeList(app) {
    app.route('/list')
        .post(listDBObject.addList)
        .get(listDBObject.getAllLists);
    app.route('/list/:id')
        .delete(listDBObject.deleteList)
        .put(listDBObject.updateList);
}

module.exports = {routeList};


