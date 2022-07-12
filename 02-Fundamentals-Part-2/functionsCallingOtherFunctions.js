'use strict'

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