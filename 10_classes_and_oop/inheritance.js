class User {
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User {
    constructor(username , email , password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A NEW COURSE WAS ADDED BY ${this.username}`);
    }
}

const chai = new Teacher("chai" , "chai@gmail.com" , "123")  
 chai.addCourse();

 const masalaChai = new User("masalachai")
//  masalaChai.addCourse();  masalachai dont have the acces of the add course
 masalaChai.logMe();

 