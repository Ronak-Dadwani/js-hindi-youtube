//  Primitive datatypes

//typeof 
/*
undefined = undefined
null = object
boolean = bollean
number = number
string = string
object (native and does not implement ) = object

*/

// 7 types : string , Number, boolean , null , undefined , symbol , bigint , 

// const score = 100;
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null;

//let userEmail = undefined; // two ways of writting undefined value 

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 95621325415635;
// console.log(bigNumber);
// console.log(typeof bigNumber);

// Is javascript is a static type or dynamically type => this is a dynamically type.

// Reference Types (non-primitive datatypes)

//array , objects , function (=> web evenets and browser events ) 


// const heros = ['shaktiman','naagraj', "doga"]

// let myObj = {
//     name: "ronak",
//     age: 22 ,

// }

// what all things are their in culry braces all are objects.


// function  as a variable

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof anotherId);

// ***************** Stack (Primitive), Heap (non-primitive) 

let myYoutubename = "ronakdadwani.com"

let anothername = myYoutubename
anothername = "chaiaurcode"
// console.log(myYoutubename);
// console.log(anothername);

let userOne = { 
    email: "'user@google.com",
    upi: "user@ybl",

}

let userTwo = userOne
userTwo.email = "ronak@google.com"

console.log(userOne.email);
console.log(userTwo.email);