'use strict'


// Promise.race

(async function(){
    const res = await Promise.race(
        [
            getJSON(`https://restcountries.com/v3.1/name/italy`), getJSON(`https://restcountries.com/v3.1/name/egypt`), getJSON(`https://restcountries.com/v3.1/name/mexico`)
        ]
    );
    console.log(res[0]);
})();
const timeout = function(s){
    return new Promise(function(_, reject){
        setTimeout(function(){
            reject(new Error('Request took too long!'))
        }, s*1000)
    })
}

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    timeout(0.2)
]).then(res => console.log(res[0])).catch(err=>console.log(err))

// Promise.allSettled 
Promise.allSettled([
    Promise.resolve('Sucess'),
    Promise.reject('Error'),
    Promise.resolve('Sucess'),
    Promise.resolve('Sucess'),
]).then(res => console.log(res)).catch(err=>console.log(err))

// Promise.any
Promise.any([
    Promise.resolve('Sucess'),
    Promise.resolve('look'),
    Promise.resolve('1'),
]).then(res => console.log(res)).catch(err=>console.log(err))