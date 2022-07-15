'use strict'


(async function(){
    try{
        const res = await whereAmI();
        console.log(res);
    } catch(err){
        console.error(err.message);
    }
    console.log('3');
})()