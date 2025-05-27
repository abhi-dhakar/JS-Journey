function sumOfTwoNumber(num1 , num2){
    return num1 + num2
}
const result = sumOfTwoNumber(10,20)
console.log(result);

function loginUser(username){
    if(!username){
       console.log("Please enter username");
       return 
    }
    return `${username}, is successfully logined`
}

console.log(loginUser("Abhishek"))
console.log(loginUser( )) // return undefined

// functions with objects and arrays

function shopingCartPrice(...num1){  // ... are rest operator
    return num1
}
console.log(shopingCartPrice(100,200,300,400)) // give array

function cartprice(val1,val2, ...num1){
    return num1
}
console.log(cartprice(10,20,30,40,50)) // give array [30,40,50]

// 10 and 20 assigned to val1 and val2

// passing object in function

const User = {
    name: "abhishek",
    email: "abhi@1gmail.com",
    address: "bundi",
    Price: 123
}

function UserLogin(anyObject){
    console.log(`${anyObject.name},is logined`)
    console.log(`${anyObject.email} is email id and address is ${anyObject.address}`)
}
UserLogin(User)

// pass array in function

const array1 = [1,2,3,4,5]
function findposition3(anyarray){
    console.log(anyarray[2])
}

findposition3(array1)
