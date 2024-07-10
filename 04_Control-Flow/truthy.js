//falsy value
/* 
false , 0 , -0 , bigint (0n) , null , undefined , NaN = not a number

thruthy value = true => [] , "" ,  
"0" => thrithy value , "false" , " ", [] , {}, function(){}
*/

// false == 0 => true
// false == "" => true
// 0 == '' => true


// Nullish coalescing operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15


console.log(val1);


// terniary operator

// condition ? true : false


const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");