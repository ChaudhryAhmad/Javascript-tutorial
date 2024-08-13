// ---------------------------------Coding Challenge 1-------------------------------------------

// const average =(a,b,c)=>(a+b+c)/3;

// const avgDolphin=average(85,54,41);
// const avgKoalas=average(23,34,27);

// console.log(avgDolphin,avgKoalas);

// const checkWinner=function(avgDolphin,avgKoalas){
//     if (avgDolphin>=2*avgKoalas){
//         console.log(`Dolphin win (${avgDolphin} vs ${avgKoalas})`);
//     }
//     else if (avgKoalas>=2*avgDolphin){
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphin})`);
//     }
//     else{
//         console.log("No team win");
//     }
// }

// checkWinner(avgDolphin,avgKoalas);

// ---------------------------------Coding Challenge 2-------------------------------------------

// const calcTip=function(value){

//     if (value>=50 && value<=300){
//        return value * 0.15;
//     }
//     else{
//         return value *0.20;
//     }
// }

// console.log(calcTip(200));

// const bills=[125,555,44];
// const tips=[];

// for (const i of bills){
//     tips.push(calcTip(i))
// }

// console.log(bills,tips);


// ---------------------------------Coding Challenge 3------------------------------------------

// The big difference between dot notation and bracket notation is that we can use expression in bracket notation and we can't use expression in dot notation

// const jonas={
//     firstName:'Ahmad',
//     lastName:'Mubashir',
//     birthYear:2002,
//     job:'Software Engineering',
//     age:22,
//     calcAge(){
//         return 2022-this.birthYear;
//     }
// }
// const interestedIn = prompt("What do u want to know about me firstName ,lastName , job, age");
// console.log(jonas[interestedIn]);
// console.log(jonas.calcAge());

// ------------------------------------

const jonas={
    firstName:'Ahmad',
    lastName:'Mubashir',
    mass:78,
    height:1.69,
    age:22,
    calcBMI(){
        return this.mass/(this.height*this.height)
    }
}

const Mark={
    firstName:'Chaudhry',
    lastName:'Seemab',
    mass:92,
    height:1.95,
    calcBMI(){
        return this.mass/(this.height*this.height)
    }
}

Mark.BMI=Mark.calcBMI();
console.log(Mark);


// ---------------------------------Coding Challenge 4-------------------------------------------

// const calcTip=function(value){

//     if (value>=50 && value<=300){
//        return value * 0.15;
//     }
//     else{
//         return value *0.20;
//     }
// }

// console.log(calcTip(200));

// const bills=[22,295,176,440,37,105,10,1100,86,52];
// const tips=[];
// const totals=[];

// for (const i of bills){
//     tips.push(calcTip(i))
// }

// for (const i of bills){
//     totals.push(i+calcTip(i))
// }
// console.log(bills,tips,totals);