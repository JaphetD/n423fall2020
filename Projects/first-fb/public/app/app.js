var _db; 
var fakeNews = {
    fName: "Todd",
    lName: "Shelton",
};

function initFirebase() { 
    firebase 
    .auth() 
    .signInAnonymously() 
    .then(function (result) { 
        console.log("connected"); 
        _db = firebase.firestore();
    }); 
} 

function initListeners() {
    $("add").click(function() {
        _db.collection('names')
        .add(fakeNews)
        .then(function(doc) {
            console.log("Added Data and here is the ref No.: ", doc.id);
        });
    });
    //This gets all of them
    $("get").click(function() {
        _db.collection('names')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data() + ' ' + doc.id);
                console.log(doc.data(), doc.id);
            });
        });

        //this gets one doc.
        // _db.collection('names')
        // .doc("4gKSoTiwPcWY9QKQBDFU")
        // //Also possible to get a specific entry by getting their specific ID
        // .get()
        // .then(function(querySnapshot) {
        //     console.log(querySnapshot.data());
        //     // querySnapshot.forEach(function(doc) {
        //     //     console.log(doc.data(), ' ' , doc.id);
        //     })
        // })
    })
}

$(document).ready(function () { 
    try { 
        let app = firebase.app(); 
        initFirebase();
        initListeners();
        } catch (e) { 
            console.error(e); 
        }
             });

