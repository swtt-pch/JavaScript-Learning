'use strict'

class Account {
    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.pin = pin
        this.movements = [];
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    deposit(val){
        this.movements.push(val);
    }

    withdraw(val){
        this.deposit(-val);
    }

    approveLoan(val){
        return true;
    }

    requestLoan(val){
        if(this.approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
}

const acc1 = new Account('Igor', 'BRL', 1111)

// wrong
acc1.movements.push(100)
acc1.movements.push(-100)

// right
acc1.deposit(300);
acc1.withdraw(200);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);

