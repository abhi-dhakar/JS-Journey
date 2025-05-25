// january 1, 1970

let  myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());

//console.log(typeof myDate); // objects

// months start with 0 in js

//let createdDate = new Date(2023 , 0 ,23)
//console.log(createdDate.toDateString())


// timestamp

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(myTimeStamp/1000)) //ms


let newdate = new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)

newdate.toLocaleDateString('default',{
    weekday: "long",
    
})