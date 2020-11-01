// Underscore means its private
var _db;

// Listening for any authentication change
export function initFirebase() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log("There is a user");
        } else {
            console.log("No User");
            _db = "";
        }

        // callback();
    });
}

// Normally you would pass in email and password 
//Callback passes over a function once this block of code is done running 
// After we've signed in we want to add a listener to the combo box
export function signIn(callback) {
    firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
        _db = firebase.firestore();
        callback();
    });
}

//Model is going to handle all service calls 

export function getStudentByClassNumber
(classNumber) {
    // Accessing the class content and wiping it out with html and ' '; 
    $(".content").html('');
    // Adding the class number 
    $(".content").append(`<h3>${classNumber}</h3>`);

    _db
    // reaching into the collection of Students
    .collection("Students")
    // Search and Pulling back any class number that matches class number
    .where("classNumber", "==", classNumber)
    .get()
    // Each time this loops through this document will be each document in that collection
    .then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let student = doc.data();
            // Attaching student first and last name to the  content 
            $(".content").append(`<p>${student.fName} ${student.lName}</p>`);
        });
    });
}