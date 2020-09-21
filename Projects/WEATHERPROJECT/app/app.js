var apiKey = "b33ccd22cc504fef8b2200821201409";
var baseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

function getData(fullURL) {
    $.get(fullURL, function(data){
        console.log(data);
        $(".content").html (
            `<p>City Name: ${data.location.name}</p>
            <p>State:${data.location.region}</p>
            <p>Current Time: ${data.location.localtime}</p>
            <p>Country: ${data.location.country}</p>`);
    }).catch(function(error) {
        console.log(error);
        console.log("Your zip code is invalid");
    })
}

function initListener() {
    $("#getWeather").click(function () {
        var zip = $("#zipcode").val();
        var fullURL = baseURL + zip;
        console.log(fullURL);
        getData(fullURL);
    })
}

$(document).ready(function () {
    initListener();
})