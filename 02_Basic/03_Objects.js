// objects and events 

//singleton 
// Object.create 

//objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "ronak",
    "full name": "Ronak Dadwani",
    [mySym] : "mykey1",
    age: 21,
    email: "ronak@google.com",
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser [mySym])
// console.log(JsUser [mySym])
// console.log(typeof JsUser.mySym)

// most of the we use . method to call the items 
// in rare cases e use brackets and braces 

JsUser.email = "ronak@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ronak@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Welcome to JSuser");
}
JsUser.greetingTwo = function() {
    // console.log(`Welcome to JSuser ,${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());