'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// const getData = function(url, error = 'Something went wrong'){

//     return fetch(url)
//     .then(response => {
//         if(!response.ok) throw new Error(`Error: ${error}`)

//         return response.json();
//     })
// }

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
    //countriesContainer.style.opacity = 1;
}

const getJSON = function(url, errorMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`)

        return response.json()
    });
}

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

const whereAmI = function(lat, lng){
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
        if(!response.ok) throw new Error(`Error: Something went wrong`);
        return response.json();
    })
    .then(data => getCountryData(data.country))
    .catch(err => console.log(err))
}



whereAmI('-33.933', '18.474');