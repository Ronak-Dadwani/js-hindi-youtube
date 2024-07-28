const user = {
    username: "ronak",
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    // return this
}

const userOne = new User("ronak" , 2 , true)
const userTwo = new User("chai" , 20 , true)
console.log(userOne);
console.log(userTwo);

// when we use new keyword 
/*
s1 = new pbject is created
s2 = constructor function cll hota hai new keyword sath
s3 = this keyword ll arguments is injected
s4 = and we get output
*/

