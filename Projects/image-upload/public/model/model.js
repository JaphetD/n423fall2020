export function initFirebase() {
    console.log("init fb");
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user);
            $("#submitBtn").prop("disabled", (_, val) => !val);
        } else {
            console.log("No User");
        }
    });
}

export function signIn() {
    firebase.auth()
    .signInAnonymously()
    .then(() => {
        console.log("signed in");
    })
    .catch((error) => {
        console.log(error.message);
    })
}

export function signOut() {
    firebase
    .auth()
    .signOut()
    .then(() => {
        console.log("signed out");
        console.log($("#submitBtn").is(":disabled"));
        if(!$("#submitBtn").is(":disabled")) {
            $("#submitBtn").prop("disabled", (_, val) => !val);
        }
    })
    .catch((error) => {
        console.log(error.message);
    })
}

export function uploadImage(fileName, file, metadata){
    const ref = firebase.storage().ref();
    let uploadTask = ref.child(fileName).put(file, metadata);

    uploadTask
    .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
            console.log(url);
        })
    })
    //Another way to do this 
    .then(() => {
        let image = ref.child(fileName);
        let urlPromise = image.getDownloadURL();
        urlPromise.then((url) => {
            console.log(url);
            $(".photoHolder").html(`<img src="${url}">`)    ;
        })
    })

    //Pause the upload
    //uploadTask.pause();
    
    //Resume the upload
    //uploadTask.resume();

    //Cancel the upload
    //uploadTask.cancel();
} 