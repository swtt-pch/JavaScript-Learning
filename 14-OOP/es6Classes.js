'use strict'

// 213. ES6 Classes

// class expression
//const Person = class{};

// class declaration
class Person {
    // first: constructor
    constructor(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    }

    greet(){
        console.log(`Hey, ${this.firstName}!`);
    }
}

const jessica = new Person('Jessica', 2000);
console.log(jessica);
jessica.calcAge()
console.log(jessica.__proto__ === Person.prototype);

//Person.prototype.greet = function(){
//    console.log(`Hey, ${this.firstName}!`);
//}

jessica.greet()

// 1. Classes are NOT Hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode