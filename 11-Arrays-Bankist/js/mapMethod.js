'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const brlToUsd = 5.26;
const arrFunc = mov => mov * brlToUsd;
const movementsBrl = movements.map(arrFunc);

console.log(movements);
console.log(movementsBrl);

const movementsBrlFor = []
for(const mov of movements){
    movementsBrlFor.push(mov*brlToUsd)
}

console.log(movementsBrlFor);

const movementsDescription = movements.map(function(value, index, array){
    if(value > 0) {
        return `Movement ${index+1}: You deposited ${value}`;
    } else {
        return `Movement ${index+1}: You withdrew ${Math.abs(value)}`;
    };
})

console.log(movementsDescription);