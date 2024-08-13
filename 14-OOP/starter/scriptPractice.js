// -----------------------------Coding Challenge 1----------------------------------------------
// const car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
// }
// car.prototype.accelerate=function(){
//     this.speed+=10;
//     console.log(`The ${this.make} car's speed is ${this.speed}km/h`);
// }
// car.prototype.brake=function(){
//     this.speed-=5;
//     console.log(`The ${this.make} car's speed is ${this.speed}km/h`);
// }
// const BMW=new car('BMW',120);
// const Mercedes=new car('Mercedes',95);
// BMW.accelerate();
// BMW.brake();
// Mercedes.accelerate();
// Mercedes.brake();

// ----------------------------Coding Challenge 2----------------------------------------------

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
// const BMW=new car('BMW',120);
// BMW.accelerate();
// BMW.brake();
// console.log(BMW.speedUS);
// console.log(BMW.speedUS(100));

// -----------------------------Coding Challenge 3-----------------------------------------------

// const car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
// }
// car.prototype.accelerate=function(){
//     this.speed+=10;
//     console.log(`The ${this.make} car's speed is ${this.speed}km/h`);
// }
// car.prototype.brake=function(){
//     this.speed-=5;
//     console.log(`The ${this.make} car's speed is ${this.speed}km/h`);
// }

// const EV=function(make,speed,charge){
// EV.prototype=Object.create(car.prototype);
//  car.call(this,make,speed);
//  this.charge=charge;
// }

// EV.prototype.chargeBattery=function(chargeTo){
//     console.log(`The battery is charged uptp ${chargeTo}`);
// }
// EV.prototype.accelerate=function(){
//     console.log(`${this.make} is going at ${this.speed+20}km/h with a charge of ${this.charge-1}`);
//     // Tesla going at 140km/h, with a charge of 22%
// }
// const Tesla=new EV('Tesla',120,23);
// Tesla.chargeBattery(50);
// Tesla.accelerate();

// ***************************Practice********************************************


// Constructor function
// const Car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
//    }
//    Car.prototype.brake=function(){
//     console.log(`Hello ${this.make}, My speed is ${this.speed}`);
    
//    }
  
// const EVCL=function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge=charge;
//    }

// EVCL.prototype=Object.create(Car.prototype);
// const car1=new EVCL('Mercedes',200,22)
// console.log(car1.make);
// car1.brake();
// Inheritance using Constructor Function
// const Car=function(make,speed){
//     this.make=make;
//     this.speed=speed;
//    }
//    Car.prototype.brake=function(){
//     console.log(`Hello ${this.make}, My speed is ${this.speed}`);
    
//    }
  
// const EVCL=function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge=charge;
//    }

// EVCL.prototype=Object.create(Car.prototype);
// const car1=new EVCL('Mercedes',200,22)
// console.log(car1.make);
// car1.brake();
// Classes method
// class Car{
//     constructor(make,speed){
//     this.make=make;
//     this.speed=speed;
//     }
//     brake(){
//         console.log(`Hello ${make}, My speed is ${speed}`);
//     }
// }
// const car1=new Car('Mercedes',200)
// car1.brake();
// Inheritance using ES6 classes
// class Car{
//     constructor(make,speed){
//     this.make=make;
//     this.speed=speed;
//     }
//     brake(){
//         console.log(`Hello ${this.make}, My speed is ${this.speed}`);
//     }
// }
// class EVCL extends Car{
//   constructor(make,speed,charge){
//   super(make,speed);
//   this.charge=charge;
//   }
// }
// const car1=new EVCL('Mercedes',200,22)
// car1.brake();
// Object.Create Method
// const Car={
//     init(make,speed){
//         this.make=make;
//         this.speed=speed;
//     },
//     brake(){
//       console.log(`Hello ${this.make}, My speed is ${this.speed}`);
//  }
// }
// const car1=Object.create(Car)
// car1.init('Mercedes',200);
// car1.brake();
// Inheritance Using Object.Create() method
// const Car={
//     init(make,speed){
//         this.make=make;
//         this.speed=speed;
//     },
//     brake(){
//       console.log(`Hello ${this.make}, My speed is ${this.speed}`);
//  }
// }

// const studentProto=Object.create(Car);
// studentProto.init=function(make,speed,course){
//    Car.init.call(this,make,speed);
//    this.course=course;
// }
// const car1=Object.create(studentProto)
// car1.init('Mercedes',200);
// car1.brake();

// ********************************Practice***********************************************
// Coding Challenge 1
// const Car=function(make,speed){
//   this.make=make;
//   this.speed=speed;
// }

// Car.prototype.accelerate=function(){
//   console.log("Speed increases");
// }
// Car.prototype.brake=function(){
//   console.log("Speed decreases");
// }

// const car1=new Car('Mercedes',200)
// car1.brake();
// Coding Challenge 2
// class Car{
//   constructor(make,speed){
//   this.make=make;
//   this.speed=speed;
//   }
//   accelerate(){
//       console.log("Speed increases");
//     }
//     brake=function(){
//         console.log("Speed decreases");
//       } 
//   get speedUS(){
//     return this.speed/1.6;
//   }
//   set speedUS(speed){
//     return this.speed=speed*1.6;
//   }
// }
// const car1=new Car('Mercedes',200)
// car1.brake();
// console.log(car1.speedUS);
// car1.speedUS=100;
// console.log(car1.speed);

// ----------------------------Coding Challenge 3-------------------------------------------

// const Car=function(make,speed){
//   this.make=make;
//   this.speed=speed;
// }

// Car.prototype.accelerate=function(){
//   console.log("Speed increases");
// }
// Car.prototype.brake=function(){
//   console.log("Speed decreases");
// }

// const EV=function(make,speed,charge){
//     Car.call(this,make,speed);
//     this.charge=charge;
// }
// EV.prototype=Object.create(Car.prototype)
// EV.prototype.chargeBattery=function(chargeTo){
//     console.log(`${make} is charged upto ${chargeTo}`);
// }
// EV.prototype.accelerate=function(){
//     console.log(`${this.make} speed is increased to ${this.speed+20} and its charge is ${this.charge}`);
// }
// const car1=new EV("Tesla",100,22);
// car1.brake();
// car1.accelerate();

// ------------------------------Coding Challenge 4--------------------------------------------
// class Car{

//   constructor(make,speed){
//   this.make=make;
//   this.speed=speed;
//   }
//   accelerate(){
//       console.log("Speed increases");
//     }
//     brake=function(){
//         console.log("Speed decreases");
//       } 
//   get speedUS(){
//     return this.speed/1.6;
//   }
//   set speedUS(speed){
//     return this.speed=speed*1.6;
//   }
// }

// class EVCl extends Car{
//     #charge;
//     constructor(make,speed,charge){
//         super(make,speed);
//         this.#charge=charge;
//     }
//     accelerate(){
//         console.log(`${this.make} speed is increased to ${this.speed+20} and its charge is ${this.#charge}`);
//     }
// }
// const car1=new EVCl("fORD",120,25);
// car1.brake();
// car1.accelerate();

// ------------------------Inheritance using Object.create Practice
// const Car={
//     init(make,speed){
//     this.make=make;
//     this.speed=speed;
//     },
//     brake(){
//     console.log("Speed decreases");
//     },
//     accelerate(){
//     console.log("Speed increases"); 
//     }
//   }
//   const EV=Object.create(Car);
//   EV.init=function(make,speed){
//     Car.init.call(this,make,speed);
//   }
//   EV.accelerate=function(){
//     console.log(`${this.make} speed is increased to ${this.speed+20}`);
//   }
//   EV.init("Ahmad",22)
//   EV.accelerate();
//   EV.brake();
