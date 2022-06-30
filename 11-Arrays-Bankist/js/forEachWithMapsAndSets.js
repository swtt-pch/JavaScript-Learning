'use strict'

console.log('-----FOR EACH MAPS-----');
// Map [key, value]
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
  
currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});
// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

console.log('-----FOR EACH SETS-----');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
})

// USD: USD
// GBP: GBP
// EUR: EU