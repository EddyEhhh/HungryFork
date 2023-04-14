"use strict"

var db = require('../db-connection');
const Review = require('../Models/Review');

class ReviewDB {

    getAllReviews(request, respond) {
        var sql = "SELECT * FROM restaurant_review.review";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


    getRecentReviews(request, respond) {
        var restaurant_id = request.body.restaurant_id;
        var sql = "SELECT * FROM restaurant_review.review WHERE review_timestamp >= DATE_SUB(curDate(), interval 6 month) AND restaurant_id = ?";
        db.query(sql, restaurant_id, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    addReview(request, respond) {
        var now = new Date().toISOString();
        console.log(new Date().toISOString())

        var reviewObject = new Review(null, request.body.restaurant_id, request.body.user_id, request.body.review_rating, request.body.review_comment, now);
        var sql = "INSERT INTO restaurant_review.review (restaurant_id, user_id, review_rating, review_comment, review_timestamp) VALUES(?,?,?,?,?)";
        var values = [reviewObject.getRestaurantId(), reviewObject.getUserId(), reviewObject.getReviewRating(), reviewObject.getReviewComment(), now];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    getAllAverageRatings(request, respond) {
        var sql = "SELECT restaurant_id, CAST(ROUND(AVG(review_rating), 2) AS DEC(10,2)) review_ratings FROM restaurant_review.review GROUP BY restaurant_id";
        db.query(sql, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
                console.log(result)
            }
        });
    }

    getRestaurantReview(request, respond) {
        var restaurant_id = request.params.id
        var sql = "SELECT * FROM restaurant_review.review WHERE restaurant_id = ?";
        db.query(sql, restaurant_id, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    updateReview(request, respond) {
        var now = new Date().toISOString();
        console.log(now)

        var reviewObject = new Review(request.params.id, request.body.restaurant_id, request.body.user_id, request.body.review_rating, request.body.review_comment, now);
        var sql = "UPDATE restaurant_review.review SET review_comment = ?, review_rating = ?, review_timestamp=? WHERE review_id = ?";
        var values = [reviewObject.getReviewComment(), reviewObject.getReviewRating(), now, reviewObject.getReviewId()];
        db.query(sql, values, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }

    deleteReview(request, respond) {
        var reviewID = request.params.id;
        var sql = "DELETE FROM restaurant_review.review WHERE review_id = ?";
        db.query(sql, reviewID, function (error, result) {
            if (error) {
                throw error;
            } else {
                respond.json(result);
            }
        });
    }


}

module.exports = ReviewDB;

