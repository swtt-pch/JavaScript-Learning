/*
    // function Declaration & Expression

        // Declaration -> can be called before the initialization
        const juice = makingJuice('orange', 'apple');
        function makingJuice(fruitOne, fruitTwo) {
            console.log(`making juice of ${fruitOne} and ${fruitTwo}`);
        }

        //Expression -> only can be called after the initialization
        const calcAge = function (birthYear) {
            const actualYear = new Date().getFullYear();
            return actualYear - birthYear;
        }
        const years = calcAge(2000)
        console.log(years);
*/

/*
    // Arrow functions
        const calcAge2 = birthYear => new Date().getFullYear() - birthYear;
        const age2 = calcAge2(2000)
        console.log(age2)

        const yearsUntilRetirement = (birthYear, firstName) => {
            const age = new Date().getFullYear() - birthYear;
            const retirement = 65 - age;
            return `${firstName} retires in ${retirement} years`;
        }
        console.log(yearsUntilRetirement(2000, "Igor"))
        console.log(yearsUntilRetirement(1991, "Jonas"))
*/
/*
    // Functions calling other functions

        function cutFruitPieces(fruit) {
            return fruit * 4
        }

        function makingJuice(apples, oranges) {

            const applePieces = cutFruitPieces(apples);
            const orangePieces = cutFruitPieces(oranges);

            const juice = `making juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
            return juice
        }

        console.log(makingJuice(2, 3))
*/
/*
    // Arrow function
        const getAge = birthYear => new Date().getFullYear() - birthYear;

        const yearsUntilRetirement = (birthYear, firstName) => {
            const age = getAge(birthYear)
            const retirement = 65 - age;
            if (retirement <= 0) {
                console.log(`${firstName} has already retired`);
                return -1;
            } else {
                console.log(`${firstName} retires in ${retirement} years`);
                return retirement;
            }
            //return `${firstName} retires in ${retirement} years`;
        }

        console.log(yearsUntilRetirement(2000, "Igor"));

    console.log(yearsUntilRetirement(1950, "marcia"));
*/
/*
    const friends = ['michael', 'steven', 'peter'];
    // add to the first position
    friends.push('jay');
    console.log(friends);

    // add to first position
    friends.unshift('john');
    console.log(friends)

    // remove elements
    friends.pop();
    const popped = friends.pop();
    console.log(friends);

    friends.shift();
    console.log(friends)

    */
/*
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
*/

const jonas = {
    name: 'Jonas',
    lastName: 'Souza',
    birthYear: 2000,
    profession: 'Teacher',
    friends: [
        'Marcos',
        'Victoria',
        'Eduardo'
    ],
    hasDriversLicense: true,

    // calcAge: function () {
    //     return new Date().getFullYear() - this.birthYear
    // }

    calcAge: function () {
        this.age = new Date().getFullYear() - this.birthYear
        return this.age;
    },

    information: function () {
        if (this.hasDriversLicense) {
            return `${this.name} is a ${this.calcAge()}-year old ${this.profession} and he has a drivers licence.`
        } else {
            return `${this.name} is a ${this.calcAge()}-year old ${this.profession} and he has no drivers licence.`
        }
    }

};
console.log(jonas.information());

