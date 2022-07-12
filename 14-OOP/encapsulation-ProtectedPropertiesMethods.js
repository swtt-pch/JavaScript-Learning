'use strict'

class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this._pin = pin
        // protected property
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // public interface
    getMovement(){
        return this._movements;
    }

    deposit(val){
        this._movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }

    _approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
}

const acc1 = new Account('Igor', 'BRL', 1111)

// wrong
//acc1._movements.push(100)
//acc1._movements.push(-100)

// right
acc1.deposit(300);
acc1.withdraw(200);
acc1.requestLoan(1000);
acc1._approveLoan(1000);

console.log(acc1.getMovement());