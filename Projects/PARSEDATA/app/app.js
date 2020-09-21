console.log("start of page");

var students = {};
//adding a listener to the buttons.
function addListener() {
    $("nav a").click(function(e) {
        e.preventDefault();
        var btnID = this.id;
        //do what I want. Multiple ways to configure this
        console.log(students);
        // What if I don't want to store the data locally? 
        getStudentData();
        // parseStudents(students);
    })
}

//Displaying the data that we put into data.json with 
function getStudentData() {
    $.getJSON("../data/data.json", function (data) {
        $(".loader").css("display", "block");
        //another way to grab the data of students. We get the data off the bat and store it in the veriable students.
        // students = data.Students;
        // What if I don't want to store the data locally? 
        parseStudents(data.Students);
        
        //console.log(data);
        // $.each(data.Students, function(idx, value){
        //     // console.log(value.classes);
        //     //template literal is `` to add in a value then surround that value with curly braces. Will not need quotations if you add ``.
        //     $(".content").append(`<p>${value.name}  ${value.grade}</p>`);

            
        //     $.each(value.Classes, function(idx, classes) {
        //         $(".content").append(`<p>${classes}</p>`);
        //     });
        // });
        // addListener();
    });
    // console.log('add');
    $(".loader").css("display", "none");
}

//Cleaned up the code/functions a bit. we took the each loops from getData and made a new function called parseStudents. 
// we took out the word data because is it no longer available so we're passing through studentsArray. 
function parseStudents(studentsArray){
    $.each(studentsArray, function(idx, value){
         console.log(value.classes);
        // template literal is `` to add in a value then surround that value with curly braces. Will not need quotations if you add ``.
             $(".content").append(`<p>${value.name}  ${value.grade}</p>`);

            
           $.each(value.Classes, function(idx, classes) {
                $(".content").append(`<p>${classes}</p>`);
          });
         });
}

$(document).ready(function () {    
// getStudentData();
addListener();
});