'use strict'

const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;

console.log(steven);
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2003);
sarah.calcAge();