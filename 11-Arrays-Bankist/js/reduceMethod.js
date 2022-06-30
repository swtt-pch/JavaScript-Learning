'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const sumPositives = movements.reduce(function(accumulator, current){
    return current>0? accumulator + current: accumulator;
})

const sumNegatives = movements.reduce(function(acc, cur){
    return cur<0? acc + cur: acc;
})

const sum = movements.reduce(function(acc, cur, index){
    console.log(`Iteration ${index}: ${acc}`);
    return cur + acc;
}, -1000)

console.log(sumPositives);
console.log(sumNegatives);
console.log(sum);

// Maximum Value
const max = movements.reduce((acc, mov) => acc > mov ? acc: mov, movements[0])
const min = movements.reduce((acc, mov) => acc < mov ? acc: mov, movements[0])
console.log(max);
console.log(min);