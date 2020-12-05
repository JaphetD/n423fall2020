import * as Model from "../model/model.js";
let Title = document.getElementById("title");
let Everything = document.getElementById("everything");
let Rect = document.getElementById("NavRect");

function initListeners() {
    $("#albums").change(function() {
        Model.getAlbumByArtist(this.value);
        Model.getEverything(this.value);
    });
}

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
