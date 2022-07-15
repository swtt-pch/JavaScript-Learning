'use strict'

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