'use strict'

    // Introduction to Array

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
