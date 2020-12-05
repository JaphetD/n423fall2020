import * as MODEL from "../model/model.js";
function initListeners() {
    $("nav a").click((e) => {
        let buttonID = e.currentTarget.id;
        console.log(buttonID);
        $.get(`views/${buttonID}/${buttonID}.html`, (PageData) => {
            $("#app").html(PageData);
            pageListeners()
            contactFormSubmit()
        })
    })
}

function pageListeners() {
    $("button").click((e) => { 
        console.log("button");
});
console.log(MODEL.getName());
}

window.contactFormSubmit = function () {
    console.log("submit " + $("#fn").val());
}

function initViews() {
    $.get("views/home/home.html", (homePageData) => {
        $("#app").html(homePageData);
        initListeners()
    })
}

$(document).ready(() => {
    initViews();
});