// Getting access to the model.js. 
// The star means its getting everything in the file that has "export" written on it
// If we only wanted initFirebase it would be import {initFirebase } from " file location ";
import * as Model from "../model/model.js";

//Calling this after we've signed in
function initListeners() {
    $("#classes").change(function() {
        //Make sure to pass over this.value 
        Model.getStudentByClassNumber(this.value);
    })
}


$(document).ready(function () {
    Model.initFirebase();
    Model.signIn(initListeners);
});