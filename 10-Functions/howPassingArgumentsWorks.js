'use strict';

const flight = 'LH123';
const igor = {
    name: 'Igor Luiz Gomes de Souza',
    passport: 61729121223
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LS999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 61729121223) {
        alert('Check in')
    } else {
        alert('Wrong passport!!!')
    }
}

//checkIn(flight, igor)
console.log(flight);
console.log(igor);

// Is the same as doing...
const flightNum = flight;
const passenger = igor;

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000)
}

newPassport(igor)

checkIn(flight, igor)

