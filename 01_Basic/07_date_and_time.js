//  dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


let myCreateddate = new Date("01-14-2023")
// console.log(myCreateddate.toDateString());
// console.log(myCreateddate.toLocaleString());


//time stamo

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); 
// console.log(myCreateddate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getMonth());

// `${newDate.getDate()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})

