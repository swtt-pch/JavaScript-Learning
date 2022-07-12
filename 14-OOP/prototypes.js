'use strict';

// 209. Prototypes

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this
    //this.calcAge = function(){
    //    console.log(2022 - this.birthYear);
    //}
}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
const jonas = new Person('Jonas', 1991);

// ---------------------------------------------------------------
Person.prototype.calcAge = function(){
    console.log(2022 - this.birthYear);
}

console.log(Person.prototype);

jonas.calcAge()
matilda.calcAge()
jack.calcAge()

console.log(jonas.__proto__.__proto__.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.dir(Person.prototype.constructor);

const arr = [1,2,5,1,2]; // new array === []

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());

const h1 = document.querySelector('h1')

console.dir(x => x +1);