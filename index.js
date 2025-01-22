console.log("this is my first website");
// window.alert("this is my first website");

let firstname = "John";
let age = 25;

console.log("Hello", firstname);
console.log("you are of", age, "years old");


document.getElementById("p1").innerHTML="hello "+ firstname;
document.getElementById("p2").innerHTML="you are of " + age + " years old";

//to accept user input.
// let username;
// document.getElementById("submit").onclick=function(){
//     username=document.getElementById("nameInput").value;
//     console.log("The username that you entered is: ", username);
// };
document.addEventListener("DOMContentLoaded", function() {
    let username;
    document.getElementById("submit").onclick = function() {
        username = document.getElementById("nameInput").value;
        document.getElementById("result").innerHTML = "Hello " + username;
        console.log("Your username that you entered is: ", username);
        console.log(typeof(username));
    };
});


let temp=10;
if(!(temp>20)){
    console.log("It is cold outside");
};


