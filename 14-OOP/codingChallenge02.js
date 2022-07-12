'use strict'

class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed+=10;
        console.log(this.make + ': ' + this.speed);
    }

    brake(){
        this.speed -= 5;
        console.log(this.make + ': ' + this.speed);
    }

    get speedUS(){
        return this.speed / 1.6;
    }

    set speedUS(speed){
        this.speed = speed * 1.6;
    }
}

const car1 = new CarCl('Ford', 120);
console.log(car1);
console.log(car1.speedUS);
car1.speedUS = 50;
console.log(car1);
for (let i = 0; i < 10; i++) {
    let n = Math.random();
    if(n>=0.5) {
        car1.accelerate();
    } else {
        car1.brake();
    }    
}



