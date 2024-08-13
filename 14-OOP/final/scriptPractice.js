const motorcycle=function(brand,model){
    this.brand=brand;
    this.model=model;
    this.statement=function(){
        console.log("Pa Pa");
    }
}

const motor=new motorcycle('Yamaha',2005);
// console.log(motor instanceof motorcycle);

motorcycle.hey=function(){
    console.log("chaudhry AHmad");
}

// console.log(motor.__proto__);
// console.log(motor.__proto__===motorcycle.prototype);

// console.log(motorcycle.prototype.isPrototypeOf(motor));

// ---------------------------------Coding Challenge 1-------------------------------------------

// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
//2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;

// const Car=function(make,currentSpeed){
//     this.make=make;
//     this.currentSpeed=currentSpeed;
// }

// Car.prototype.accelerate=function(){
//     console.log(`${this.make} going at ${this.currentSpeed+10}`);
// }

// Car.prototype.brake=function(){
//     console.log(`${this.make} going at ${this.currentSpeed-15}`);
// }
// const car1=new Car('BMW',120);
// console.log(car1.__proto__===Car.prototype);
// car1.accelerate();
// car1.brake();

// class Car{
//     constructor(name,speed){
//         this.name=name;
//         this.speed=speed;
//     }
//     accelerate(){
//              console.log(`${this.make} going at ${this.currentSpeed+10}`);
//     }
//     brake(){
//             console.log(`${this.make} going at ${this.currentSpeed-15}`);
//     }
//     get speedUS(){
//         return this.speed/1.6;
//     }
//     set speedUS(speed){
//          this.speed=speed*1.6;
//     }
// }

// const ford = new Car('Ford', 120);
// console.log(ford);


const Person=function(name){
    this.name=name;
}

Person.prototype.introduce=function(){
    console.log("Hello I am chaudhry");
}

const Student=function(name){
    Person.call(this,name);
}

Student.prototype=Object.create(Person.prototype);

const mike=new Student('Mike');
console.log(mike);

