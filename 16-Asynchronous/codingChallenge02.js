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

let curImg;

createImage('/img/img-2.jpg')
.then(img => {
    curImg = img;
    return wait(2);
})
.then(()=> {
    curImg.style.display = 'none';
    return createImage('/img/img-3.jpg');
})
.then(img => {
    curImg = img;
    return wait(2);
})
.then(()=> {
    curImg.style.display = 'none'
})
.catch(err => console.error(err))