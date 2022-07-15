'use strict'

const getPosition = function(){
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
};

const whereAmI = async function(){
    const pos = await getPosition();
    const {latitude: lat,longitude: lng} = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = resGeo.ok? await resGeo.json() : 'brazil' 
    const resCountry = await fetch(`https://restcountries.com/v3.1/name/${dataGeo}`)
    const [data] = await resCountry.json();
    renderCountry(data)
    countriesContainer.style.opacity = 1;
}

whereAmI();
console.log('First');