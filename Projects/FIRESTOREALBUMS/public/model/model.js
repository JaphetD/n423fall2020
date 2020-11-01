var _db;

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

export function signIn(callback) {
    firebase
    .auth()
    .signInAnonymously()
    .then(function(result) {
        _db = firebase.firestore();
        callback();
    });
}

export function getAlbumByArtist 
(genre) {
    $(".content").html('');
    $(".content").append(`<h3>${genre}</h3>`);

    _db
    .collection("Albums")
    .where("genre", "==", genre)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let artist = doc.data();
            // <img src="img_girl.jpg" 
            $(".content").append(`<p>${artist.name} <br> ${artist.albumName} <br> <img src="${artist.albumPhoto}"> <br> ${artist.albumGenre} <br></p>`);
        });
    });
}

export function getEverything () {
    $(".fullContent").html('');
    $(".fullContent").append(`<h3>Every Album:</h3>`);

    _db
    .collection("Albums")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let artist = doc.data();
            // <img src="img_girl.jpg" 
            $(".fullContent").append(`<h4>${artist.name} <br> ${artist.albumName} <br> <img src="${artist.albumPhoto}"> <br> ${artist.albumGenre} <br></p>`);
        });
    });
}

