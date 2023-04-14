"use strict"


const categorydb = require('../Models/CategoryDB');

var categoryDBObject = new categorydb();

function routeCategory(app) {
    app.route('/category')
        .post(categoryDBObject.addCategory)
        .get(categoryDBObject.getAllCategorys);
    app.route('/category/:id')
        .delete(categoryDBObject.deleteCategory)
        .put(categoryDBObject.updateCategory);
}

module.exports = {routeCategory};


