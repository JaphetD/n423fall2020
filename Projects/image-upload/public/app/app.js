import * as MODEL from "../model/model.js";

function initListeners() {
    $("#signIn").click((e) => {
        MODEL.signIn();
    })

    $("#signOut").click((e) => {
        MODEL.signOut();
    })
    
    $("#submitBtn").click((e) => {
        let file = $("#myImage").get(0).files[0];
        let fileName = +new Date() + "-" + file.name;
        let metadata = {contentType: file.type};

        MODEL.uploadImage(fileName, file, metadata);
    });
}

$(document).ready(() => {
    MODEL.initFirebase();
    initListeners();
})