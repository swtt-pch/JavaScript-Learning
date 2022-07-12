'use strict'

// 208. Constructor Functions and the new Operator

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    //this.calcAge = function(){
    //    console.log(2022 - this.birthYear);
    //}
}

const jonas = new Person('Jonas', 1991);

console.log(jonas); // object

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
const jay = 'Jay'
console.log(matilda, jack); // objects
console.log(jonas instanceof Person); // true
console.log(jay instanceof Person); // false

