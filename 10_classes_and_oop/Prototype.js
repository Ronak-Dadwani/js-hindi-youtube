// let myName = "ronak     "
// let myChannel = "chaiiiiii     "

// console.log(myName.trueLength);

// let myHeros = ["thor", "spiderman"]

// let herosPower = {
//     thor: "hammer",
//     spiderman : "sling",


//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }

// object.prototype.hitesh = function(){
//     console.log(`ronak is present in all object`);
// }

// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says Hello`);
// }

// myHeros.hitesh()
// herosPower.hitesh()

const user = {
    name: "chai",
    gmail: "chai@google.com"
}


const Teacher = {
    makeVide: true,

}

const TeachingSupport ={
    isAvailable : false
}

const TASupport = {
    makeAssigment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport

}

Teacher:__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode        "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()