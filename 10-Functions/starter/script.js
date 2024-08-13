'use strict';

// const bookings=[];

// const createBookings=function(
//     flightNumber,
//     numPassengers=200,
//     price=2000*numPassengers
// ){
// //   ES 5
// // numPassengers=numPassengers || 1;
// // price=price || 199;

// const booking={
//     flightNumber,
//     numPassengers,
//     price
// }
// console.log(booking);
// bookings.push(booking)
// }
// createBookings('LH123')
// createBookings('LH123',50)

// createBookings('LH123',undefined,10)

// const flight='LH234'
// const ahmad={
//     name:'Ahmad Mubashir',
//     passportNum:234567890
// }

// const checkIn=function(flightNum,passenger){
//  flightNum='LH999';
//  passenger.name='Mr '+passenger.name;

//  if (passenger.passportNum===234567890){
//     alert('Checked In')
//  }else{
//     alert('Wrong Passport Number')
//  }

// }

// // checkIn(flight,ahmad)
// // console.log(flight);
// // console.log(ahmad);

// const newPassport=function(person){
//     person.passportNum=Math.trunc(Math.random()*100000000);
// }
// newPassport(ahmad)
// checkIn(flight,ahmad)

// ----------------------6. Functions Accepting Callback Functions-------------------------

// const oneWord= function(str){
//     return str.replace(/ /g,'').toLowerCase();
// }

// const upperWord=function(str){
//     // ...others rest pattern

//     const [first,...others]=str.split(' ')
//     console.log(first,others);
//     return [first.toUpperCase(),...others].join(' ');
//     // ...others destructure operator
// }

// // High Order function
// const transformer=function(str,fn){
//     console.log(`Original String : ${str}`);
//     console.log(`Transformed String : ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }
// transformer('Javscript is the best !',upperWord)
// transformer('Javscript is the best !',oneWord)

// ------------------------7. Functions Returning Functions----------------------------------
// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// // const greet=greeting=>name=>console.log(`${greeting} ${name}`);

// const greetHey=greet('Hey')
// greetHey('Ahmad')
// greetHey('Sher Afgan')

// greet('ahmad ')('Sher Afgan')
// console.log(greetHey);

// ------------------------8. The call and apply methods--------------------------------------

// const Qatar={
//     airline: 'Qatar',
//     iataCode: 'QR',
//     bookings: [],
//     // book function{}
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight
//         ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`,name})
//     }
// }
// Qatar.book(239,'Ahmad Mubashir')
// Qatar.book(270,'Sher Afghan')
// // console.log(Qatar);

// const eurowings={
//     airline:'eurowings',
//     iataCode:'EW',
//     bookings:[],
// }

// const swift={
//     airline:'Swift',
//     iataCode:'SW',
//     bookings:[],
// }
// const book=Qatar.book;

// // // --------------Call Method
// // // Does not work
// // // book(214,'Hero')
// // book.call(eurowings,23,'Zara ch')
// // console.log(eurowings);

// // book.call(Qatar,233,'Mary Cooper')
// // console.log(Qatar);

// // // -------------Apply Method
// // const flightData=[287,'George Cooper']
// // book.apply(Qatar,flightData)
// // console.log(Qatar);

// // book.call(Qatar,...flightData)
// // console.log(Qatar);

// // ----------------Bind Method
// // book.call(eurowings,23,'Zara ch')

// const bookEW =book.bind(eurowings)
// const bookQR =book.bind(Qatar)
// const bookSW=book.bind(swift)

// bookQR(23,'Zara Ch')

// const bookQR23=book.bind(Qatar,23);
// bookQR23('Shzaib Asim');
// bookQR23('Nusrat')

// // With Event Listener
// Qatar.planes=300;
// Qatar.buyPlane=function(){
//     console.log(this);
    
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click',Qatar.buyPlane.bind(Qatar))

// Partial Application
// const addTax=(rate,value)=>value+value*rate;
// console.log(addTax(0.1,200));

// const addVAT=addTax.bind(null,0.23);
// // addVAT =value=>value+value*0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate=function(rate){
//     return function(value){
//         return value + value *rate;
//     }
// }

// const addVAT2=addTaxRate(0.23)
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// --------------------------------Coding Challenge 1

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         // Get Answer
//         const answer=Number(prompt(`${this.question}\n${this.options.join('\n')}
//         \n(Write option number)`));
//         console.log(answer);
//         // Register Answer
//         typeof answer === 'number' && answer <this.answers.length && this.answers[answer]++
//         this.displayResults();
//         this.displayResults('string');
//     },
//     displayResults(type='array'){
//         if (type==='array'){
//             console.log(this.answers);
//         }
//         else if (type==='string'){
//             // Poll results are 13,2,3,2
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }

//     }
//     };
// poll.registerNewAnswer()

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({answers:[5,2,3]},'string')

// -------------------Immediately Invoked Function Expression-----------------------------
// Simple function
// const runOnce=function(){
//     console.log("This will never run again");
// };
// runOnce();

// // IIFE
// // Simple
// (function(){
//     console.log("This will also never run again");
// })();
// // Arrow
// (()=>console.log("This will also also never run again"))();

// ------------------------------More Closure Examples-------------------------------------
// Example 1
// let f;
// const g= function(){
//     const a=23;
//     f=function(){
//         console.log(a*2);
//     }
// }

// const h=function(){
//     const b=777;
//     f=function(){
//         console.log(b*2);
//     }
// }

// g()
// f()
// console.dir(f);
// // -------Re-assigning function
// h()
// f()
// console.dir(f);

// // Example 2
// const boardPassengers=function(n,wait){
//  const perGroup=n/3;
//  setTimeout(function(){
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//  },wait*1000)
//  console.log(`Will start boarding in ${wait} seconds`);
// }
// const perGroup=1000;
// boardPassengers(180,3)

// ----------------------------Coding Challenge 2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click',function(){
        header.style.color='blue';
    })
    })();