const score = 400;
// console.log(score);
// const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(1));


const otherNumber = 1.238966
// console.log(otherNumber.toPrecision(3));

const hundreads = 100000;
// console.log(hundreads.toLocaleString('en-IN'));


///++++++++++++++++++++++ Maths +++++++++++++++++++++++
// this comes by default

// console.log(Math);
// console.log(Math.abs(-4)); // this will change negative to positive 
// console.log(Math.round(4.6)); // round value of 4.6 // output 4.6 = 5 , 4.2 = 4
// console.log(Math.ceil(4.2));   //ceil means upper value of the 4.2 or any value output will be 5
// console.log(Math.floor(4.6));   // floor means down value weather it is 4.9 or 4.3 it will give 4
// console.log(Math.min(4,3,2,6,5));
// console.log(Math.max(4,3,2,6,5));

console.log((Math.random()));
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min  + 1 ))+ min );