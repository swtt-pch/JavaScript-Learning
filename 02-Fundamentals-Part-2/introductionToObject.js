'use strict'

// Introduction to Objects

const jonas = {
    name: 'Jonas',
    lastName: 'Souza',
    age: new Date().getFullYear() - 2000,
    profession: 'Teacher',
    friends: [
        'Marcos',
        'Victoria',
        'Eduardo'
    ],
}

console.log(jonas)

let interestedIn = prompt('What do you want to know about Jonas? Choose between name, lastName, age, profession and friends')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    while (!jonas[interestedIn]) {
        interestedIn = prompt('Wrong request! Choose between name, lastName, age, profession and friends')
    }
    console.log(jonas[interestedIn])
}

jonas.location = 'São Paulo - SP';
jonas['twitter'] = '@jonasUIUI';
console.log(jonas);

console.log(`${jonas.name} has ${jonas.friends.length}friends, and his best friend is called ${jonas.friends[0]}`); 
