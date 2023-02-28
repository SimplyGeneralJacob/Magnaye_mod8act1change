let fullname = prompt("Enter your full name here");
document.getElementById("fname").innerHTML = fullname;
let username = prompt("Enter your username");
document.getElementById("username").innerHTML = username;
let gender = "Press OK if you're Male \nPress CANCEL if you're Female";
if (confirm(gender) == true) {
    alert("Gender set to MALE");
    document.getElementById("gender").innerHTML = "M"
}else{
    alert("Gender Set to FEMALE");
    document.getElementById("gender").innerHTML = "F"
}

let description = prompt("Enter a brief description of yourself");
document.getElementById("desc").innerHTML = description;

let birthyear = prompt("Please enter your birth year:");
document.getElementById("year").innerHTML = birthyear;
const d = new Date();
let yearnow = d.getFullYear();
let yourAge = yearnow - birthyear;
document.getElementById("age").innerHTML = yourAge;

let profilepic = "Do you want to use a Profile Pic? \nClick OK if yes \nClick CANCEL if no"
if (confirm(profilepic) == true) {
    let customprofilepic = prompt("Please enter the file name of your picture (Eg. pfp.jpg)");
    document.getElementById("ppic").src = customprofilepic;
}else{
    alert("No Image has been set.");
    document.getElementById("ppic").src = prof.png;
}