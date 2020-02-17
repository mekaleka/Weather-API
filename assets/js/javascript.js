
// Weather Homework URLS: 
// Current Weather:  "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
// Forecast: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
// Icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"


// API Key
// 6fa0cfaeeef5ac6923a4ec8f2b209eff


//API key
var APIKey = "6fa0cfaeeef5ac6923a4ec8f2b209eff";

//URL that I need to query/access the database.
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" + APIKey;

//ajax call to queryURL.
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
console.log(response);
});


//Will store all of the retreived data inside an object called "response".
.then(function(response) {

});
