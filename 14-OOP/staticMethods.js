'use strict'

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

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

const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],
    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(mov){
        this.movements.push(mov);
    }
};

Person.hey = function(){
    console.log('Hey there 👋');
    console.log(this);
}

Person.hey()

PersonCl.hey()