'use strict';

// js engine executes javascript code -> v8 engine (presents on chrome and node.js)
// JavaScript is Just in Time compilation

// Execution context : Variable environment; Scope chain; this keyword

// Callstack: order of execution of the script, starting for the global scope, then function, the others
//      Global scope: will run every const, var and let, also the functions in the scope
//          - Once a function is called, the global scope stops and the function becomes the main thread until that function stops
//          - Same for calling other function inside of a function, the first one who called the function stops until the second one how is called stops;

// Lexical scoping: scoping is controlled by placement of function and block in the code

// There is global scope, function scope, and block scope;
//  Scope of a variable is the region of our code where a certain variable can be accessed;

// Global scope: outside of any function or block (variables declared in global scope can are acessible everywhere)
// Function scope: variables are accessible only inside function, not outside. Also called local scope.
// Block scope (ES6): block scope is, like, IF statements, for loops... Variables are accessible only inside block (block scoped). ⚠️ HOWEVER, this only appplies to let and const variables. Functions are also block scoped (only in strict mode);

// Scope chain -> All scopes has access to variables from all outer scopes
// let and const are block-scoped// var is function-scoped

// const calcAge = function (birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName}, you are ${age} years old`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 2001) {
//       const str = `${firstName}, so cool!`;
//       var cool = true;

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// };

// const firstName = 'Igor';
// calcAge(2000);

// Hoisting
//

// this Keyword
// Method -> object that is calling the method
// const jonas = {
//     name: "Jonas",
//     year: 2000,
//     calcAge: function (){
//         return 2037 - this.year; // this, in this case, is calling the object jonas.
//     }
// }
// jonas.calcAge()

// Simple function call -> this = undefined

// (Don't get own this) Arrow function -> this. = <this is surrounding function (lexical this)>

// Event listener -> this = <DOM element that the handler is attached to>

// this does not point to the functiion itself...

// Regular function x Arrow function

// const jonas = {
//   firstNama: 'Jonas',
//   year: 1991,

//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },

//   greet: () => {
//     console.log(`HEy, ${this.firstName}`);
//     console.log(this);
//   },
// };

// jonas.greet();

// console.log(this.firstName);

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Igor',
//   age: 21,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('ME', me);

// Primitive types
let lastName = 'Souza';
let oldLastName = lastName;
lastName = 'Gomes';

console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before married', jessica);
console.log('After married', marriedJessica);

//marriedJessica = {}; // it does not work

//Copy objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
  family: ['Alice', 'Bob'],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Souza';
console.log('Before married', jessica2);
console.log('After married', jessicaCopy);

jessicaCopy.family.push('Marry');
jessica2.family.push('Colly');

console.log('Jessica2', jessica2);
console.log('Copy', jessicaCopy);
