'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountry = function (data, className = '') {
    const html = ` 
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name
        }</p>
        </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    //countriesContainer.style.opacity = 1;
};

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

// OLDER WAY
/*
const getCountryAndNeighbour = function (country) {
    // AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        //console.log(this.responseText);

        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // render country 1
        renderCountry(data)

        // get neighbour country
        const [neighbour] = data.borders;

        if(!neighbour) return;

        // AJAX call country 1
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load', function(){
            const [data2] = JSON.parse(this.responseText)
            console.log(data2);
            renderCountry(data2, 'neighbour')
        })
    });
};
*/

//getCountryAndNeighbour('france');

// Callback hell: looks like a triangle
/*
setTimeout(()=> {
    console.log('1 second passed');
    setTimeout(()=> {
        console.log('2 second passed');
        setTimeout(()=> {
            console.log('3 second passed');
            setTimeout(()=> {
                console.log('4 second passed');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
*/

//const request = new XMLHttpRequest();
//request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//request.send();

// container
//const request = fetch('https://restcountries.com/v3.1/name/france');

//console.log(request); // Promise

/*
---------------------PROMISE LIFECYCLE-------------------------
PEDING: Before the future value is available
->ASYNC TASK->
SETTLED: Asychronous task has finished
if(success){
    FULFILLED: The value is now available
} else if(error){
    REJECTED: An error happened
}
*/

// CONSUMING PROMISES
// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//         renderCountry(data[0])
//     })
// }

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`)

        return response.json()
    });
}

// Easy to read...
// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//         console.log(response);

//         if(!response.ok) 
//             throw new Error(`Country not found (${response.status})`)

//         return response.json()
//     })
//     .then((data) => {
//         renderCountry(data[0]);
//         //const neighbour = data[0].borders[0];
//         const neighbour = 'sajskas'
//         if(!neighbour) return;
//         //Country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => {
//         if(!response.ok) 
//         throw new Error(`Country not found (${response.status})`)
//         return response.json()
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => renderError(`${err.message} 💥💥💥`))
//     .finally(()=> {
//         countriesContainer.style.opacity = 1;
//     })
// }


const getCountryData = function(country){
    getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then((data) => {
        renderCountry(data[0]);
        const neighbour = data[0].borders?.[0];
        //const neighbour = 'sajskas'

        if(!neighbour) throw new Error('No neighbour fould');

        //Country 2
        return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => renderError(`${err.message} 💥💥💥`))
    .finally(()=> {
        countriesContainer.style.opacity = 1;
    })
}

//getCountryData('brazil') 
/*
const getPosition = function(){
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
};

const whereAmI = function(){
    getPosition().then(res => {
        const {latitude: lat,longitude: lng} = res.coords; = res.coords;
        return getJSON(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    }).then(data => getCountryData(data.country))
    .catch(err => console.log(err))
}

btn.addEventListener('click', function(){
    whereAmI();
})
*/

const getPosition = function(){
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
};

const whereAmI = async function(){
    try{
        const pos = await getPosition();
        const {latitude: lat,longitude: lng} = pos.coords;
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const dataGeo = resGeo.ok? await resGeo.json() : 'brazil' 
        const resCountry = await fetch(`https://restcountries.com/v3.1/name/${dataGeo}`)
        const [data] = await resCountry.json();
        renderCountry(data)
        countriesContainer.style.opacity = 1;
        return `You are in ${dataGeo}`
    } catch(err) {
        renderError(err.message)

        //reject promise returned from async function
        throw err
    }
};
/*
console.log('1');
// const msg = whereAmI();
// console.log(msg);
// whereAmI().then(city => console.log(city)).catch(err => console.error(err.message)).finally(()=>console.log('3'))

(async function(){
    try{
        const res = await whereAmI();
        console.log(res);
    } catch(err){
        console.error(err.message);
    }
    console.log('3');
})()
*/
/*
const get3Countries = async function(c1,c2,c3) {
    try{
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

        const data = await Promise.all([getJSON(`https://restcountries.com/v3.1/name/${c1}`), getJSON(`https://restcountries.com/v3.1/name/${c2}`), getJSON(`https://restcountries.com/v3.1/name/${c3}`)])

        console.log(data.map(d => d[0].capital).flat());
    } catch(err){
        console.error(err);
    }
}

get3Countries('portugal', 'france', 'brazil')
*/

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