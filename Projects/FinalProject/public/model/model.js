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
    .collection("Decks")
    .where("genre", "==", genre)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let card = doc.data();
            // <img src="img_girl.jpg" 
            $(".content").append(`<p>${card.rarity} <br> ${card.cardName} <br> <img src="${card.cardPhoto}"> <br> ${card.cardGenre} <br></p>`);
        });
    });
}

export function getEverything () {
    $(".fullContent").html('');
    $(".fullContent").append(`<h3>Every Card:</h3>`);

    _db
    .collection("Decks")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function (doc) {
            let card = doc.data();
            // <img src="img_girl.jpg" 
            $(".fullContent").append(`<h4>${card.rarity} <br> ${card.cardName} <br> <img src="${card.cardPhoto}"> <br> ${card.cardGenre} <br></p>`);
        });
    });
}

