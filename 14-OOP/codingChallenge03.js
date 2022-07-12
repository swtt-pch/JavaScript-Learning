'use strict'

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed}km/h`);
}

Car.prototype.brake = function(){
    this.speed-=5;
    console.log(`${this.make} going at ${this.speed}km/h`);
}

const EletricCar = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
}

EletricCar.prototype = Object.create(Car.prototype)

EletricCar.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
    console.log(`Battery of ${this.make} charged to ${this.charge}%`);
}

EletricCar.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed}km/h with a charge of ${this.charge}%`);
}

EletricCar.prototype.constructor = EletricCar

const tesla = new EletricCar('Tesla', 100, 25);

tesla.accelerate()
tesla.accelerate()
tesla.brake()
tesla.brake();
tesla.brake();
tesla.chargeBattery(50);
tesla.brake();tesla.brake()
tesla.brake();tesla.brake()
tesla.brake();tesla.brake()
tesla.brake();tesla.brake()
tesla.brake();tesla.brake()
tesla.brake();
tesla.accelerate()
tesla.accelerate();tesla.accelerate()
tesla.accelerate()
tesla.accelerate()
tesla.accelerate();tesla.accelerate()
tesla.accelerate()
tesla.chargeBattery(99);