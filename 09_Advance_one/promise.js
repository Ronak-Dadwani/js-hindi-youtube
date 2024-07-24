// method 1 for calling promise
const promiseOne = new Promise(function(resolve , reject){
    //Do an async call
    //DB calls, cryptography , network call

    setTimeout(() => {
        console.log("Async Task is complete")
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("reslve is consumed")
})

// Method 2 for calling proises

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async task2 ")
        resolve()
    },1000)
}).then(function(){
    console.log("Ayncs 2 completed")
})

// Method 3 

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"chai",
          email: "chai@example.com"  
        })
    },1000)
})


promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "ronak", password: "123"})
        } else {
            reject('ERROR: Smething Went Wrong')
        }
    },2000)
})


promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("The pomise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS Went Wrong')
        }
    },2000)
})

async function consumePromiseFie(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFie()


// async function getAllUser(){
//    try {
//     const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E!", error);
//    }


// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))