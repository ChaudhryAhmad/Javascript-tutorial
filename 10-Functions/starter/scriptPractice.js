'use strict';

// ----------------------------------------------3----------------------------------------------
// const bookings = [];

// const createBooking=function(flightNum,numPassengers=2,price=190*numPassengers){
//     const booking={
//         flightNum,
//         numPassengers,
//         price
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH1234',40,10);
// createBooking('LH1234',undefined,10);

// ----------------------------------------------4----------------------------------------------

// const flight='LH123';
// const jonas={
//     name:'Ahmad Mubashir',
//     passport:23456789
// };

// const checkIn=function(flightNum,passenger){
//     flightNum='LH456';
//     passenger.name='MR'+ passenger.name;

//     if(passenger.passport===23456789){
//         alert('Checked In');
//     }
//     else{
//         alert("Wrong Passport");
//     }
// }

// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport=function(person){
//     person.passport=Math.floor(Math.random()*1000000+1);
// }

// newPassport(jonas);
// checkIn(flight,jonas);
// console.log();

// ---------------------------------------------6------------------------------------------------

// const oneWord=function(str){
//     return str.replace(/ /g,'');
// }

// const firstWordCapital=function(str){
//     const [first,...others]=str.split(' ');
//     return [first.toUpperCase(),...others].join(' ');
// }

// // Higher Order Function

// const transformer=function(str,fn){
//     console.log(`Original string ${str}`);
//     console.log(`Transformed String ${fn(str)}`);

//     console.log(fn.name);
// }

// transformer('Javscript is the best!',firstWordCapital);
// transformer('Javscript is the best!',oneWord);

// ---------------------------------------------7------------------------------------------------

// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// // const greeterHey=greet('Hey');
// // greeterHey("Ahmad");
// // greeterHey("Mubashir");

// greet('Ahmad')('Mubashir');
// const greetArr=(greeting)=>(name)=>console.log(`${greeting}${name}`);
// greetArr('Hello')('Ahmad');

// ---------------------------------------------8------------------------------------------------

// const lufthansa={
//     airline:'Lufthansa',
//     iataCode:'Lh',
//     bookings:[],
//     book(flightNum,name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//     this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
//     }

// };

// lufthansa.book(239,'Ahmad Mubashar');
// lufthansa.book(601,'Seemab Mansoor')
// console.log(lufthansa);

// const eurowings={
//     airline:'Eurowings',
//     iataCode:'EW',
//     bookings:[],
// };

// const book=lufthansa.book;
// // Does not work
// // book(100,"Ahmad");

// book.call(eurowings,100,"Ahmad");
// console.log(eurowings);

// // ---------------------------------------------Bind Method--------------------------------------

// const bookEW=book.bind(eurowings);
// const bookLH=book.bind(lufthansa);
// const bookEW23=book.bind(eurowings,23);

// bookEW(101,'Shebu');
// bookLH(102,'Sohaib');
// bookEW23('Saqlain');

// lufthansa.planes=300;
// lufthansa.buyPlanes=function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }

// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlanes.bind(lufthansa));

// // Partial Application

// const addtax=function(rate,value){
//     return value + value *rate;
// }

// const addTAX=addtax.bind(null,0.1);
// console.log(addTAX(100));
// console.log(addTAX(200));

// const addtax2=function(rate){
//     return function(value){
//         return value + value *rate;
//     }
// }

// const addTAX2=addtax2(0.1);
// console.log(addTAX2(100));
// console.log(addTAX2(500))

// --------------------------------------Coding Challenge -----------------------------------
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//       const answer= Number(prompt(`${this.question}\n ${this.options.join("\n")}`));
//       typeof answer==='number' && answer<this.answers.length && this.answers[answer]++;
//       this.displayResults();
//       this.displayResults('string')
//     },
//     displayResults(type='array'){
//         if(type==='array'){
//             console.log(this.answers);
//         }
//         else if (type==='string'){
//             console.log(`Poll results are ${this.answers.join(',')}`);
//         }
//     }
//     };

// document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers:[5, 2, 3]},'string');
// poll.displayResults.call({answers:[5, 2, 3]});

// -------------------------------IIFE----------------------------------------------------------

// const runOnce=function(){
//     console.log("This will never run again");
// }

// runOnce();

// (function(){
//     console.log("This will also never run again");
// })();

// // Arrow function

// (()=>console.log("Not run"))();

// ---------------------------------Closures---------------------------------------------------

// const greet=function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey=greet('Hey');
// greeterHey("Ahmad");
// greeterHey("Mubashir");

// const secureBooking= function(){
//     let passengerCount=0;
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker=secureBooking();
// booker();
// booker();

// -----------------------------------Example 1--------------------------------------------------
// let f;

// const g=function(){
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

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// -----------------------------------Example 2--------------------------------------------------

// const boardPassengers=function(n,wait){
//     const perGroup=n/3;
//     setTimeout(function(){
//         console.log(`We r now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     },wait*1000);
//     console.log(`Will Start boarding in ${wait} seconds`);
// };

// // This is to show that closure has priority over scope chain
// const perGroup=1000;
// boardPassengers(180,3);

// -------------------------------Coding Challenge # 2-------------------------------------------

// (function(){
//     const header = document.querySelector('h1');
//     header.style.color='red';
//     document.querySelector('body').addEventListener('click',function(){
//         header.style.color='blue';
//     })
// })();

// ---------------------------------------Finish-------------------------------------------------
