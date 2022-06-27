'use strict';

// CLOSURES
/*
    const secureBooking = function(){
        let passengerCount = 0;

        return function(){
            passengerCount++;
            console.log(`${passengerCount} passengers`);
        };
    }

    const booker = secureBooking();
    const booker2 = secureBooking();
    console.dir(booker)
    booker(); // 1 passengers
    booker(); // 2 passengers
    booker(); // 3 passengers

    booker2(); // 1 passengers
    booker2(); // 2 passengers
    booker2(); // 3 passengers

*/
// EXAMPLE 1
    let f;
    const g = function(){
        const a = 23;
        f = function(){
            console.log(a*2);
        }
    }

    const h = function(){
        const b = 291;
        f = function(){
            console.log(b*2);
        }
    }

    g();
    f();

    //console.dir(f);

    // Re-assigning f function
    h();
    f();

    //console.dir(f)

// EXEMPLA 2
const boardPassengers = function(n, wait){
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start board in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180,3);
