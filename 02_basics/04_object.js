//singleton

const user = new Object() // singleton object

user.id = "123a"
user.name = "abhishek"

//console.log(user)

const regularuser ={
    email: "abhi@gmail.com",
    fullname: {
       userfullname:{
         firstname: "abhishek",
        lastname: "dhakar"
       }
    }
}

//console.log(regularuser.fullname?.userfullname.firstname)


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: 'd'
}

//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1 , ...obj2} //spred operator
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "abhi1@gmail.com"
    },
    {
        id: 2,
        email: "abhi2@gmail.com"
    },
    {
        id: 3,
        email: "abhi3@gmail.com"
    }
]

//user[1].email

//console.log(regularuser);
//console.log(Object.keys(regularuser)); // give array of keys
//console.log(Object.values(regularuser)); // give array of values
//console.log(Object.entries(regularuser))

//console.log(regularuser.hasOwnProperty('email')); // true


const myuser = {
    name: "abhishek",
    id: 1,
    class: "second"
}

const {name} = myuser
console.log(name);



