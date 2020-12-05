import * as Model from "../model/model.js";

var _db; 
var fakeNews = {
    fName: "Todd",
    lName: "Shelton",
};



function initFirebase2() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //This 
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;  
          console.log("user is there ", displayName, email, user);
          console.log("connected");
        _db = firebase.firestore();
          // ...
        } else {
          console.log("user is not there");
          _db = null;
        }
      });
   
} 

function initListeners() {
    $("nav a").click((e) => {
        let buttonID = e.currentTarget.id;
        console.log(buttonID);
        $.get(`views/${buttonID}/${buttonID}.html`, (PageData) => {
            $("#app").html(PageData);
            // pageListeners()
            contactFormSubmit()
            $("#signupBtn").click(function() {
                console.log("it works")
                //the variables have to be the exact same (email, password)
                let email = $(".email").val();
                let password = $("#password").val();
                let displayName = $("#fName").val();
                let photoURL = "http://t.jpg";
             firebase
             .auth()
             .createUserWithEmailAndPassword(email, password)
             .then((result) => {
                 console.log(result.user.uid);
                 alert("You are now registered and logged in!" + ' ' +  email);
                 if(result.user) {
                    updateUser(displayName, photoURL);
                 }
             })
             .catch(function(error) {
                 // Handle Errors here.
                 var errorCode = error.code;
                 var errorMessage = error.message;
                 // ...
                 console.log(errorMessage + ' ' + errorCode + " ", error);
               }); 
                 });
         
            // console.log(PageData);
            $("#add").click(function() {
                console.log("It works");
                _db.collection('names')
                .add(fakeNews)
                .then(function(doc) {
                    console.log("Added Data and here is the ref No.: ", doc.id);
                });
            });
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
    initViews();
    initFirebase2();
    Model.initFirebase();
    Model.signIn(initListeners);
    Model.signIn(initListeners2);
})

// TweenMax.from(Title, { duration: 3, alpha: 0, delay:1});
// TweenMax.from(Everything, { duration: 3, alpha: 0, delay:3});
// TweenMax.from(Rect, { duration: 3, alpha: 0, delay:2});