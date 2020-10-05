var students = {
    Students: [
        {
            name: "Japhet",
            lname: "Diaz",
            email: "aaa@aaa.com",
            phone: "317-111-1111",
            age:"23",
            address:"1147 N Whitcomb Ave",
            Classes: ["315", "215"]
        },
        {
            name:"Tara",
            lname: "Smith",
            email: "aaa@aaa.com",
            phone: "317-111-1111",
            age:"23",
            address:"35 N Lawndale Ave",
            Classes: ["425", "320"]
        },
    ],
};

//To check information, use an if statement
// if(localStorage) {
//     // alert("I have it")
//     //To go through the array we used the JSON.stringify function 
//     localStorage.setItem('Students', JSON.stringify(students));

//     //We put the JSON.parse into a variable in order to be able to console.log the array 
    
//     var st = JSON.parse(localStorage.getItem('Students'));

//     console.log(st.Students);
// } else {
//     // alert('nope')
// }

// function clicklisten() {
//     console.log("it works");

//     var newName = document.getElementById('submit').value;
//     console.log(newName);
//     students.Students.push({"name":newName});
//     localStorage.setItem('students', JSON.stringify(students));
//     Students.push(students);
// }
// console.log(clicklisten);

$("#newStudent").click(function (e) {
    e.preventDefault();
    let student = $("#studentValue").val(),
        lastName = $('#lName').val(),
        email = $('.email').val(),
        phone = $('.phoneNumber').val(),
        age = $('.age').val(),
        address = $('.Address').val(),
        classes = $('.Classes').val();


    // studentList = localStorage.getItem("students");

    students.Students.push({ name:student, lastname:lastName, email: email, phone: phone, age: age,  
        address: address, Classes:classes}); 
    // students.Students.push({ lname:lastName });
    localStorage.setItem("studentList", JSON.stringify(students));
    // text = localStorage.getItem("studentsList", JSON.stringify(students));
    // document.getElementById("studentList").innerHTML = localStorage.getItem("studentList");

    document.getElementById("newStudentList").innerHTML = "Name:" +  student+ ' ' + lastName + 
    "<br>" + "Email:" +  email + "<br>" + "Phone:" + phone+ "<br>"
    + "Age:"  + age + "<br>" + "Address:" +  address + "<br>" +
    "Classes:" + classes;



    // JSON.parse(studentList);
    // console.log(students);
    // console.log(studentList);
    
})

$("#studentListButton").click(function(e) {
    e.preventDefault();
    document.getElementById("studentList").innerHTML = localStorage.getItem("studentList");
})

// document.getElementById("#studentList").innerHTML = localStorage.getItem("Students");

// console.log(showStudents);

// $("#showStudents").click(function () {
// text = localStorage.getItem("Students");
// document.write(text);
// })

