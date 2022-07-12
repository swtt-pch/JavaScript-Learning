'use strict'

// Data Types 
let isJavaScriptFun = true;
console.log(isJavaScriptFun)

//console.log(typeof true);
console.log(typeof isJavaScriptFun);
//console.log(typeof 23);
//console.log(typeof "true");

isJavaScriptFun = 'Yes!';
console.log(typeof isJavaScriptFun);

let year;

console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30; //block scoped
age = 31; // reassign

const birthYear = 2000; //can not be changed
//birthYear = 2001; 
//const job;

var job = "programmer"; // function scoped
job = "teacher";