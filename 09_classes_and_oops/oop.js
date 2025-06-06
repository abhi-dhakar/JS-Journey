//object literal
const user = {
    username: "abhishek",
    logincount: 10,
    getUserDetails: function(){
        console.log("got user details from DB");
        console.log(`username is ${this.username}`);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails);

//construction function

function User(username , logincount , isloggedin){
    this.username = username;
    this.logincount = logincount;
    this.isloggedin = isloggedin

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
const userone = new User("abhishek" , 8 ,true)
const usertwo = new User("vishal" , 17 , false)
console.log(userone.constructor); // constructor is refrenc for here User
console.log(usertwo);

// in new keyword 
//step 1 - new object create hota h
//step 2 - constructor call hota h
//step 3 - this m add ho jate h







