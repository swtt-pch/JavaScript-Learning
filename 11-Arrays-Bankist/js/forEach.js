'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log("-----FOR OF-----");
//for(const movement of movements){
for(const [i, value] of movements.entries()){
    if(value > 0) console.log(`Movement ${i+1}: You deposited ${value}`);
    else  console.log(`Movement ${i+1}: You withdrew ${Math.abs(value)}`);
}

console.log("-----FOR EACH-----");
// can't break in the middle of executation
movements.forEach(function(value, index, array){
    if(value > 0) console.log(`Movement ${index+1}: You deposited ${value}`);
    else  console.log(`Movement ${index+1}: You withdrew ${Math.abs(value)}`);
});
// 0: function(200, 0, self)
// 1: function(450, 1, self)
// 2: function(400, 2, self)
// ...