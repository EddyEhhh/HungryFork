"use strict"


const reviewdb = require('../Models/ReviewDB');

var reviewDBObject = new reviewdb();

function routeReview(app) {
    app.route('/review')
        .post(reviewDBObject.addReview)
        .get(reviewDBObject.getAllReviews);
    app.route('/review/:id')
        .delete(reviewDBObject.deleteReview)
        .put(reviewDBObject.updateReview);
    app.route('/review/ratings')
        .get(reviewDBObject.getAllAverageRatings)
    app.route('/review/recent')
        .post(reviewDBObject.getRecentReviews)
    app.route('/review/restaurant/:id')
        .get(reviewDBObject.getRestaurantReview);


}

module.exports = {routeReview};

