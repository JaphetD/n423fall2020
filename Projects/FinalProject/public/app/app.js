import * as Model from "../model/model.js";

function initListeners() {
    $("nav a").click((e) => {
        let buttonID = e.currentTarget.id;
        console.log(buttonID);
        $.get(`views/${buttonID}/${buttonID}.html`, (PageData) => {
            $("#app").html(PageData);
            // pageListeners()
            contactFormSubmit()
            // console.log(PageData);
            $("#albums").change(function() {
                Model.getAlbumByArtist(this.value);
                Model.getEverything(this.value);
            });
        })
    })
}

// window.pageListeners = function() {
//     $("button").click((e) => {
//         console.log("button");
//     });

//     console.log(MODEL.getName());
// }

window.contactFormSubmit = function () {
    console.log("submit " + $("#fn").val());
}

function initViews() {
    $.get("views/home/home.html", (homePageData) => {
        $("#app").html(homePageData);
        
        initListeners()
    })
}

let Title = document.getElementById("title");
let Everything = document.getElementById("everything");
let Rect = document.getElementById("NavRect");


function initListeners2() {
    $("#everything").append(function() {
        Model.getEverything(this.value);
    });
}

$(document).ready(function() {
    Model.initFirebase();
    Model.signIn(initListeners);
    Model.signIn(initListeners2);
})

// TweenMax.from(Title, { duration: 3, alpha: 0, delay:1});
// TweenMax.from(Everything, { duration: 3, alpha: 0, delay:3});
// TweenMax.from(Rect, { duration: 3, alpha: 0, delay:2});