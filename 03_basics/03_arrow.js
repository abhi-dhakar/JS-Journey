
const two = function(){
    console.log("hello")
}
two()

//arrow function
const three = () => {
    console.log("three")
}

const sum = (num1 , num2) =>{
    return num1 + num2
}

console.log(sum(10,20));

const sum2 = (num1 , num2)=> (num1 + num2) // no need return keyword implesent return
console.log(sum2(10,15));

const sum3 = (num1 , num2) => ({name: "abhishek"})


//this keyword

function one(){
    console.log(this)
}
//one()

const user = {
    username: "abhishek",
    price: 10000,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome`);
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "vishal"
user.welcomeMessage()

console.log(this) // empty in node
// in browser global object is window object 
