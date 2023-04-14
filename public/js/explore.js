//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        restaurant_array = JSON.parse(request.responseText);

        //Fetch the comments as well
        // fetchReviews();

        //call the function so as to display all movies tiles for "Now Showing"
        displayAllRestaurants();
    };
    //This command starts the calling of the movies web api
    request.send();
}

function getSpecificRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        restaurant_array = JSON.parse(request.responseText);

        //Fetch the comments as well
        // fetchReviews();

        //call the function so as to display all movies tiles for "Now Showing"
        displaySpecificRestaurant();
    };
    //This command starts the calling of the movies web api
    request.send();
}

//This function is to display the movies tiles
//that filters based on "Now Showing" or "Coming Soon“
// function displayRestaurant(category) {
//     var table = document.getElementById("restaurantTable");
//     var restaurantCount = 0;
//     var message = "";
//     console.log('test');
//     table.innerHTML = "";
//     totalRestaurants = restaurants_array.length;
//     for (var count = 0; count < totalRestaurants; count++) {
//         if (restaurants_array[count].availability == category) {
//             var thumbnail = restaurants_array[count].thumb;
//             var title = restaurants_array[count].title;
//             var cell = '<div class="col-md-3" style="float: none; margin: 0 auto;">' +
//                 '<div class="flip-container" >' +
//                     '<div class="flipper">' +
//                         '<div class="front">' +
//                             '<a id="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' + count + '>' +
//                             '<img src=' + test + ' />' +
//                         '</a>' +
//                         '</div>' +
//                     '<div class="back">' +
//                         '<div class="bg-dark mystyle text-center" >' +
//                         '<span><br>' + title + '</span><br>' +
//                         '<button href="#" data-toggle="modal" data-target="#restaurantModel" item="' + count + '" type="button" class="btn btn-sm" onClick="showRestaurantDetails(this)" >See More</button> ' +
//                         '<button href="#" data-toggle="modal" data-target="#commentModal" item="' + count + '" type="button" class="btn btn-sm" onClick="showMovieComments(this)" >Comments</button>' +
//                         '</div>' +
//                     '</div>' +
//                 '</div>' +
//                 '</div>' +
//                 '</div>';
//             table.insertAdjacentHTML('beforeend', cell);
//             restaurantCount++;
//         }
//     }
//     message = restaurantCount + " Restaurants " + category;
//     document.getElementById("summary").textContent = message;
//     document.getElementById("parent").textContent = "";
// }

function listCategory(category) {
    displayRestaurant(category);
    document.getElementById(category).classList.add("active")
}

//This function is to display the "Now Showing" movies
function listNowShowingMovies() {
    category = "Now Showing";
    displayMovies(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the "Coming Soon" movies
function listComingMovies() {
    category = "Coming Soon";
    displayMovies(category);
    document.getElementById("nowMenu").classList.remove("active");
    document.getElementById("comingMenu").classList.add("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual movies details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    console.log(restaurant_array[item].restaurant_name)
    document.getElementById("restaurant_name").textContent = restaurant_array[item].restaurant_name;
    document.getElementById("restaurant_description").textContent = restaurant_array[item].restaurant_description;
    document.getElementById("restaurant_image").src = restaurant_array[item].restaurant_image;
    document.getElementById("restaurant_address").textContent = restaurant_array[item].restaurant_address;
    document.getElementById("restaurant_open_hours").textContent = restaurant_array[item].restaurant_open_hours;
    document.getElementById("restaurant_website_url").textContent = restaurant_array[item].restaurant_website_url;
    document.getElementById("restaurant_category").textContent = restaurant_array[item].restaurant_category;
    document.getElementById("restaurant_map").src = "https://www.google.com/maps/embed/v1/search?key=AIzaSyDRy0CVKRqsk0K498WGEwznonBLHQ5SnMA&q=" + restaurant_array[item].restaurant_address;

}

//This function opens a new window/tab and loads the
//particular movie in the cinema website
function buyTicket() {
    window.open(movie_array[currentIndex].buy, "_blank");
}


function displaySpecificRestaurant() {
    var urlParams = new URLSearchParams(window.location.search);
    var count = urlParams.getAll('id')
    console.log(count)
    var table = document.getElementById("restaurantsTable");
    var message = "";
    var restaurant = []
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var x = 0; x < restaurant_array.length; x++){
        console.log(restaurant_array[x])
        console.log(count)
        if (restaurant_array[x].restaurant_id == count){
            restaurant = restaurant_array[x]
        }
    }
   if ( id != "") {
       var picture = restaurant.restaurant_image;
       var id = restaurant.restaurant_id;
       var name = restaurant.restaurant_name;
       var description = restaurant.restaurant_description;
       var address = restaurant.restaurant_address;
       var openHours = restaurant.restaurant_open_hours;
       var websiteUrl = restaurant.restaurant_website_url
       var priceRange = restaurant.restaurant_price_range
       var category = restaurant.restaurant_category
    //    var cell = '<div class="col-md-3" style="float: none; margin: 0 auto;">                                                                                                                                                                                                   \
    //                         <div class="card" style="width: 18rem;">\
    //                           <img class="card-img-top" src='+picture+' alt="Card image cap">\
    //                           <div class="card-body">\
    //                             <h5 class="card-title">'+name+'</h5>\
    //                             <p class="card-text">'+description+'</p>\
    //                             <p class="card-text">'+address+'</p>\
    //                             <p class="card-text">'+openHours+'</p>\
    //                             <p class="card-text">'+websiteUrl+'</p>\
    //                             <p class="card-text">'+priceRange+'</p>\
    //                             <p class="card-text">'+category+'</p>\
    //                           </div>\
    //                         </div>                                                                                                                                                                                                      \
    //                     </div>';
        var cell = '<form class="modal-content animate" id="restaurantoverlay" style="overflow: scroll; overflow-x: hidden; width:700px; height:80%;">\
                    <div>\
                        <img class="img-banner" src='+picture+'>\
                    </div>\
                    <h2 style="color:black; padding-left: 0px; margin-top: 10px; margin-left: 20px;"><b>'+name+'</b>\
                    </h2>\
                    <h1 style="color:#000;">\
                        <hr style="border:0.5px solid #000;margin-top: 0px;"></h1>\
                        <p style="float: left; margin-left: 20px;"><b>category: </b>'+category+'</p>\
                    <h1 style="color:#000;">\
                        <hr style="border:0.5px solid #000;margin-top: 0px;">\
                    </h1>\
                    <p style="padding: 20px; margin-top: -30px; color:black;">'+description+'</p>\
                    <p style="padding: 20px; margin-top: -30px; color:black;"><b>Address</b></p>\
                    <p style="padding: 20px; margin-top: -60px; color:black;">'+address+'</p><p></p><p></p><p></p>\
                    <p style="padding: 20px; margin-top: -30px; color:black;"><b>Website</b></p>\
                    <p style="padding: 20px; margin-top: -60px; color:black;"><a href="'+websiteUrl+'">'+websiteUrl+'</a></p>\
                    <p style="padding: 20px; margin-top: -30px; color:black;"><b>Opening Hours</b></p>\
                    <p style="padding: 20px; margin-top: -60px; color:black;">'+openHours+'</p>\
                    <p><iframe src="https://www.google.com/maps/embed/v1/search?key=AIzaSyDRy0CVKRqsk0K498WGEwznonBLHQ5SnMA&q='+address+'"\
                            style="float: right; padding:20px; margin-top: -260px" width="250" height="200" frameborder="0"\
                            style="border:0;" ></iframe></p>\
                    ';



       table.insertAdjacentHTML('beforeend', cell);
   }
}
function displayAllRestaurants() {
    var table = document.getElementById("restaurantsTable");
    var message = "";
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        var picture = restaurant_array[count].restaurant_image;
        var id = restaurant_array[count].restaurant_id;
        var name = restaurant_array[count].restaurant_name;
        var category = restaurant_array[count].restaurant_category;
        var onclick = "seeRestaurant(\'' + name + '\')"
        if (id != ""){
        var cell = '<div class="col-md-3" style="float: none; margin: 50px auto;">                                                                                                                                                                                                   \
                            <div class="flip-container" >                                                                                                                                                                                       \
                                <div class="flipper">                                                                                                                                                                                           \
                                    <div class="front">                                                                                                                                                                                         \
                                        <a id="restaurants" data-toggle="modal" data-target="#restaurantModel" item=' + count + '>                                                                                                \
                                            <img class="img-fluid img-thumbnail" src=' + picture + ' /><span>' + name + '</span><br>                                                                                                                               \
                                        </a>                                                                                                                                                                                                    \
                                    </div>                                                                                                                                                                                                      \
                                    <div class="back">                                                                                                                                                                                          \
                                        <div class="bg-dark mystyle text-center py-3" >                                                                                                                                                         \
                                            <p>' + name + '</p><br>                                                                                                                                                                \
                                            <button data-toggle="modal" data-target="#restaurantModel" item="' + count + '" type="button" class="btn-primary btn-sm" onclick="showRestaurantDetails(this)" >See More</button>       \
                                            <button data-toggle="modal" data-target="#reviewModal" item="' + count + '" type="button" class="comments btn btn-primary btn-sm" onClick="seeRestaurant(\'' + id + '\')" >Comments</button>    \
                                        </div>                                                                                                                                                                                            \
                                    </div>                                                                                                                                                                                                      \
                                </div>                                                                                                                                                                                                          \
                            </div>                                                                                                                                                                                                              \
                        </div>';

        table.insertAdjacentHTML('beforeend', cell);
        }
    }



    message = "All restaurants displayed";
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}






function seeRestaurant(id) {
    console.log(id)
    location.href = ("/restaurant.html?id=" + id)
    console.log(id)
}

function search(){

}