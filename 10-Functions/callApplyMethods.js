'use strict'


const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book = function(){}
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
}
lufthansa.book(239, 'Igor Gomes')
lufthansa.book(738, 'Mulan Hansa')
console.log(lufthansa.bookings);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book

//DOES NOT WORK
//book(12, "abc")

// Call method
book.call(eurowings, 23, 'Sarah Willians')
book.call(lufthansa, 234, 'Marry Couper')

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 56,'Harry Louis');
console.log(swiss);

// Apply method
const flightData = [62, 'Maria Carla'];
book.apply(swiss, flightData)
console.log(swiss);

// modern javascript
book.call(swiss, ...flightData);