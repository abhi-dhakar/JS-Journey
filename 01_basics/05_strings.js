const name = "abhishek"
const lastname = "nagar"

console.log(name + lastname + "dhakar")

console.log(`Hello my name is ${name} ${lastname}`)

const gameName = new String ('abhishek-nagar');
console.log(gameName[0]) // a
console.log(gameName.__proto__)

console.log(gameName.toUpperCase())


// Some important methods
const newstring = gameName.substring(0,4) // 4th not include
console.log(newstring)
const newstring2 = gameName.slice(1,4)
console.log(newstring2)


//trim
const username = "  dhakar   "
console.log(username)
console.log(username.trim()) // remove extra spaces


// string -> array 

console.log(gameName.split("-"))