'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);
const positive = value => value > 0;
const equals = (value) => value === -650;

// SOME
    // EQUALITY
    console.log(movements.includes(-130));

    // CONDITION
    console.log(movements.some(positive));  
    console.log(movements.some(equals));  

// EVERY
console.log(movements.every(positive));
console.log([430, 1000, 700, 50, 90].every(positive));


