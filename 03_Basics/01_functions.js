

// function myName (){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
// }

// myName()
 //=> myName is reference  and myName()  this is execution


 
//  function addTwoNumbers(num1 , num2) {
//     console.log(num1+num2);
//  }
 

 function addTwoNumbers(num1 , num2) {
    
    // let result = num1+num2
    // return result

    return num1+num2
 }

const result =  addTwoNumbers(3,5)

// console.log("Result:" , result)

function loginUserMessage (username = "sam")  {
    if(!username){
        console.log("Please enter user name");
        return 
    }
    return `${username} just logged in`
}
 
// console.log(loginUserMessage("ronak")) // output will be ronak just logged in
console.log(loginUserMessage("ronak")); // output undefined just logged in null will not when an empty function is written
