'use strict'

let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice Method - Don't change the original array
//console.log(arr.slice(2)); // (3) ['c', 'd', 'e']
//console.log(arr.slice(1,3)); // (2) ['b', 'c']
//console.log(arr.slice(-2)); // (2) ['d', 'e']
//console.log(arr.slice(-1)); // ['e']
//console.log(arr.slice(1,-2)); // (2) ['b', 'c']
//console.log(arr.slice()); // (5) ['a', 'b', 'c', 'd', 'e']
//console.log([...arr]); // (5) ['a', 'b', 'c', 'd', 'e']

// Splice Method - change the original array
//console.log(arr); // (5) ['a', 'b', 'c', 'd', 'e']
//console.log(arr.splice(2), arr); // (3) ['c', 'd', 'e'] (2) ['a', 'b']
//console.log(arr.splice(-1)); // ['e']
//console.log(arr); // (4) ['a', 'b', 'c', 'd']
//arr.splice(1, 2);
//console.log(arr); // ['a', 'd']

// Reverse Method - change the original array
arr = ['a', 'b', 'c', 'd', 'e']; 
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse()); // (5) ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // (5) ['f', 'g', 'h', 'i', 'j']


// Concat Method 
const letters = arr.concat(arr2)
console.log(letters); // (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// Join Method 
console.log(letters.join('-')); // 'a-b-c-d-e-f-g-h-i-j'
