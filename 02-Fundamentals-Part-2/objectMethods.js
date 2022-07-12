'use strict'

const jonas = {
    name: 'Jonas',
    lastName: 'Souza',
    birthYear: 2000,
    profession: 'Teacher',
    friends: [
        'Marcos',
        'Victoria',
        'Eduardo'
    ],
    hasDriversLicense: true,

    // calcAge: function () {
    //     return new Date().getFullYear() - this.birthYear
    // }

    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthYear
        return this.age;
    },

    information: function () {
        if (this.hasDriversLicense) {
            return `${this.name} is a ${this.calcAge()}-year old ${this.profession} and he has a drivers licence.`
        } else {
            return `${this.name} is a ${this.calcAge()}-year old ${this.profession} and he has no drivers licence.`
        }
    }

};
console.log(jonas.information());

