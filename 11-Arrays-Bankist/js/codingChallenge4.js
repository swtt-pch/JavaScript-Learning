'use strict'

const dogs = [
    {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
    {weight: 8, curFood: 200, owners: ['Matilda']},
    {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
    {weight: 32, curFood: 340, owners: ['Michael']}
]

const compareCurRecoFood = function(cur, reco){
    if(cur > (reco * 0.90) && cur < (reco * 1.10)) {
        return true
    } ;
    return false;
}

// 1.
dogs.forEach(dog => dog['recommendedFood'] = dog.weight ** 0.75 * 28);
console.log(dogs); 

// 2.
const sarahsdog = dogs.find(dog => dog.owners.includes('Sarah'));

console.log(`Sarah's dog is eating too ${sarahsdog.curFood>sarahsdog.recommendedFood ? 'much' : 'little'}`);

// 3.
/*
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

dogs.forEach(dog => {
    dog.curFood > dog.recommendedFood ? ownersEatTooMuch.push(dog) : ownersEatTooLittle.push(dog);
})
*/
const ownersEatTooMuch = dogs.filter(dog=> dog.curFood> dog.recommendedFood)

const ownersEatTooLittle = dogs.filter(dog=> dog.curFood < dog.recommendedFood)

console.log(ownersEatTooMuch.flatMap(owners => owners.owners).join(' and ') + ' dog`s eat too much');

console.log(ownersEatTooLittle.flatMap(owners => owners.owners).join(' and ') + ' dog`s eat too little');

// 4.

console.log(dogs.some(dog => dog.curFood == dog.recommendedFood));


// 5.
console.log(dogs.some(dog => compareCurRecoFood(dog.curFood, dog.recommendedFood)));

// 6.

const eatingOkay = dogs.filter(dog => compareCurRecoFood(dog.curFood, dog.recommendedFood))

console.log(eatingOkay);

// 7.

const sortingDogs = dogs.slice().sort((cur, next) => cur.recommendedFood - next.recommendedFood);

console.log(sortingDogs);

console.log(dogs);