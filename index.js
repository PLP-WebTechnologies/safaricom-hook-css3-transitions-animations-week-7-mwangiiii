// Part 1: JavaScript Basics

// Variables and Data Types
const name = "John Doe"; // String
const age = 25; // Number
const isStudent = true; // Boolean
const hobbies = ["Reading", "Gaming", "Cycling"]; // Array
const user = { name: "Jane", age: 30, occupation: "Engineer" }; // Object

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User: ${JSON.stringify(user)} (Type: ${typeof user})`);

// Operators: Simple Calculator
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input! Please enter numeric values.");
        return;
    }

    const operation = prompt("Choose an operation (+, -, *, /):");
    let result;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation! Please choose +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}

// Functions: Greeting Message
function greetUser(name) {
    return `Hello, ${name}! Welcome to the JavaScript Assignment.`;
}

const greetingMessage = greetUser("Alice");
document.getElementById("output").innerText = greetingMessage;

// Part 2: JavaScript Control Structures

// If Statement: Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 18) {
    document.getElementById("output").innerText += "\nYou are eligible to vote.";
} else {
    document.getElementById("output").innerText += "\nYou are not eligible to vote.";
}

// Loops: Display Numbers from 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// Changing HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";

// Adding Dynamic Content
const dynamicContentDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicContentDiv.appendChild(newParagraph);
