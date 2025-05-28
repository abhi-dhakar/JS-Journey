//Switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Wednesday":
        console.log("Midweek day.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("It's just another day.");
}



/// Nullish coalescing Operator

let val1;
//val1 = 10 ?? 20
//console.log(val1); // 10

//val1 = null ?? 10
//console.log(val1); // 10
//val1 = undefined ?? 10
//console.log(val1); //10

val1 = null ?? undefined
console.log(val1); // undegined




