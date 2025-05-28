// for loop
const array = [1,2,3,4,5,6,7,8]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}


// for (let i = 1; i <=5 ; i++) {

//     for (let j = 1; j <= 10; j++) {
//          console.log(i + '*' + j + '=' + i*j)
//     }

// }

// break and continue
// for (let i = 0; i <= 10; i++) {
//     if(i == 5){
//         console.log(`detected 5`);
//         break
//     }
    
//   }
// for (let i = 0; i <= 10; i++) {
//     if(i == 5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(i);
// }


// while loop


let i = 0
while (i < array.length) {
console.log(array[i]);
i++;
}

// do while

let score = 11
do{
    console.log(`score is ${score}`)
    score--;
}while(score >= 0)