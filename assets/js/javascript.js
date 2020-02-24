//Need to complete the localStorage so the cities are saved into the list group.
var cities = localStorage.getItem("cities");
if (cities) {
  cities = JSON.parse(cities);
} else {
  cities = [];
}
console.log(cities);

for (let i = 0; i < cities.length; i++) {
  $(".list-group").append(`<li class="list-group-item">${cities[i]}</li>`);
}

//API key
var APIKey = "6fa0cfaeeef5ac6923a4ec8f2b209eff";

$(".list-group").on("click", ".list-group-item", function(event) {
  event.preventDefault();
  searchContent = $(this).text();
  console.log(searchContent);
  currentForecast(searchContent);
  forecastFive(searchContent);
});

//This .on("click") function will trigger an ajax call
$("#searchBtn").on("click", function(event) {
  //preventDefault stops the default action.
  event.preventDefault();
  var searchContent = $("#imputField").val();

  cities.push(searchContent);
  localStorage.setItem("cities", JSON.stringify(cities));

  currentForecast(searchContent);
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" +
    searchContent +
    "&APPID=" +
    APIKey;

  //ajax call to queryURL.
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //console log function response/ajax call to get weather data to be displayed.
    console.log(response);
    $("#forecast").empty();
    //for loop through forecast data linked to id=forecast.
    for (let i = 0; i < response.list.length; i = i + 8) {
      //commented below is another way to create this function...

      //append data to id=forecast to show weather forecast with h3 tag, weather icon, weather date with a split for date and time, temp, humidity and mph in <p> tags.
      // var $div = $("<div>")
      //   .addClass("col-2 forecast-col1")
      //   .append(
      //     $("<h3>").text(response.list[i].weather[0].main),
      //     $("<img>").attr(
      //       "src",
      //       `http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png`
      //     ),
      //     $("<p>").text()
      //   );
      $("#forecast").append(`<div class="col-2 forecast-col1">
    <h3>${response.list[i].weather[0].main}</h3>
    <img src="http://openweathermap.org/img/w/${
      response.list[i].weather[0].icon
    }.png">
    <h3>${response.list[i].dt_txt.split(" ")[0]}</h3>
    <p>Temperature:${response.list[i].main.temp}°F</p>
    <p>Humidity:${response.list[i].main.humidity}%</p>
    <p>MPH:${response.list[i].wind.speed}mph</p>
    </div>`);
    }
  });
});
function forecastFive(searchContent) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" +
    searchContent +
    "&APPID=" +
    APIKey;

  //ajax call to queryURL.
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //console log function response/ajax call to get weather data to be displayed.
    console.log(response);
    $("#forecast").empty();
    //for loop through forecast data linked to id=forecast.
    for (let i = 0; i < response.list.length; i = i + 8) {
      //commented below is another way to create this function...

      //append data to id=forecast to show weather forecast with h3 tag, weather icon, weather date with a split for date and time, temp, humidity and mph in <p> tags.
      // var $div = $("<div>")
      //   .addClass("col-2 forecast-col1")
      //   .append(
      //     $("<h3>").text(response.list[i].weather[0].main),
      //     $("<img>").attr(
      //       "src",
      //       `http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png`
      //     ),
      //     $("<p>").text()
      //   );
      $("#forecast").append(`<div class="col-2 forecast-col1">
  <h3>${response.list[i].weather[0].main}</h3>
  <img src="https://openweathermap.org/img/w/${
    response.list[i].weather[0].icon
  }.png">
  <h3>${response.list[i].dt_txt.split(" ")[0]}</h3>
  <p>Temperature:${response.list[i].main.temp}°F</p>
  <p>Humidity:${response.list[i].main.humidity}%</p>
  <p>MPH:${response.list[i].wind.speed}mph</p>
  </div>`);
    }
  });
}
//Function access url with ajax call and waits for a response.
function currentForecast(searchContent) {
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchContent +
    "&appid=" +
    APIKey +
    "&units=imperial";
  //ajax call to queryURL.
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    //console log response to see retreived data.
    console.log(response);
    $("#cityResults").empty();
    //append city data to cityResults for current weather conditions.
    $("#cityResults").append(`
    <h3>Today's Forecast${response.weather[0].main}</h3>
   <img src="https://openweathermap.org/img/w/${response.weather[0].icon}.png"
    <p>Temperature:${response.main.temp}°F</p>
    <p>Humidity:${response.main.humidity}%</p>
     <p>MPH:${response.wind.speed}mph</p>`);
  });
}
