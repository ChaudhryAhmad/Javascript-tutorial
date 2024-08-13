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

const displayMovements = function (movements,sort=false) {
  containerMovements.innerHTML = '';

  const movs=sort? movements.slice().sort((a,b)=>a-b):movements;

//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements)

const calDisplayBalance=function(acc){
  acc.balance=acc.movements.reduce((acc,mov)=>acc+mov,0)
  labelBalance.textContent=`${acc.balance} €`
}
// calDisplayBalance(account1.movements)

const calcDisplaySummary=function(acc){
  const incomes=acc.movements.filter(mov=>mov>0).reduce((acc,cur)=>acc+cur,0)
  labelSumIn.textContent=`${incomes}€`

  const out=acc.movements.filter(mov=>mov<0).reduce((acc,cur)=>acc+cur,0)
  labelSumOut.textContent=`${Math.abs(out)}€`

  const interest=acc.movements.filter(mov=>mov>0).map(mov=>mov*acc.interestRate/100).filter((int)=>{
  return int>1}).
  reduce((acc,cur)=>acc+cur,0)
  labelSumInterest.textContent=`${interest}€`
}
// calcDisplaySummary(account1.movements)
const createUserName=function(accs){
  accs.forEach(function (acc){
    acc.username=acc.owner.toLowerCase()
    .split(' ').
    map(name=>name[0]).
    join('')
  })
}
createUserName(accounts)//stw

const updateUI=function (acc){
  displayMovements(acc.movements)
  // Display balance
  calDisplayBalance(acc)
  // Display Summary
  calcDisplaySummary(acc)
}
// /////////////////////////////////////////////////
// // LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////
// Event Handler
let currentAccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault()
  currentAccount=accounts.find(acc=>acc.username === inputLoginUsername.value)
  console.log(currentAccount);

  if(currentAccount?.pin===Number(inputLoginPin.value)){
    // Display UI and Welcome Message
    
     
    
    labelWelcome.textContent=`Welcome back, 
    ${currentAccount.owner.split(' ')[0]}`
    console.log("Login");
  }

  containerApp.style.opacity=100;
  // Clear input fields
  inputLoginUsername.value=inputLoginPin.value='';
  inputLoginPin.blur()
  // Display movements
 updateUI(currentAccount)
})

btnTransfer.addEventListener('click',function(e){
  e.preventDefault()
  const amount=Number(inputTransferAmount.value)
  const receiverAcc=accounts.find(acc=>acc.username===inputTransferTo.value)
  inputTransferAmount.value=inputTransferTo.value='';

  if (amount>0 && receiverAcc && currentAccount.balance>=amount && 
    receiverAcc?.username!==currentAccount.username
    ){
      // Doing the Transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentAccount)
    }
})

btnLoan.addEventListener('click',function(e){
  e.preventDefault()
  const amount=Number(inputLoanAmount.value)

  if(amount>0 && currentAccount.movements.some(mov=>mov>=amount*0.1)){
    // Add movement
    currentAccount.movements.push(amount)
    // Update UI
    updateUI(currentAccount)
  }
  inputLoanAmount.value='';
})

btnClose.addEventListener('click',function(e){
  e.preventDefault()
  if (inputCloseUsername.value===currentAccount.username 
&& Number(inputClosePin.value) === currentAccount.pin){
      const index=accounts.findIndex(acc=> acc.username === currentAccount.username)
      console.log(index);
    //  Delete Account
      accounts.splice(index,1)
  //  Hide UI
      containerApp.style.opacity=0;
    }
    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault()
  displayMovements(currentAccount.movements,!sorted);
  sorted=!sorted;
})










// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });


// console.log(Array.isArray(movements));
// // Converting Array to Set
// const unique=new Set(movements)
// // Converting Set to Array
// let array2=Array.from(unique)
// console.log(array2);
// let myArray = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];

// // Convert array to map
// let myMap = new Map(myArray);

// console.log(myMap);
// let myMap2 = new Map([
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3']
// ]);

// // Convert map to array using Array.from()
// let myArray1 = Array.from(myMap);

// console.log(myArray1);
// [ ['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3'] ]

// Map {
//   'key1' => 'value1',
//   'key2' => 'value2',
//   'key3' => 'value3'
// }

// let mySet = new Set([1, 2, 3]);
// console.log(typeof mySet); // "object"

// movements.push(350)
// console.log(movements);

// // for (const movement of movements){
// //   if (movement>0){
// //     console.log(`You deposited ${movement}`);
// //   }
// //   else{
// //     console.log(`You withdraw ${Math.abs(movement)}`);
// //   }
// // }
// for (const [i,movement] of movements.entries()){
//   if (movement>0){
//     console.log(`Movement ${i+1}:You deposited ${movement}`);
//   }
//   else{
//     console.log(`Movement ${i+1}:You withdraw ${Math.abs(movement)}`);
//   }  
// }
// console.log("---------FOREACH METHOD------------");
// movements.forEach(function (movement,i){
//   if (movement>0){
//     console.log(`Movement ${i+1}:You deposited ${movement}`);
//   }
//   else{
//     console.log(`Movement ${i+1}:You withdraw ${Math.abs(movement)}`);
//   }

// })



// ****************************************************************************************
// ****************************************************************************************
// *************************Practice*******************************************************
// ****************************************************************************************
// ****************************************************************************************


// -------------------Coding Challenge No 4--------------------------------------------
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
//   ];

// dogs.forEach((mov)=>mov.recommendedFood = mov.weight ** 0.75 * 28)
// console.log(dogs);

// const dogSarah=dogs.find((dog)=>dog.owners.includes('Sarah'))
// console.log(`Sarah's dog is eating too ${dogSarah.curFood>dogSarah.recommendedFood ?
// 'much':'low'}`);
// --------By Me

// const TooMuch=dogs.filter(cur=>cur.curFood>cur.recommendedFood)
// const eatingTooMuch=TooMuch.flatMap((cur)=>cur.owners)
// console.log(eatingTooMuch);
// const TooLow=dogs.filter(cur=>cur.curFood<cur.recommendedFood)
// const eatingTooLow=TooLow.flatMap((cur)=>cur.owners)
// console.log(eatingTooLow);
// --------By Jonas

// const eatingTooMuch=dogs.filter(cur=>cur.curFood>cur.recommendedFood).flatMap(dog=>dog.owners);
// const eatingTooLow=dogs.filter(cur=>cur.curFood<cur.recommendedFood).flatMap(dog=>dog.owners);

// console.log(`${eatingTooMuch.join(' and ')} dogs eat much`);
// console.log(`${eatingTooLow.join(' and ')} dogs eat low`);


// console.log(dogs.some(cur=>cur.curFood===cur.recommendedFood));
// current > (recommended * 0.90) && current < (recommended *
//   1.10)
// const checkOK=dog=>dog.curFood>dog.recommendedFood*0.90 && dog.curFood<dog.recommendedFood*1.10;
// console.log(dogs.some(checkOK));
// console.log(dogs.filter(checkOK));

// const dogsCopy=dogs.slice()
// console.log(dogsCopy);
// dogsCopy.sort((cur,i)=>cur.recommendedFood-i.recommendedFood)
// console.log(dogsCopy);

// && dogSarah.current < (dogSarah.recommendedFood *1.10)
// if (dogSarah.recommendedFood<atOK){
//   console.log('Eating Too low');
// }
// else if (dogSarah.recommendedFood>atOK){
//   console.log('Eating Too high');
//   console.log(dogSarah.recommendedFood);
// }
// else{
//   console.log('Its eating properly');
// }
// console.log(atOK);
// console.log(dogSarah);

// --------------More ways of Creating and filling Arrays-------------------------------
// const arr=[1,2,3,4,5,6,7,8]
// const x=new Array(7)
// // console.log(x);

// // console.log(x.map(()=>5));

// // Only function that executes is fill method on empty array


// console.log(x.fill(6,3,5))
// console.log(x);

// arr.fill(33,3,8)
// console.log(arr);

// Array.from

// const y=Array.from({length : 7},()=>1)
// console.log(y);
// const z=Array.from({length : 7}, (_,i)=>i+1)
// console.log(z);

// const x=Array.from({length:100},()=>Math.trunc(Math.random()*6)+1)
// console.log(x);

// labelBalance.addEventListener('click',function(e){
//   const movementsUI=Array.from(
//   document.querySelectorAll('.movements__value'),
//   el=>Number(el.textContent.replace('€','')))
//   console.log(movementsUI);

//   const movementUI2=[...document.querySelectorAll('.movements__value')];
//   console.log(movementUI2);
// });

// console.log(x.splice(3,4));
// console.log(x);
// -------------------------Sorting Arrays----------------------------------------------

// const owners=['sher','ahmad','usman','ibrahim']
// console.log(owners.sort());

// // return <0 A,B (keep order)
// // return >0 B,A (switch order)

// movements.sort((a,b)=>b-a)

// movements.sort((a,b)=>{
//   if (a>b)return 1
//   if (b>a)return -1

// })
// console.log(movements);
// -----------------------Flat and Flat Map---------------------------------------------

// const arr=[[[1,2],3],[4,[5,6]],7,8];
// console.log(arr.flat().flat());
// console.log(arr);
// --By me
// const arr=[account1.movements,account2.movements,account3.movements,account4.movements]
// console.log(arr);
// console.log(arr.flat().reduce((acc,cur)=>acc+cur,0))
// // --By Jonas

// const overAllBalance=accounts.map(acc=>acc.movements).flat().reduce((acc,mov)=>acc+mov,0)
// console.log(overAllBalance);

// const overAllBalance2=accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+mov,0)
// console.log(overAllBalance2);


// -----------------------Some and Every------------------------------------------------
// console.log(movements);
// const array = [10, 20, 30, 40, 50];

// console.log(array.find(element => element > 25));
// console.log(array.indexOf(30));

// Yeh niche wale donun same hain
// console.log(array.includes(30));
// console.log(array.some(mov=>mov===30));

// const anyDeposits=movements.some(mov=>mov>0)
// console.log(anyDeposits);

// ---------Every----------------

// console.log(movements.every(mov=>mov>0));
// console.log(account4.movements.every(mov=>mov>0));

// const deposit=mov=>mov>0;
// console.log(movements.some(deposit));



// -------------------------The find method----------------------------------------------
// const firstwithdrawl=movements.find(mov=>mov<0)
// console.log(firstwithdrawl);

// const account=accounts.find(acc=>acc.owner==='Jessica Davis')
// console.log(account);

// -----------------------Coding Challenge 3--------------------------------------------
//  const calcAverageHumanAge=function(arr){
//    const humanAges=arr.map(function (mov){
//     if (mov<=2 && mov>=0){
//       return mov*2;
//     }
//     else{
//        return 16 + mov * 4;
//     }
//    })
//    console.log(humanAges);
//    const adults=humanAges.filter(function (movem){
//     return movem>=18
//    })
//    console.log(adults);
//    let sum=0
//    const averageAge=adults.reduce((acc,cur)=>
//     acc+cur,0)/adults.length
//    console.log(averageAge);
//  }
// const calcAverageHumanAge=(arr)=>arr.map(mov=> (mov<=2 ? mov*2:16 + mov * 4)).
// filter(mov=>mov>=18).reduce((acc,cur,i,arr)=>acc+cur/arr.length,0)
// // .reduce((acc,cur,arr)=>acc+cur/arr.length,0)
// const arr1=[5, 2, 4, 1, 15, 8, 3]
// const arr2= [16, 6, 10, 5, 6, 1, 4]
// console.log(calcAverageHumanAge(arr1));
// console.log(calcAverageHumanAge(arr2));
// -------------------The Magic of chaining Methods---------------------------------------

// const eurToUSD=1.1
// const totalDepositsUSD=movements.filter(mov=>mov>0).map(mov=>mov*eurToUSD).
// reduce((acc,cur)=>acc+cur,0)
// console.log(totalDepositsUSD);
// --------------------------Coding Challenge 2---------------------------------------------
//  const calcAverageHumanAge=function(arr){
//    const humanAges=arr.map(function (mov){
//     if (mov<=2 && mov>=0){
//       return mov*2;
//     }
//     else{
//        return 16 + mov * 4;
//     }
//    })
//    console.log(humanAges);
//    const adults=humanAges.filter(function (movem){
//     return movem>=18
//    })
//    console.log(adults);
//    let sum=0
//    const averageAge=adults.reduce((acc,cur)=>
//     acc+cur,0)/adults.length
//    console.log(averageAge);
//  }
// const arr1=[5, 2, 4, 1, 15, 8, 3]
// const arr2= [16, 6, 10, 5, 6, 1, 4]
// calcAverageHumanAge(arr1);
// calcAverageHumanAge(arr2)


// arr1.map(function (mov){
//   if (mov<=2 && mov>=0){
//     return mov*2;
//   }
//   else{
//      return 16 + mov * 4;
//   }
// })
// console.log(arr1);
// --------------------------The Reduce Method Practice
// accumulator -> SNOWBALL
// const balance=movements.reduce((acc,cur)=>acc+cur ,0)
// console.log(balance);

// let balance2=0
// for (const mov of movements)balance2+=mov
// console.log(balance2);
// // Maximum Value using a reduce function
// const max=movements.reduce((acc,mov)=>{
//   if (acc>mov)return acc
//   else return mov
// },movements[0])
// console.log(max);
// --------------------------The filter Method Practice
// const withdrawals=movements.filter(function (mov){
//   return mov<0
// })
// console.log(withdrawals);
// const withdrawlArray=[];
// for (const mov of movements){
//   if (mov < 0)withdrawlArray.push(mov)
// }
// console.log(withdrawlArray);
// -------------------------The Map Method Practice
// Using map function
// const eurToUSD=1.1;
// const movementsUSD=movements.map(function (mov){
//   return mov*eurToUSD
// })
// console.log(movementsUSD);
// Using for of loop
// const movementsArr=[]
// for (const mov of movements){
//   movementsArr.push(mov*eurToUSD);
// }
// console.log(movementsArr);
// Using Arrow Function
// const eurToUSD=1.1;
// const movementsUSD=movements.map(mov=>mov*eurToUSD)
// console.log(movementsUSD);
// Exploring Some Map Method more

// const movementsDescription=movements.map((mov,i)=>
// console.log(`Movements ${i+1} You ${mov>0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`))

// console.log(movementsDescription);
// ------------------------Coding Challenge 1--------------------------------------------

// const checkDogs=function(dogsJulia,dogsKate){
  // const dogsJuliaCorrected=dogsJulia.slice()
  // dogsJuliaCorrected.splice(0,1);
  // // console.log(dogsJuliaCorrected.splice(0,1));
  // dogsJuliaCorrected.splice(-2)
  // dogsJuliaCorrected.forEach(function(val,i){
  //  const value=val>=3 ? 'adult': 'puppy'
  //  console.log(`(Dog number ${i+1} is a ${value} and is ${val} years old`);
  // })
  // dogsKate.forEach(function(val,i){
  //   const value=val>=3 ? 'adult': 'puppy'
  //   console.log(`(Dog number ${i+1} is a ${value} and is ${val} years old`);
  //  })}
  // Yeh ho gya donu array ke liye elehda elehda forEach lga k lekin ab aik array mein
  // kr ke aik hi forEach lga k 
// ****************Difference is only combining 2 arrays or not
//   const dogs=dogsJuliaCorrected.concat(dogsKate)
//   dogs.forEach(function (dog,i){
//     if(dog>=3){
//       console.log(`Dog number ${i+1} and is ${dog} years old`);
//     }
//     else{
//       console.log(`Dog number ${i+1} is still a puppy`);
//     }
//   })
// };
// checkDogs([3,5,2,12,7],[4,1,15,8,1])
// ------------------------Array Methods
// // const arr = ['a','b','c','d','e','f','g']

// // -----------------------Slice method
// // // console.log(arr.slice(1,2));
// // console.log(arr.slice(3,5));
// // // console.log(arr);
// // // -----------------------Splice method
// // arr.splice(3,5)
// // Difference between slice and splice methods
// // console.log(arr);
// // ----------------------Concat method
// // const arr2=['i','j','k']
// // console.log(arr.concat(arr2));
// // console.log(arr);
// // ---------------------Reverse Method
// // console.log(arr.reverse());
// // console.log(arr);
// // ----------------------Join Method
// // console.log(arr.join('+'));
// // console.log(arr);
// const array=['a','b','c','d','e','f','g','h']
// const array2=['i','j','k','l','m','n']
// console.log(array2.splice(5,1));
// console.log(array2);
// console.log(array);
// // console.log(array.splice(5,2));
// console.log(array.reverse());
// const array3=array.concat(array2);
// console.log(array3);
// console.log(array3.join('**'))
// console.log(array3);
// let strin="Ahmad"
// console.log(strin.includes("ch"));
// // Exercise 2
// // -----------------------forEach Loop
// -----------------------------for each with Arrays
// array.forEach(function (ar1,i){
//   console.log(` Hi ${ar1} and ${i+1}`);
// })
// --------------------------------for each with Maps
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value,key,map){
//   console.log(`Hi ${key} my full form is ${value}`);
// })
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value,key,map){
//   console.log(`${value} : ${key} ${map}`);
// })
// --------------------------------for each with Sets
// const currenciesUnique=new Set(['USD','EUR','GBP'])
// currenciesUnique.forEach(function (value,_,set){
//   console.log(`Hi ${value} and ${set}`);
// })


















