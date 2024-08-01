function SetUsername(username){
    //comlplex DB calls
    this.username = username
}


function createUser(username , email ,password){
        SetUsername.call(this , username)
        
        this.email = email
        this.password = password

}

const chai = new createUser("chai", "chai@google" ,'123')
console.log(chai);