'use strict'

class Person {
    // first: constructor
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2022 - this.birthYear);
    }

    greet(){
        console.log(`Hey, ${this.firstName}!`);
    }

    get age(){
        return 2022 - this.birthYear
    }

    set fullName(name){
        console.log(name);
        if(name.includes(' ')){
            this._fullName = name;
        } else {
            console.log(`${name} is not a full name!`);
        }
    }

    get fullName(){
        return this._fullName;
    }
}

const jessica = new Person('Jessica Davis', 2000);

const walter = new Person('Walter White', 1995)

console.log(jessica.age); 
console.log(jessica);
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

console.log(account.latest);

account.latest = 50;

console.log(account.latest);