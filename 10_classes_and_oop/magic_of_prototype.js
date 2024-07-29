// deep about prototype

// prototypal inheritence

function multipleByFive(num){
    return num*5
}

multipleByFive.power = 2;

console.log(multipleByFive(5));
console.log(multipleByFive.power);
console.log(multipleByFive.prototype);


function createUser(username , score){
    this.username = username
    this.score = score
}

/*
here's what happen behind the scene when new keyword is used:

A new object is created: the new keyword initiates the creation of a new javascript object.

a prototype is linked: the newly created objects gets linked to the prototype property of the constructor function. this means that it has access to property and methods defined on the constructor prototype.

the constructor is called the constructor function is called with the specified arguments and ths is bound to the newly created object if no explict    return value is specified from the constructor, javascript assumes this , the newly created object, to be  the intented return value.

the new object is returened : after the constructor function has beem called , if it doen'nt return a non-primitive value ( object , array, function, etc.)
the newly created object is returned.

*/