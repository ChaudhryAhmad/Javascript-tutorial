// let js='amazing';
// if (js==='amazing')alert('Javascript is fun!')

// ------------------------Coding Challenge # 1--------------------------------------
const markWeight=78;
const markHeight=1.69;

const johnWeight=92;
const johnHeight=1.95;

let markBMI= markWeight/(markHeight*markHeight);
let johnBMI= johnWeight/(johnHeight*johnHeight);

console.log(markBMI,johnBMI);

// let markHigherBMI = markBMI>johnBMI;
// console.log(markHigherBMI);

// ------------------------Coding Challenge # 2------------------------------------------

if (markBMI>johnBMI){
    console.log(`Mark's BMI (${markBMI}) is greater than John's BMI (${johnBMI})`);
}
else{
    console.log(`John's BMI (${johnBMI}) is greater than Mark's BMI (${markBMI})`);
}

// ------------------------Coding Challenge # 3------------------------------------------

let dophinAverageScore = (96+108+89)/3;
let koalasAverageScore= (88+91+110)/3;

if (dophinAverageScore>koalasAverageScore){
    console.log(`dophinAverageScore (${dophinAverageScore}) is greater than koalasAverageScore (${koalasAverageScore})`);
}

else if(dophinAverageScore<koalasAverageScore){
    console.log(`dophinAverageScore (${dophinAverageScore}) is less than koalasAverageScore (${koalasAverageScore})`);
}

else{
    console.log(`dophinAverageScore (${dophinAverageScore}) is equal to koalasAverageScore (${koalasAverageScore})`);
}

dophinAverageScore>=koalasAverageScore ? console.log("Hi chaudhry") : console.log("Bad Chaudhry");;

// ------------------------Coding Challenge # 4------------------------------------------

let bill=20;
let tip= bill>=50 && bill<=300 ? console.log(`Your tip is ${bill*0.15} and total bill is ${bill+(bill*0.15)} `) : console.log(`Your tip is ${bill*0.20} and total bill is ${bill+(bill*0.20)} `);