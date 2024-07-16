const myNums = [1 , 2 , 3 ]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc ${acc} , currval ${currval}`);
//     return acc + currval
// } , 0)

// const myTotal = myNums.reduce ( (acc ,currval) => acc + currval, 0)

console.log(myTotal);


const shoppingCat = [
    {

        itemName:  "js course",
        price : 999
        
    } ,
    {
        itemName: "mobile dev course",
        price: 2999
    } ,
    {
        itemName : "data science course",
        price: 29999 
    }

    ]

 const price1 = shoppingCat.reduce( (acc ,item)=> acc + item.price , 0  )   
 console.log(price1);