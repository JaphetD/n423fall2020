var books = {};
function addListener() {
    $("nav a").click(function(e) {
        e.preventDefault();
        var btnID = this.id;
        console.log(books);
        getBookData();
    })
}

function getBookData() {
    $.getJSON("./data/data.json", function (data) {
        $(".loader").css("display", "block");
        parseBooks(data.Books);
    });
    $(".loader").css("display", "none");
}

function parseBooks(booksArray){
    $.each(booksArray, function(idx, value){
         console.log(value.Pages);
             $(".content").append(`<p>${value.title}  ${value.Pages}</p>`);

            
           $.each(value.pages, function(idx, pages) {
                $(".content").append(`<p>${pages}</p>`);
          });
         });
}

$(document).ready(function () {    
    addListener();
    });