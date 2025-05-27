//Immediately Invoked Function Expression
// for removing global scope pollution 
(function connection(){  // name iife
    console.log(`DB IS CONNECTED`)
})(); // semicolon 

// arrow function

((name) => { // unname iife
    console.log(`${name} ,DB Is CONNECTED`)
})('abhishek');