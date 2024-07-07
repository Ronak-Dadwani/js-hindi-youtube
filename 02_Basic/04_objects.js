// singleton 

const tinderUser = {}



tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "sam@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ronak",
            lastname: "dadwani"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}

// const obj3 = {obj1 , obj2} 

// const obj3 = Object.assign({},obj1 , obj2 ,obj4)


const obj3 = {...obj1,...obj2} //spread operator
// console.log(obj3);


const users = [
    {
        id:1,
        email: "h@gmail.com"
    } ,
    {

    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// destructions 
const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "ronak dadwani"
}

// course.courseInstructor

const {courseInstructor: inst} = course
console.log(inst);

// const navbar = ({company}) =>{  // destructurinng the objects

// }

// navbar(company = "ronak")

// {
//     "name" : "ronak",
//     "coursename": "js in Hindi",
//     "price": "999"
//     "courseInstructor": "ronak dadwani",
// }


