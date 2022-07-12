'use strict'

// Inheritance Between "Classes": ES6 Classes



class PersonCl {
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

    static hey = function(){
        console.log('Hey there 👋');
        console.log(this);
    }
}

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        // always needs to happen first;
        super(firstName, birthYear);
        this.course = course;
    }

    introduce = function(){
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2022 - this.birthYear} years old, but as a student I feel more like ${2022 - this.birthYear + 10}`);
    }
}

const martha = new StudentCl('Martha Jones', 2000, 'Computer Science');
//const martha = new StudentCl('Martha Jones', 2000);
console.log(martha);
martha.introduce();
martha.calcAge();