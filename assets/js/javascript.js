// Weather Homework URLS:
// Current Weather:  "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
// Forecast: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
// Icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png"

// API Key
// 6fa0cfaeeef5ac6923a4ec8f2b209eff

//API key
var APIKey = "6fa0cfaeeef5ac6923a4ec8f2b209eff";

//URL that I need to query/access the database.

//ajax call to queryURL.
// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function(response) {
// console.log(response);
// });

//This .on("click") function will trigger an ajax call
$("#searchBtn").on("click", function(event) {
  event.preventDefault();
  var searchContent = $("#imputField").val();
  currentForecast(searchContent);
  var queryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    searchContent +
    "&APPID=" +
    APIKey;
  //ajax call to queryURL.
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (let i = 0; i < response.list.length; i = i + 8) {
      $("#forecast").append(`<div class="col-2 forecast-col1">
    <h3>${response.list[i].weather[0].main}</h3>
    <img src="http://openweathermap.org/img/w/${
      response.list[i].weather[0].icon
    }.png"
    <h3>${response.list[i].dt_txt.split(" ")[0]}</h3>
    <p>Temperature:${response.list[i].main.temp}°F</p>
    <p>Humidity:${response.list[i].main.humidity}%</p>
    <p>MPH:${response.list[i].wind.speed}mph</p>
    </div>`);
    }
  });
});
function currentForecast(searchContent) {
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    searchContent +
    "&appid=" +
    APIKey +
    "&units=imperial";
  //ajax call to queryURL.
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#cityResults").append(`
    <h3>Today's Forecast${response.weather[0].main}</h3>
   <img src="http://openweathermap.org/img/w/${response.weather[0].icon}.png"
    <p>Temperature:${response.main.temp}°F</p>
    <p>Humidity:${response.main.humidity}%</p>
     <p>MPH:${response.wind.speed}mph</p>
`);
  });
}
