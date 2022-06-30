'use strict'

const brlToUsd = 5.26;
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// PIPELINE
const totalDepositsUSD = 
    movements.filter(mov => mov > 0)
        .map(mov => mov * brlToUsd)
        .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);