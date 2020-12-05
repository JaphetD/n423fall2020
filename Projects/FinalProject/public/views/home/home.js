var settings = {
    "async": true,
    "crossDomain": true,
    //Need to figure out how to replace the ending card name and apply the api key 
    "url": `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera`,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "4224e87958msh03701fd26207f9ap1f3f8ejsnd071ae908c70",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }
};

var apiKey = "/?rapidapi-key=4224e87958msh03701fd26207f9ap1f3f8ejsnd071ae908c70";
var baseURL = `https://omgvamp-hearthstone-v1.p.rapidapi.com${apiKey}/cards/`;
// var threeURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=3&q=`;

function getData(fullURL) {
    $.get(fullURL, function(data){
   
    }).catch(function(error) {
        console.log(error);
        console.log("Invalid Card Name");
    })
}

function parseCard(response) {
    $.each(response, function(idx,value) {
        console.log(value);
        $.each(value, function(idx, response) {
            $(".content").append(

            )
        })
    })
}


function initListener() {
    $("#getCard").click(function () {
        var card = $("#cardName").val();
        var fullURL = baseURL + card;
        console.log(fullURL);
        console.log(card);
        getData(fullURL);
        
        $.ajax(settings).done(function (response) {
            console.log(JSON.stringify({response}));
            
            Cardinfo = JSON.stringify({response});


            $(".content").append(Cardinfo);
            
        });
    })
}

$(document).ready(function () {
    initListener();
})