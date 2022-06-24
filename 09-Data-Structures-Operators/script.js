'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; 

const hours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhance object literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicius pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Capri',
  owner: 'Giovanni Rossi',
};

const question = new Map([
  ['question', 'What`s the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again...']
])

console.log(question);

console.log(Object.entries(hours));

const oppeningHours = new Map(Object.entries(hours))

console.log(oppeningHours);

console.log(question.get('question'));

for(const [key, value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

//const answer = Number(prompt('your answer'));

const answer = 3;

console.log( question.get (question.get('correct') === answer ) );

console.log([...question]);

// ----------------------------------------------------------------------------------------------------
/*
const rest = new Map();

rest.set('name', 'Classico Italiano');

rest.set(1, 'Ferraz de Vasconcelos, SP')
rest.set(2, 'São Paulo, SP')

console.log(rest);

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23)

rest.set(true, 'We are open')
rest.set(false, 'We are close')

// console.log(rest);

//console.log(rest.get('name'));

//console.log(rest.get(true));

const time = 21;

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

rest.delete(2)

//rest.clear();

console.log(rest.size);

const arr = [1,2]

rest.set(arr, 'test')
rest.set(document.querySelector('h1'), 'HEADING')

console.log(rest.get(arr));

console.log(rest);
*/
// ---------------------------------------------------------------------------------------------------

/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza'])

console.log(new Set('Jonas'));

console.log(ordersSet.size);

console.log(ordersSet.has('bread'));

ordersSet.add('Bread');

ordersSet.add('Bread');

ordersSet.delete('Risotto')

console.log(ordersSet);

for(const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
console.log(new Set('IGOR LUIZ GOMES DE SOUZA').size);
*/
//--------------------------------------------------------------------------------------------

/*
// LOOP OBJECTS

//property NAMES
const properties = Object.keys(hours)
console.log(properties);
let openStr = 'we are open on '+properties.length+ ' days: ';
for(const day of Object.keys(hours)){
  openStr += `${day}, `
}
console.log(openStr);

// property VALUES
const values = Object.values(hours);
console.log(values);

// Entire object
const entries = Object.entries(hours)
//console.log(entries);

// [key, value]
for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open ay ${open} and close at ${close}`);
}

//if(restaurant.hours && restaurant.hours.mon) console.log(restaurant.hours.mon.open);



*/
/*
 // WITH OPTIONAL CHAINING
console.log(restaurant.hours.mon?.open);
console.log(restaurant.hours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; 

for(const day of days){
  console.log(day);
  const open = restaurant.hours[day]?.open ?? 'closed'
  console.log(`ON ${day}, we open at ${open}`);
}


console.log(restaurant.order?.(0.1) ?? 'method does not exist');

const users = [{name : "Igor", email: "igor@igor.io"}];
console.log(users[0]?.name ?? 'User array empty');


//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
// OR Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH Assignment Operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner = rest1.owner && '<ANONYMOUS>';

// AND Assignment Operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

//console.log(rest1);
//console.log(rest2);
*/
/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for(const item of menu) console.log(item);

for(const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


//console.log([...menu.entries()]);
*/
/*

// Use any data type, return any data type, short-circuiting
// or operatar will return the first truly value if its true or the last falsie value if its false
// and operator will return the last truly value if its true or the first falsie value if its false

// OR Operator
console.log('----OR OPERATOR----');
console.log(3 == 2 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND OPERATOR----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

*/

// ----------------------------------REST PATTERN N PARAMETERS -----------------------
// // 1 - Destructuring

// //Spread, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...c] = [1, 2, 3, 4, 5];
// console.log(a, b, c);

// // REST, because on LEFT side of =
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// // 2 - Functions

// // rest parameters
// const add = function (...arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 2, 7, 1);
// add(3, 2, 5, 1, 3, 6, 7, 2, 2, 3);
// const x = [5, 2, 2, 6, 1, 8];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olivers', 'spinach');
// restaurant.orderPizza('mashrooms');

// // --------------------- The Spread Operator ----------------------

// const newArr = [1, 2, ...arr]; // The spread operator
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// //Join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Igor';
// const letters = [...str, ' ', 'S'];
// console.log(letters);
// console.log(...str);

// // real world exemple
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient 1?"),
// //   prompt("Let's make pasta! Ingredient 2?"),
// //   prompt("Let's make pasta! Ingredient 3?"),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foulderIn: 1992, ...restaurant, foulder: 'Guiseppe' };

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'TESTEEE';

// console.log(newRestaurant);
// console.log(restaurant);
// console.log(restaurantCopy);

// ----------------------------- DESTRUCTURING OBJ ---------------------
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Lidio Nunes Duarte, 208',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Lidio Nunes Duarte, 208',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //  nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ------------------------ DESTRUCTURING ARRAYS -------------------
// const arr = [2, 3, 4];

// // older way
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // destructuring assign an array
// const [x, y, z] = arr;
// const [x1, , x2] = arr;
// console.log(z, y, z);
// console.log(x1, x2);

// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // //switching values
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// // switching with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

