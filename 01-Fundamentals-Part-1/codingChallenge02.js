/*Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 
GOOD LUCK */

let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let JohnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / JohnHeight ** 2;

let markHigherBMI = markBMI > johnBMI ? true : false;

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`)
} else {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})`)
}