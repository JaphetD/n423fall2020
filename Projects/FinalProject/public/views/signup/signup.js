var _db; 
var fakeNews = {
    fName: "Todd",
    lName: "Shelton",
};



function initFirebase() {
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

function updateUser(disName, photo) {
    firebase.auth().currentUser.updateProfile({
        displayName: disName,
        photoURL: photo,
    });
}

function initListeners() {
    console.log("it works!");
    $("#add").click(function() {
        console.log("It works");
        _db.collection('names')
        .add(fakeNews)
        .then(function(doc) {
            console.log("Added Data and here is the ref No.: ", doc.id);
        });
    });

   $("#signup").click(function() {
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


        $("#loginBtn").click(function() {
            console.log("It works login");
            let email = $(".email").val();
            let password = $("#password").val();
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              });
            
        });

        $("#logout").click(function() {
            firebase.auth().signOut().then(function() {
              console.log("signed out");//1
              //This makes it to where users who are not signed in cannot get data
              _db = "";
              }).catch(function(error) {
                console.log("Error signing out");
              });
            });

            var user = firebase.auth().currentUser;

            $("#update").click(function() {
                user.updateProfile({
                    displayName: "Updated User",
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                  }).then(function() {
                     Console.log("Update successful.")
                  }).catch(function(error) {
                    Console.log("An error happened.")
                  });
                });
            
    //This gets all of them
    $("#get").click(function() {
        console.log("It Works");
        _db.collection('names')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                //returns object object because of the + format
                console.log(doc.data() + ' ' + doc.id);
                console.log(doc.data(), doc.id);
            });
        });
    })
}

$(document).ready(function () { 
    console.log("It works!");
    try { 
        let app = firebase.app();
         
        initFirebase();
        initListeners();
        } catch (e) { 
            console.error(e); 
        }
             });

