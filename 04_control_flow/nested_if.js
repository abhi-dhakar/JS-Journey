//Nested if statement
let isStudent = true;
let hasID = true;
if (isStudent) {
    if (hasID) {
        console.log("You get a student discount.");
    } else {
        console.log("Please show your student ID.");
    }
} else {
    console.log("No student discount available.");
}