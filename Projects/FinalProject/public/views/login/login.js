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
   

$("#login").click(function() {
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