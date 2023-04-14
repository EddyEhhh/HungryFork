"use strict";

const express = require("express");
const routeRestaurant = require('./routes/routeRestaurant');
const routeReview = require('./routes/routeReview');
const routeUsers = require('./routes/routeUsers');
const routeAddress = require('./routes/routeAddress');
const routeCategory = require('./routes/routeCategory');
const routeCategoryList = require('./routes/routeCategoryList');
const routeList = require('./routes/routeList');
const routeListLink = require('./routes/routeListLink');
const bodyParser = require("body-parser");
const session = require('express-session');

var app = express();
var host = "127.0.0.1";
var port = 8080;
var startPage = "home.html";

app.use(express.static("./public"));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routeReview.routeReview(app);
routeUsers.routeUsers(app);
routeRestaurant.routeRestaurant(app);
routeAddress.routeAddress(app);
routeCategory.routeCategory(app);
routeCategoryList.routeCategoryList(app);
routeList.routeList(app);
routeListLink.routeListLink(app)

function gotoIndex(req, res) {
    console.log(req.params);
    res.sendFile(__dirname + "/" + startPage);
}

app.get("/" + startPage, gotoIndex);

app.route("/");

var server = app.listen(port, host, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
