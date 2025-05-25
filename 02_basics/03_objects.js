//singleton


//object literals
const mySymbol = Symbol("key1")
const user = {
    name: "abhishek",
    "full name": "abhishek nagar",
    [mySymbol]: "key1",
    age: 20,
    location: "bundi",
    isLoggedin: false
}

//console.log(user.name)
//console.log(user["name"])
//console.log(user["full name"]) // only access by [] not . fullname
//console.log(user[mySymbol])
//console.log(typeof user[mySymbol])

user.name = "vishal"
//Object.freeze(user) // freeze 
//user.name = "hello" // not changed
//console.log(user)

user.greeting = function(){
    console.log(`Hello , ${this.name}`)
}
console.log(user.greeting())



