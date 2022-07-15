'use strict'

const imgContainer = document.querySelector('.images')

const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = function(imgPath){
    return new Promise(function(resolve, reject){
        const img = document.createElement('img');
        img.src = imgPath;
        
        img.addEventListener('load', function(){
            imgContainer.append(img);
            resolve(img)
        })

        img.addEventListener('error', function(){
            reject(new Error('Image not found'))
        })
    })
}



// createImage('/img/img-2.jpg')
// .then(img => {
//     curImg = img;
//     return wait(2);
// })
// .then(()=> {
//     curImg.style.display = 'none';
//     return createImage('/img/img-3.jpg');
// })
// .then(img => {
//     curImg = img;
//     return wait(2);
// })
// .then(()=> {
//     curImg.style.display = 'none'
// })
// .catch(err => console.error(err))

const loadNPause = async function(){
    try {
        let curImg = await createImage('/img/img-2.jpg');
        await wait(2);
        curImg.style.display = 'none';
        curImg = await createImage('/img/img-3.jpg');
        await wait(2);
        curImg.style.display = 'none';
    } catch (error) {
        console.log(error);
    }
}

const loadAll = async function(imgArr){
    try{
        const imgs = imgArr.map(async function(img){
            return await createImage(img)
        });

        const res = await Promise.all([...imgs]);
        res.map(img => img.classList.add('parallel'));
    } catch(error){
        console.log(error);
    }

    // Promise.all([...imgs]).then(res => {
    //     res.map(img => {
    //         img.classList.add('parallel');
    //     })
    // }).catch(err => console.log(err))
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);

//loadNPause();




// Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' functio