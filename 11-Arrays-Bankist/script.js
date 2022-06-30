'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let currentAccount;

const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';
  const mov = sort ? movements.slice().sort((a,b)=> a-b) : movements
  mov.forEach(function(value, index){
    const movements = value > 0 ? 'deposit' : 'withdrawal';
    const html = `        
      <div class="movements__row">
        <div class="movements__type movements__type--${movements}">${index+1} ${movements}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${value}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
};

const createUsernames = function(user){
  const username = user
  .toLowerCase()
  .split(' ')
  .map(word => word[0])
  .join('')
  return username
}

accounts.forEach(function(value, index){
  value.username = createUsernames(value.owner);
  //console.log(value);
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const calcPrintBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance.toFixed(2)} €`
}

const calcDisplaySummary = function(acc){
  const incomes = acc.movements.filter(mov=> mov>0)
  .reduce((acc, cur) => acc+cur);
  labelSumIn.textContent = incomes + '€'
  
  const outcomes = Math.abs(
    acc.movements
    .filter(mov=> mov<0)
    .reduce((acc, cur) => acc + cur)
  );
  labelSumOut.textContent = outcomes + '€'

  const interest = acc.movements.filter(mov=> mov>0)
    .map(deposit => deposit * currentAccount.interestRate /100)
    .filter((int)=> {
      return int >= 1;
    })
    .reduce((acc, cur) => acc + cur, 0)
    labelSumInterest.textContent = interest.toFixed(2) + '€'
} 

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(function(acc){
      return acc.username === currentAccount.username;
    })
    //console.log(index);
    accounts.splice(index, 1)

    // Clear input fields
    inputClosePin.value = inputCloseUsername.value = ''

    // Hide UI and change welcome message to login message
    labelWelcome.textContent = `Log in to get started`;
    containerApp.style.opacity = '0.0';


  }
})

btnLogin.addEventListener('click', function(e){
  // Prevent form from submitting
  e.preventDefault();
  
  if (inputLoginUsername.value && inputLoginPin.value) {
    currentAccount = accounts.find(function(acc) {
      return acc.username === inputLoginUsername.value.toLowerCase() && acc.pin === Number(inputLoginPin.value);
    })
  }

  if(currentAccount){
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = '1.0';

    // Display everything related to the current account
    displayEverything();

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = ''
    inputLoginPin.blur();
  } else {
    console.log('Account not fould...');
  }
})

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  if(inputTransferTo.value){
    if(checkBalance(inputTransferAmount.value)){
      transferMoney(inputTransferTo.value, inputTransferAmount.value)
    } else {
      alert('You don`t have this much money')
    }
  } else {
    alert('This account doesn`t exists')
  }
})

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    console.log('Ok');
    // Add movement
    currentAccount.movements.push(amount);

    // update UI
    displayEverything()

    // clear input field
    inputLoanAmount.value = '';
  } else {
    console.log('Not Able');
  }
})

let isSorted = false
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  if(!isSorted){
    displayMovements(currentAccount.movements, true);
    isSorted = true
  } else {
    displayMovements(currentAccount.movements);
    isSorted = false
  }

})

const transferMoney = function(username, value){
  const toAccount = checkUsername(username) 
  if (toAccount){
    // Add withdrawal to movements of current account
    currentAccount.movements.push(Number(value)*-1);
    // Add deposit to the other account
    toAccount.movements.push(Number(value))
    // Display everything related to the current account
    displayEverything();
    //clear input field
    inputTransferTo.value = inputTransferAmount.value = ''
  }
}

const checkUsername = function(username){
  return accounts.find(acc => acc.username === username)
}

const checkBalance = function(value) {
  return value <= currentAccount.movements.reduce((acc, cur) => acc+cur,0);
}

const displayEverything = function(){
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcPrintBalance(currentAccount.movements);
    // Display sumary
    calcDisplaySummary(currentAccount);
}