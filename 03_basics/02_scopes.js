// Global scope variable
let globalVariable = "I am a global variable";

function outerFunction() {
    // Local scope variable
    let localVariable = "I am a local variable";
    
    console.log(globalVariable);  // Can access global variable
    console.log(localVariable);   // Can access local variable
    
    function innerFunction() {
        // Inner local scope
        let innerVariable = "I am an inner local variable";
        
        console.log(globalVariable);   // Can access global variable
        console.log(localVariable);    // Can access parent's local variable
        console.log(innerVariable);    // Can access its own local variable
    }
    
    innerFunction();
    // console.log(innerVariable); // innerVariable not accessible here
}

outerFunction();
console.log(globalVariable);      // Can access global variable
// console.log(localVariable);    // localVariable not accessible here


addone(5)
function addone(num){
    return num+1
}


addTwo(5) // not access in this way
const  addTwo = function(num){
    return num + 2
}

