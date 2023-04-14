"use strict"

class Review {
    constructor(review_id, restaurant_id, user_id, review_rating, review_comment, review_timestamp) {
        this.review_id = review_id;
        this.restaurant_id = restaurant_id;
        this.user_id = user_id;
        this.review_rating = review_rating;
        this.review_comment = review_comment;
        this.review_timestamp = review_timestamp;
    }

    getReviewId() {
        return this.review_id;
    }

    getRestaurantId() {
        return this.restaurant_id;
    }

    getUserId() {
        return this.user_id;
    }

    getReviewRating() {
        return this.review_rating;
    }

    getReviewComment() {
        return this.review_comment;
    }

    getReviewTimestamp() {
        return this.review_timestamp;
    }


    //DIY

    setRestaurantId(restaurant_id) {
        this.restaurant_id = restaurant_id;
    }

    //DIY
    setUserId(user_id) {
        this.user_id = user_id;
    }

    setReviewRating(review_rating) {
        this.review_rating = review_rating;
    }

    setReviewComment(review_comment) {
        this.review_comment = review_comment;
    }

    setReviewTimestamp(review_timestamp) {
        this.review_timestamp = review_timestamp;
    }

}

module.exports = Review;