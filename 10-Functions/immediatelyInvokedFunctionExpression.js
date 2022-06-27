'use strict';

//const runOnce = function(){
//    console.log('this will never run again');
//}

//runOnce();

//IIFE
(function() {
    console.log('this will never run again');
    const isPrivate = 23;
})();

(() => console.log('this will never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 12
}

//console.log(isPrivate);
console.log(notPrivate);