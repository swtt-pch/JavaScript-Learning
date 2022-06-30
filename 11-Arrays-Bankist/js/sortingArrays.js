'use strict';

const owners = ['Jonas', 'Igor', 'Zac', 'Adam', 'Martha'];

console.log(owners); // (5) ['Jonas', 'Igor', 'Zac', 'Adam', 'Martha']
console.log(owners.sort()); // (5) ['Adam', 'Igor', 'Jonas', 'Martha', 'Zac']

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements); // 8) [200, 450, -400, 3000, -650, -130, 70, 1300]

// return < 0 a, b
// return > b, a
/*
movements.sort((currentValue, nextValue) => {
    if(currentValue>nextValue){
        return 1
    } else if(nextValue > currentValue){
        return -1
    }
}) */ 

movements.sort((currentValue, nextValue) => currentValue - nextValue)

console.log(movements)

/*
movements.sort((currentValue, nextValue) => {
    if(currentValue>nextValue){
        return -1
    } else if(nextValue > currentValue){
        return 1
    }
})
*/

movements.sort((currentValue, nextValue) => nextValue - currentValue)
console.log(movements)