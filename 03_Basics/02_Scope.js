// let var const

// let a  = 300;

// if (true) {
//     let a= 10
//     const b = 20
//     console.log("INNER: " ,a);
   
// }

// console.log(a);
// console.log(b);
// console.log(c);   // this reason we don't use var in js for the declaration.

// two types of scope global scope and blocked scope 
// whatever things are written in the if else statement that are blocked scope and whatever written outside the statement that is global scope



// nested scope

function one (){
    const username = "ronak"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);

    // two()
}

// one()


if (true) {
    const username = "ronak"
    if (username === "ronak") {
        const website = " Youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


//++++++++++++++++++++++++++ interesting scope ++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo()
const addTwo = function (num){
    return num + 2
}

