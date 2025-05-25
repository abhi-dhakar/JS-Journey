const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10]
//array1.push(array2)
//console.log(array1)

//concat -> return new array
//const array3 = array1.concat(array2)
//console.log(array3)

//spred operator
//const array3 = [...array1, ...array2]
//console.log(array3)   // same output

const array4 = [1,2,3,[4,5,6],7, [6,7,[4,5]]]
const array5 = array4.flat(Infinity)
console.log(array5)

console.log(Array.from("Abhishek"))
console.log(Array.from({name: "abhishek"})) // empty array interesting case

let a = 1
let b = 2
let c = 3
let d = 4
console.log(Array.of(a,b,c,d)) // create array [1,2,3,4]
