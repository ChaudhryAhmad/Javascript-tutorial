'use strict';

// ---------------------3. Constructor Functions and New Operator-----------
// Constructor function
// const Person=function(firstName,birthYear){
// //  Instance Properties
//  this.firstName = firstName;
//  this.birthYear=birthYear;

// //  Never to do this
// //  this.calcAge=function(){
// //     console.log(2024-this.birthYear);
// //  };
// };
// // Creating Object using constructor function
// const Ahmad=new Person('Ahmad',2002);
// const shazaib=new Person('Shazaib',2001);

// // Static Method
// Person.hey=function(){
// console.log("Hi Chaudhry I am static method and can't be called by Ahmad");
// }
// console.log(Ahmad,shazaib);
// Person.hey();
// shazaib.hey();
// console.log(shazaib.calcAge());
// console.log(Ahmad instanceof Person);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// // ---------------------4. Prototypes------------------------------------

// Person.prototype.calcAge=function(){
//    console.log(2024-this.birthYear);
// };
// console.log(Person.prototype);

// Ahmad.calcAge();
// shazaib.calcAge();
// // This is prototypal inheritance 
// console.log(Ahmad.__proto__);
// console.log(Ahmad.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(Ahmad));
// console.log(Person.prototype.isPrototypeOf(shazaib));
// console.log(Person.prototype.isPrototypeOf(Person));

// // CalcAge method has been set on prototype
// // Now setting properties

// Person.prototype.species='Homo Sapiens';
// console.log(Ahmad.species,shazaib.species);

// // Checking own property or inherited
// console.log(Ahmad.hasOwnProperty('species'));
// console.log(Ahmad.hasOwnProperty('firstName'));

// // Prototypal inheritance on built in objects
// console.log(Ahmad.__proto__);
// // Object.Prototype is at the top of Prototype chain
// console.log(Ahmad.__proto__.__proto__);
// console.log(Ahmad.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr=[3,5,5,7,7,8,8];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique=function(){
//   return [...new Set(this)]
// }

// console.log(arr);
// console.log(arr.unique());

// const h1=document.querySelector('h1');
// console.dir(h1)

// ------------------------Coding Challenge 1-------------------------------
// const car=function(make,speed){
//    this.make=make;
//    this.speed=speed;
// }
// car.prototype.accelerate=function(){
//  return this.speed + (this.speed*0.1);
// }
// car.prototype.brake=function(){
//    return this.speed -(this.speed*0.05);
// }
// const BMW=new car('BMW',120);
// const Mercedes=new car('Mercedes',100);
// console.log(BMW.accelerate());
// console.log(Mercedes.brake());

// ------------------------------ES 6 Classes-------------------------------

// Class Expression
// const PersonCl=class {

// }
// Class Declaration
// class PersonCl{
//  constructor(fullName,birthYear){
//  this.fullName=fullName;
//  this.birthYear=birthYear;
//  }
// //  Instance Methods
// //  Methods will be added to the .prototype property
//  calcAge(){
//     return 2024-this.birthYear;
//  }
//  greet(){
//     console.log(`Hey ${this.fullName}`);
//  }
//  get age(){
//     return 2024-this.birthYear;
// }
// // // Set a property that already exists
//  set fullName(name){
//     if (name.includes(' '))this._fullName=name;
//     else alert(`${name} is not a full Name!`)
//  }
//  get fullName(){
//     this._fullName;
//  }
// //  static hey(){
// //     console.log(`Hi i m static method`);
// //     console.log(this);
// //  }
// }
// const ahmad=new PersonCl('Ahmad ch',2002);
// // console.log(ahmad);
// console.log(ahmad.calcAge());
// console.log(ahmad._fullName);
// console.log(ahmad.age);
// // ahmad.greet();
// PersonCl.hey()
// ahmad.hey();


// console.log(ahmad.__proto__ === PersonCl.prototype);
// // ahmad.prototype.greet=function(){
// //     console.log(`Hey ${this.firstName}`);
// // }

// // 1. Classes are not hoisted
// // 2. Classes are first class citizens which means they can be passed 
// // from functions and return from functions
// // 3. Classes are executed in strict mode.

// // ---------------------------11. Getters and Setters------------------------
// // This is how they work for Objects
// const account={
//     owner:'Jonas',
//     movements:[200,300,240,50,60],
//     get latest(){
//       return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         this.movements.push(mov)
//     }

// };

// console.log(account.latest);
// account.latest=50;
// console.log(account.movements);

// Now for classes

// ---------------------------------13. Object.Create --------------------------------

// const personProto={
//    calcAge(){
//       console.log(2024-this.birthYear);
//    },
//    init(firstName,birthYear){
//   this.firstName=firstName;
//   this.birthYear=birthYear;
//    }
// }
// const ahmad=Object.create(personProto);
// console.log(ahmad);
// ahmad.name="Ahmad";
// ahmad.birthYear=2002;
// ahmad.calcAge();
// console.log(ahmad.__proto__ === personProto);

// const sarah=Object.create(personProto);
// sarah.init("Sarah",2001);
// sarah.calcAge();

// ------------------------------------Coding Challenge 2---------------------------------------

// class CarCl{
//  constructor(make,Originalspeed){
//    this.make=make;
//    this.Originalspeed=Originalspeed;
//  }
//  get speedUS(){
//    return this.Originalspeed/1.6;
//  }
//  set speedUS(Originalspeed){
//    this.Originalspeed=Originalspeed*1.6;
//  }
//  accelerate(){
//     return this.Originalspeed + (this.Originalspeed*0.1);
//    }
//    brake(){
//          return this.Originalspeed -(this.Originalspeed*0.05);
//       }
//    static hey(){
//       console.log("Hi Ahmad how r u?");
//    }
// };

// const Ford=new CarCl('Ford',160)
// CarCl.hey();
// console.log(Ford);
// console.log(Ford.accelerate());
// console.log(Ford.brake());
// console.log(Ford.speedUS);
// Ford.speedUS=50;
// console.log(Ford.Originalspeed);

// ----------------------Inheritance between Classes and Constructor functions----------------------------------
// Construction function wala
// const Person=function(firstName,birthYear){
//    this.firstName=firstName;
//    this.birthYear=birthYear;
// }

// Person.prototype.calc=function(){
//    return 2024-this.birthYear
// }

// const Student=function(firstName,birthYear,course){
//    Person.call(this,firstName,birthYear)
//    this.course=course;
// }
// // Linking Prototypes
// Student.prototype=Object.create(Person.prototype);


// Student.prototype.introduce=function(){
//    console.log(`My name is ${this.firstName} and i study ${this.course}`);
// }

// const ahmad=new Student("Ahmad",2024,"Software Engineering")
// console.log(ahmad.introduce());
// console.log(ahmad.calc());

// console.log(ahmad.introduce());
// console.log(ahmad.calc());

// console.log(ahmad.__proto__);
// console.log(ahmad.__proto__.__proto__);

// console.log(ahmad instanceof Student);
// console.log(ahmad instanceof Person);

// Student.prototype.constructor=Student;
// console.dir(Student.prototype.constructor);

// -------------------------------------Coding Challlenge No 3------------------------------------------------------
// const car=function(make,speed){
//    this.make=make;
//    this.speed=speed;
// }
// car.prototype.accelerate=function(){
//  this.speed+=10;
//  console.log(`${this.make} is going at ${this.speed} km/h`);
// }
// car.prototype.brake=function(){
//    this.speed-=5;
//    console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const EV=function(make,speed,charge){
//    car.call(this,make,speed);
//    this.charge=charge;
// }
// EV.prototype=Object.create(car.prototype);

// EV.prototype.chargeBattery=function(chargeTo){
//  this.charge=chargeTo;
// }
// EV.prototype.accelerate=function(){
//  console.log(`${this.make} going at ${this.speed+20} km/h, with a charge of ${this.charge-1}%`);
// }

// const Tesla=new EV('Tesla',120,23)
// Tesla.accelerate();
// Tesla.brake();

// -----------------------------Inheritance Between ES 6 classes--------------------------------
// class PersonCl{
//  constructor(fullName,birthYear){
//  this.fullName=fullName;
//  this.birthYear=birthYear;
//  }
// //  Instance Methods
// //  Methods will be added to the .prototype property
//  calcAge(){
//     return 2024-this.birthYear;
//  }
//  greet(){
//     console.log(`Hey ${this._fullName}`);
//  }
//  get age(){
//     return 2024-this.birthYear;
// }
// // // Set a property that already exists
//  set fullName(name){
//     if (name.includes(' '))this._fullName=name;
//     else alert(`${name} is not a full Name!`)
//  }
//  get fullName(){
//     this._fullName;
//  }
//  static hey(){
//     console.log(`Hi i m static method`);
//     console.log(this);
//  }
// }

// class StudentCl extends PersonCl{
// // If we don't need any new property or parameter then we don't need a new constructor 
//  constructor(fullName,birthYear,course){
//    // Super Function always comes first than any other property
//    super(fullName,birthYear);
//    this.course=course;
//  }
//  introduce(){
//    console.log(`Hi My name is ${this._fullName} and i study ${this.course} `);
//  }
// }
// const ahmad=new StudentCl('Ahmad ch',2002,'Computer Science');
// ahmad.introduce();
// ahmad.greet();

// ---------------------18. Inheritance between Classes Object.create-------------------
// const personProto={
//    calcAge(){
//       console.log(2024-this.birthYear);
//    },
//    init(firstName,birthYear){
//    this.firstName=firstName;
//    this.birthYear=birthYear;
//    },
// };

// // const steven=Object.create(personProto);

// const studentProto=Object.create(personProto);
// studentProto.init=function(firstName,birthYear,course){
//    personProto.init.call(this,firstName,birthYear);
//    this.course=course;
// }
// const jay=Object.create(studentProto);
// console.log(jay.init('Ahmad Mubashir',2002,'Computer Science'));

// ---------------------------19.Another Class Example---------------------------------

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version of them)
// class Account{
//   // 1)Public fields(instances)
//   locale=navigator.language;
//   // _movements=[];
//   // 2)Private fields
//  #movements=[];
//  #pin;
//  constructor(owner,currency,pin){
//  this.owner=owner;
//  this.currency=currency;
//  //  Protected property
// //  this._pin=pin;
//  this.#movements=[];
//  this.#pin=pin;
// //  this.locale=navigator.language;
//  console.log(`Thanks for opening an account, ${owner}`)
//  }

// //  3) Public methods
// //  Public Interface
// getMovements(){
//   return this.#movements;
// }

//  deposit(val){
// this.#movements.push(val);
//  return this;
//  }

//  withdraw(val){
//  this.deposit(-val);
//  return this;
//  }

//  _approveLoan(val){
//    return true;
//  }
//  requestLoan(val){
//   // if(this.#approveLoan(val)){
//  if(this._approveLoan(val)){
//    this.deposit(val);
//    console.log("Loan approved");
//    return this;
//  }
//  }
// //  4)Private Methods
// //  #approveLoan(){
// //   return true;
// // }
// }

// const acc1=new Account('Ahmad','USD',1111);
// // acc1.movements.push(250);
// // acc1.movements.push(-140);
// acc1.deposit(100);
// acc1.withdraw(140)
// acc1.requestLoan(1000)
// // console.log(acc1.#movements);
// console.log(acc1);
// // console.log(acc1.#approveLoan(100));
// // console.log(acc1.#pin);

// // --------------------------------22. Chaining Methods----------------------------------------

// acc1.deposit(1000).deposit(4000).withdraw(10000).requestLoan(20000);
// console.log(acc1.getMovements());

// ---------------------------------24. Coding Challenge # 4-----------------------------------
  
// class CarCl{
//     constructor(make,speed){
//         this.make=make;
//         this.speed=speed;
//     }
//     accelerate(){
//     this.speed+=10;
//     console.log(`The ${this.make} car's speed is ${this.speed}km/h`);
//     }
//     brake(){
//     this.speed-=5;
//     console.log(`The ${this.make} car's speed is ${this.speed}km/h`); 
//     }
//     get speedUS(){
//    return this.speed=this.speed/1.6;
//     }
//     set speedUS(speed){
//    this.speed=speed*1.6;
//     }
// }

// class EVCl extends CarCl{
//   #charge;
//  constructor(make,speed,charge){
//   super(make,speed);
//   this.#charge=charge;
//  }
//  chargeBattery(chargeTo){
//     console.log(`The battery is charged upto ${chargeTo}%`);
//     return this;
//  }
//  accelerate=function(){
//     console.log(`${this.make} is going at ${this.speed+20}km/h with a charge of ${this.#charge-1}%`);
//   //     // Tesla going at 140km/h, with a charge of 22%
//   return this;
//  }
 
// }
// const Rivian=new EVCl('Rivian',120,22);
// Rivian.accelerate().chargeBattery(50).brake();
// console.log(Rivian.speedUS);

// ************************Extra Practice**************************************

// *************************************

//  ------------------------Question 1
// class Person{
//   constructor(name,age,country){
//  this.name=name;
//  this.age=age;
//  this.country=country;
//   }
//   displayDetails(){
//     console.log(`Name : ${this.name} \n Age : ${this.age} \n Country : ${this.country}`);
//   }
// }
// const person1=new Person("Ahmad",22,"Pakistan");
// const person2=new Person("Mubashir",52,"Qatar");
// console.log(person1,person2);
//  -------------------------------Question 2
// class Rectangle{
//   constructor(width,height){
//     this.width=width;
//     this.height=height;
//   }
//  areaRectangle(){
//   return this.width*this.height;
//  }
//  perimeterRectangle(){
//   return 2*(this.height+this.width);
//  }
 
// }
// const rectangle1=new Rectangle(10,10);
// console.log(rectangle1.areaRectangle());
// console.log(rectangle1.perimeterRectangle());
// -------------------------------Question 3
// class Vehicle{
//   constructor(make,model,year){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//   }
//   displayVehicles(){
//     console.log(`Name :${this.make} \n Model :${this.model} \n Year : ${this.year}`);
//   }
// }
// class Car extends Vehicle{
//   constructor(make,model,year,noOfDoors){
//     super(make,model,year);
//     this.noOfDoors=noOfDoors;
//   }
//   displayVehicles(){
//     console.log(`\tName :${this.make}
//     Model :${this.model}
//     Year : ${this.year}
//     nofDoors :${this.noOfDoors}`);
//   } 
// }
// const car1=new Car('Ford','f5',2024,4);
// car1.displayVehicles();
// -----------------------------Question 4 and 5
// class BankAccount{
//   constructor(accountNumber,accountholdername,balance){
//  this.accountNumber=accountNumber;
//  this.accountholdername=accountholdername;
//  this.balance=balance;
//   }
//   deposit(amount){
//  this.balance+=amount;
//  console.log(`${amount} Rs deposited successfully`);
//  return this;
//   }
//   withDraw(amount){
//  if (this.balance<=amount){
//   console.log("Insufficient Balance");
//  }
//  else{
//   this.balance-=amount;
//   console.log(`${amount} withdrawn successfully`);
//  }
//  return this;
//   }
//   displayBalance() {
//     console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
//   }
//   transfer(amount,recepientAccount){
//     if(amount<=this.balance){
//       this.balance-=amount;
//       recepientAccount.deposit(amount);
//       console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${recepientAccount.accountNumber}.`);
//     } else {
//       console.log(`Insufficient balance in account ${this.accountNumber} for transfer.`);
//     }
//     }

//   }

// const acc1=new BankAccount(61268666667,"Ahmad",5000);
// const acc2=new BankAccount(61266667667,"Mubashir",10000);
// acc1.deposit(5000);
// acc1.withDraw(1000);
// acc1.withDraw(10000);
// acc1.transfer(2000,acc2);
// acc1.displayBalance();
// acc2.displayBalance();
// ---------------------------Question 6
// Incomplete will continue after seeing splice method;
// class University{
//   movements=[];
//   constructor(name,department){
//   this.name=name;
//   this.department=department;
//   this.movements.push(department);
//   }
//   addDepartment(department){
//   this.movements.push(department);
//   console.log(`Department ${department} added successfully`);
//   }
//   removeDepartment(department){
//     if (this.movements.includes(department)){
//       this.movements.splice()
//     }
//   }
// }

// const Car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
//   }
  
//   Car.prototype.accelerate=function(){
//     console.log("Speed increases");
//   }
//   Car.prototype.brake=function(){
//     console.log("Speed decreases");
//   }
  
//   const EV=function(make,speed,charge){
//       Car.call(this,make,speed);
//       this.charge=charge;
//   }
//   EV.prototype=Object.create(Car.prototype)
//   EV.prototype.chargeBattery=function(chargeTo){
//       console.log(`${make} is charged upto ${chargeTo}`);
//   }
//   EV.prototype.accelerate=function(){
//       console.log(`${this.make} speed is increased to ${this.speed+20} and its charge is ${this.charge}`);
//   }
//   const car1=new EV("Tesla",100,22);
//   car1.brake();
//   car1.accelerate();

