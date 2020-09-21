var apiKey = "b33ccd22cc504fef8b2200821201409";
var baseURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
var threeURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=3&q=`;
var forecast = {};

function getData(fullURL) {
    $.get(fullURL, function(data){
        parseForecast(data.forecast);
        // console.log(data.forecastday[1]);
        // console.log(files[0].Files[1]);
        parseForecast(data.value);
        $(".title").html(
            `<h3> Current Weather Forecast: ${data.location.name} as of ${data.location.localtime}</h3>`);
            $(".title2").html(
                `<h3>Three Day Weather Forecast: ${data.location.name} as of ${data.location.localtime}</h3>`);
        $(".content").html (
            `<p>City Name: ${data.location.name}</p>
            <p>State:${data.location.region}</p>
            <p>Current Time: ${data.location.localtime}</p>
            <p>Country: ${data.location.country}</p>
            <p>Current: ${data.current.temp_f}</p>
            <p>Condition: ${data.current.condition.text}</p>
            <p>Wind MPH: ${data.current.wind_mph}</p>
            <p>Wind KPH: ${data.current.wind_kph}</p>
            <p>Wind Degree: ${data.current.wind_degree}</p>
            <p>Wind Direction: ${data.current.wind_dir}</p>
            <p>Pressure Millibars: ${data.current.pressure_mb}</p>`);
            
            // $.each(data.forecastday, function(idx, data) {
            //     $(".forecast-content").html(
            //         `<p>${data.forecastday}</p>`);
            // });
            
    }).catch(function(error) {
        console.log(error);
        console.log("Your zip code is invalid");
    })
}



function parseForecast(forecastArray) {
   $.each(forecastArray, function(idx, value){
       console.log(value);
       $.each(value, function(idx, forecastday){
        $(".forecast-content").append(
        `<br><br>
        <p>Date:${forecastday.date}</p>
        <p>Epoch Date:${forecastday.date_epoch}</p>
        <p>Max Celsius Tempature:${forecastday.day.maxtemp_c}</p>
        <p>Min Celsius Tempature:${forecastday.day.mintemp_c}</p>
        <p>Max Fahrenheit Tempature: ${forecastday.day.maxtemp_f}</p>
        <p>Min Fahrenheit Tempature: ${forecastday.day.mintemp_f}</p>
        <p>Average Celsius Tempature: ${forecastday.day.avgtemp_c}</p>
        <p>Average Fahrenheit Tempature: ${forecastday.day.avgtemp_f}</p>
        <p>Max Wind MPH: ${forecastday.day.maxwind_mph}</p>
        <p>Max Wind KPH: ${forecastday.day.maxwind_kph}</p>
        <p>Total Precipitation Millimeters: ${forecastday.day.totalprecip_mm}</p>
        <p>Total Precipitation Inches: ${forecastday.day.totalprecip_in}</p>
        <p>Total Precipitation Millimeters: ${forecastday.day.totalprecip_mm}</p>
        <p>Average Visibility(Kilometers): ${forecastday.day.avgvis_km}</p>
        <p>Average Visibility(miles): ${forecastday.day.avgvis_miles}</p>
        <p>Average Humidity: ${forecastday.day.avghumidity}</p>
        <p>Condition: ${forecastday.day.condition.text}</p>
        <p>UV: ${forecastday.day.uv}</p>
        <p>Sunrise: ${forecastday.astro.sunrise}</p>
        <p>Sunset: ${forecastday.astro.sunset}</p>
        <p>Moonrise: ${forecastday.astro.moonrise}</p>
        <p>Moonset: ${forecastday.astro.moonset}</p>`
        );
    });
      
   }); 
} 

function initListener() {
    $("#getWeather").click(function () {
        var zip = $("#zipcode").val();
        var fullURL = threeURL + zip;
        console.log(fullURL);
        console.log(zip);
        getData(fullURL);
    })
}

$(document).ready(function () {
    initListener();
})