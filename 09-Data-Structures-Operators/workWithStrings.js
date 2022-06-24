'use strict';

const airline = 'TAP Air Portugal';

const plane = 'A320';

/* // WORKING WITH STRINGS PART 1
console.log(plane[0]);  // OUTPUT: 'A'

console.log(airline.length);  // OUTPUT: 16

console.log(airline.lastIndexOf('r')); // OUTPUT: 10

console.log(airline.indexOf('Portugal')); // OUTPUT: 8

console.log(airline.slice(4)); // OUTPUT: 'Air Portugal'

console.log(airline.slice(4, 7)); // OUTPUT: 'Air'

console.log(airline.slice(0, airline.indexOf(' ')));  // OUTPUT: TAP

console.log(airline.slice(airline.lastIndexOf(' ')+1)); // OUTPUT: Portugal

console.log(airline.slice(-2)); // OUTPUT: al

console.log(airline.slice(1, -1)); // OUTPUT: AP Air Portuga

const checkMiddleSeat = function(seat) {
    // b and e are middle seats
    const s = seat.slice(-1);

    if(s==='B'||s==='E')
    console.log('you got the middle seat');
    else 
    console.log('you got lucky');
}

checkMiddleSeat('11B') // OUTPUT: you got the middle seat
checkMiddleSeat('23C') // OUTPUT: you got lucky
checkMiddleSeat('3E') // OUTPUT: you got the middle seat
*/
/*
// WORKING WITH STRING PART 2
console.log(airline.toLowerCase()); // OUTPUT: tap air portugal
console.log(airline.toUpperCase()); // OUTPUT: TAP AIR PORTUGAL

const correctName = function(string){
    const passenger = string
    const passengerLower = passenger.toLowerCase();
    const passengerCorrect = passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
    return passengerCorrect
}

console.log(correctName('rOsaNGeLA')); // OUTPUT: 'Rosangela'

// Comparing emails
const email = 'igor@igor.com';
const loginEmail = ' Igor@iGor.Com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail); // OUTPUT: 'igor@igor.com'

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail) // OUTPUT: OUTPUT: 'igor@igor.com'

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.')

console.log(priceGB, priceUS); // OUTPUT: '288,97£' '288.97$' 

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replaceAll('door', 'gate')); // OUTPUT: 'All passengers come to boarding gate 23. Boarding gate 23!'
// regular expession
console.log(announcement.replace(/door/g, 'gate')); // OUTPUT: 'All passengers come to boarding gate 23. Boarding gate 23!'

// Booleans
const plane1 = 'Airbus A320neo';

console.log(plane1.includes('A320')); // OUTPUT: true

console.log(plane1.includes('Boeing')); // OUTPUT: false

console.log(plane1.startsWith('Air')); // OUTPUT: true

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')){
    console.log('Part of the NEW Airbus Family');
} // OUTPUT: 'Part of the NEW Airbus Family'

// Practice exercise 
const checkBaggage = function(itens) {
    const baggage = itens.toLowerCase();

    if(baggage.includes('knife') || baggage.includes('gun')){
        console.log('You are not allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a laptop, some foof and a pocket Knife') // OUTPUT : 'You are not allowed on board'
checkBaggage('Socks and camera') // OUTPUT : 'Welcome aboard!'
checkBaggage('Got some snacks and a GuN for protection') // OUTPUT : 'You are not allowed on board'
*/

// WORKING WITH STRING PART 3

// split and join
console.log('a+very+nice+string'.split('+')); //OUTPUT:  ['a', 'very', 'nice', 'string']
console.log('Igor Gomes Luiz Souza'.split(' ')); //OUTPUT: ['Igor', 'Gomes', 'Luiz', 'Souza']

const [firstName, secondName, , lastName] = 'Igor Gomes Luiz Souza'.split(' ');

console.log(firstName, secondName); // OUTPUT: Igor Gomes

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')

console.log(newName); // OUTPUT: Mr. Igor SOUZA

const capitalizeName = function(name){
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names){
        //namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('igor gomes de souza'); // OUTPUT: Igor Gomes De Souza
capitalizeName('jessica gomes marques') // OUTPUT: Jessica Gomes Marques

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // OUTPUT: '+++++++++++Go to gate 23!'
console.log('Jonas'.padStart(25, '+')); // OUTPUT: '++++++++++++++++++++Jonas'

console.log('Jonas'.padEnd(25, '+'));

const maskCreditCard = function(number) {
    const str = number + '';
    console.log(str);
    const mask = str.slice(-4)
    console.log(mask.padStart(str.length, '*'));
}

maskCreditCard('12345678123456781234');
maskCreditCard(1234567);

// repeat
const message2 = 'BAD WAETHER... All Departues Delayed...'
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(3);
planesInLine(7);
planesInLine(4);