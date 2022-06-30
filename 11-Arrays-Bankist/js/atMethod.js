'use strict'

const arr = [23, 11, 53]
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// catch the last position in the array
console.log(arr[arr.length - 1]); // 53
console.log(arr.slice(-1)[0]); // 53
console.log(arr.at(-1)); // 53

console.log('igor'.at(0)); // 'i'
console.log('igor'.at(-1)); // 'r'