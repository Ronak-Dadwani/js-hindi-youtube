const coding = ["js","ruby","java","python"]

// coding.forEach( function(num1){
//     console.log(num1);
// })

// coding.forEach( (val)=> {
//     console.log(val);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item , index , arr) =>{
//     console.log(item , index , arr);
// } )

const myCoding = [
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "java",
        languagefilename: "java"
    },
    {
        languagename: "python",
        languagefilename: "py"
    }
]

myCoding.forEach( (codingfile)=>{
    console.log(codingfile.languagename);
})