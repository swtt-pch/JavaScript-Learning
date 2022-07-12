'use strict'


// 1 - Public fields
// 2 - Private field
// 3 - Public method
// 4 - Private method
// (there is also the static version)

class Account {
    // 1 - public field (instances) / not in the prototype
    locale = navigator.language;
    
    // 2 - private field
    #movements = [];
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        // protected property
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // public interface
    getMovement(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }

    requestLoan(val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }

    static helper(){
        console.log(`HELPER`);
    }
    
    // 4 - private methods
    //#approveLoan(val){
    _approveLoan(val){
        return true;
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
//acc1.#approveLoan(1000); ERROR

// console.log(acc1.#movement); ERROR
// console.log(acc1.#pin); ERROR
Account.helper()
console.log(acc1);

