'use strict'

// 1. Use constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed pf the car in km/h
const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

// 2. Implement an 'accelerate' method that will increase the car's speed by 10 and log the new speed to the console
Car.prototype.accelerate = function(){
    this.speed+=10;
    console.log(this.make + ': ' + this.speed);
}

// 3. Implement an 'brake' method that will decrease the car's speed by 5 and log the new speed to the console
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(this.make + ': ' + this.speed);
}

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

for (let i = 0; i < 10; i++) {
    let n = Math.random();
    if(n>=0.5) {
        bmw.accelerate();
    } else {
        bmw.brake();
    }    
}

for (let i = 0; i < 10; i++) {
    let n = Math.random();
    if(n>=0.5) {
        mercedes.accelerate();
    } else {
        mercedes.brake();
    }    
}