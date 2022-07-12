'use strict'

// Arrow functions
const calcAge2 = birthYear => new Date().getFullYear() - birthYear;
const age2 = calcAge2(2000)
console.log(age2)

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = new Date().getFullYear() - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement2(2000, "Igor"))
console.log(yearsUntilRetirement2(1991, "Jonas"))

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