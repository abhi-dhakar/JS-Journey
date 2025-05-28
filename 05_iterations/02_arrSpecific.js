// for of
const arr = [1,2,3,4,5]

for (const num of arr) {
  console.log(num);
}

const str = "my name is abhishek"
for (const val of str) {
    console.log(val)
}

// Maps
// map objects are collections of key-value pair
// key is unique in the map
// follow order

const map = new Map()
map.set('IN' , "india")
map.set('USA' , "United States of America")
console.log(map)

for (const [key,value] of map) {
    console.log(key)
    console.log(value)
}


const myObject = {
    name: "abhishek",
    email: "abhi1@gmail.com"
}
// for (const key of myObject) {
//     console.log(key)
    
// }         // not working for of loop for object


// for in loop
for (const key in myObject) {
   console.log(myObject[key])
}

const myarray = [1,2,3,4,5]
for (const key in myarray) {
  console.log(myarray[key])
}

// for in loop not iteret for map



