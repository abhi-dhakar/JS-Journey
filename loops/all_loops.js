// 1. for loop - Print numbers from 1 to 10
console.log("for loop:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. while loop - Print numbers from 1 to 10
console.log("\nwhile loop:");
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 3. do...while loop - Print numbers from 1 to 10
console.log("\ndo...while loop:");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 10);

// 4. for...in loop - Iterate over object properties
console.log("\nfor...in loop:");
let person = { name: "Abhishek", age: 20, country: "India" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// 5. for...of loop - Iterate over an array
console.log("\nfor...of loop:");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}

// 6. break in loop - Stop when i is 3
console.log("\nbreak in for loop:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}

// 7. continue in loop - Skip when i is 3
console.log("\ncontinue in for loop:");
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}

// 8. Nested loops - Multiplication table (1 to 3)
console.log("\nNested loops - Multiplication Table:");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
