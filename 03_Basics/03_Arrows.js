const user = {
    username: "ronak",
    price: 999,

    WelcomeMessage: function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
    }
}

// user.WelcomeMessage()
// user.username = "sam";
// user.WelcomeMessage()

// console.log(this);


// function chai(){
//     let username = "ronak"
//     console.log(this.username);
// }

// chai()

// const chai = function (){
//     let username = "ronak"
//     console.log(this.username);
// }
const chai =  () => {
    let username = "ronak"
    // console.log(this.username);
}

// chai()


// const addTwo = (num1 , num2) => {
//             return num1+num2        // writing in curly we have to write return function     
// }

// const addTwo = (num1 , num2) =>  (num1+num2) // here we can directly write without adding return function 
const addTwo = (num1 , num2) =>  ({username: " ronak"}) // if we want call an object we call like this first in urly braces and then parenthesiss


console.log(addTwo(3 , 4 ))


const myArray = [2, 5, 6 ]

// myArray.forEach()

