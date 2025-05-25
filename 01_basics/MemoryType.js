//stack (primitive) , Heap ( Non - primitive)
let myName = "Abhishek nagar" // primitive type
let lastName = myName
 lastName = "dhakar";
console.log(lastName);
console.log(myName);


let UserOne = {
    name: "abhishek",
    email: "abhi@gmail.com"
}
let Usertwo = UserOne
Usertwo.name = "vishal"
console.log(UserOne.name) // vishal
console.log(Usertwo.name) // vishal