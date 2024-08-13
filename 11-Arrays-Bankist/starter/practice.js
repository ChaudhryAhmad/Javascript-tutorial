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

/////////////////////////////////
////////////////////////////////

// ----------------------------------------ELEMENTS----------------------------------------------

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

// ------------------------------DOM ELEMENTS----------------------------------------------------

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, cur, i, arr) {
    return acc + cur;
  }, 0);
  labelBalance.textContent = `${acc.balance}EUR`;
};

const movements = [-200, 450, -400, 3000, -650, -130, 70, 1300];

const calcDiplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((cur, i) => cur > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((cur, i) => cur < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((cur, i) => cur > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((cur, i) => cur >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUserName(accounts);

const updateUI = function (currentAccount) {
  displayMovements(currentAccount.movements);
  // Display summary
  calcDiplaySummary(currentAccount);
  // Display balance
  calcDisplayBalance(currentAccount);
};
// Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    console.log('Transfer Valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(cur => cur > amount * 0.1)) {
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.userName === currentAccount.userName
    );
    // Delete User
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
  console.log(sorted);
});
// -------------------------------------Coding Challenge 1--------------------------------------

// const checkDogs=function(dogsJulia,dogsKate){
//     const dogsJulia2=dogsJulia.slice(1,3);
//     console.log(dogsJulia2);
//     const dogs=dogsJulia2.concat(dogsKate);
//     console.log(dogs);
//     dogs.forEach(function(mov,i,arr){
//         mov>=3 ? console.log(`Dog ${i+1} is an adult`):console.log(`Dog ${i+1} is an puppy`);
//     })
// }

// checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);
// let arr=['a','b','c','d','e'];

// Slice Method
// console.log(arr.slice(2,4));
// console.log(arr.slice(-3));
// console.log(arr.slice(-1));
// console.log(arr);

// Splice Method which mutates the original Array

// arr.splice(-1);
// console.log(arr);
// arr.splice(1,2);
// console.log(arr);

// Reverse Method also mutates the original Array

// let arr2=['j','i','h','g','f'];
// console.log(arr2.reverse());

// // Concat

// console.log(arr.concat(arr2));

// ----------------------------------forEach Method----------------------------------------------
// const movements=[200,450,-400,3000,-650,-130,70,1300];

// // For OF Loop
// for (const movement of movements){
//     if (movement>0){
//         console.log(`You deposited ${movement}`);
//     }
//     else{
//         console.log(`You withdraw ${Math.abs(movement)}`);
//     }
// }

// // For Each Loop
// movements.forEach(function(mov,i,arr){
//     if (mov>0){
//         console.log(`Movement ${i+1} :You deposited ${mov}`);
//     }
//     else{
//         console.log(`Movement ${i+1} :You withdraw ${Math.abs(mov)}`);
//     }
// });

// ----------------------------forEach Method with Maps and Sets--------------------------------
// const currencies=new Map([
//     ['USD','United States Dollar'],
//     ['EUR','Euro'],
//     ['GBP','Pound Sterling'],
// ]);

// currencies.forEach(function(value,key,map){
//     console.log(`${key} : ${value}`);
// })

// const currenciesUnique=new Set(['USD','USD','EUR','EUR','GBP']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function(value,_,map){
//     console.log(`${value} : ${_}`);
// })

// ---------------------------------Filter Method------------------------------------------------
// const deposits=movements.filter(function(mov){return mov>0});
// console.log(deposits);
// const withdrawals=movements.filter(function(mov){
//   return mov<0;
// });
// console.log(withdrawals);

// const maximum=movements.reduce((acc,cur)=>{
//   if (acc>cur){
//     return acc;
//   }
//   else return cur;
// },0)
// console.log(maximum);
// -----------------------------Coding Challenge 2-----------------------------------------------

// const calcHumanAge=function(dogsAges){
// const humanAges= dogsAges.map(function(cur,i,arr){
//     if(cur<=2){
//       return 2*cur;
//     }
//     else if (cur>2){
//       return 16+cur*4;
//     }
//   });
// console.log(humanAges);
// const humanFilteredAge=humanAges.filter(function(cur,i,arr){
//   return cur>18;
// });
// console.log(humanFilteredAge);

// let average=0;
// const sum=humanFilteredAge.reduce(function(acc,cur){
//   return acc+cur;
// });
// average = sum/humanFilteredAge.length;
// return average;
// }

// console.log(calcHumanAge([5, 2, 4, 1, 15, 8, 3]));

// -------------------------------Flat and FlatMap method----------------------------------------

// Does thing of spread operator
// const arr=[[1,2,3],4,5,[6,7,8]];
// console.log(arr.flat());

// const accountMovements=accounts.flatMap((acc)=>acc.movements);
// console.log(accountMovements);
// const allMovements=accountMovements.flat();
// console.log(allMovements);

// --------------------------------------Sort Method---------------------------------------------

// return < 0, A,B (keep order)
// return > 0  B,A (switch order)

// Ascending
// movements.sort((a,b)=>{
//   if(a>b)return 1;
//   else if (a<b) return -1;
// })

// movements.sort((a,b)=>a-b);

// console.log(movements);

// -------------------------------------Fill Method----------------------------------------------

// const arr = new Array(5).fill(0);
// console.log(arr.slice());

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr2.splice(1, 2));
