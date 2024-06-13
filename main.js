"use strict";
//                 Day 35 Challenge: Start Coding! 
Object.defineProperty(exports, "__esModule", { value: true });
//Question 103:
//Write a function that returns a random boolean value, true or false.
function getRandomBoolean() {
    return Math.random() > 0.5;
}
console.log(getRandomBoolean()); // Outputs true or false randomly
// Question 104: 
// Create a function that generates a random hexadecimal color code.
function getRandomHexColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
console.log(getRandomHexColor()); // Outputs a random hexadecimal color code
// Question 105: 
// Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(rollDice()); // Outputs a random number between 1 and 6
