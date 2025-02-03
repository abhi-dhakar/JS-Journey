// JavaScript String Examples

// 1. Creating Strings
let str1 = "Hello, JavaScript!";
let str2 = 'Single quote string';
let str3 = `Template literal with variable: ${str1}`;
console.log(str1, str2, str3);

// 2. String Properties & Methods
let text = "JavaScript";
console.log("Length:", text.length);
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Substring (0-4):", text.substring(0, 4));
console.log("Slice (2-6):", text.slice(2, 6));
console.log("Replaced String:", text.replace("Java", "ECMA"));
console.log("Split Array:", "Hello,World,JavaScript".split(","));

// 3. String Concatenation
let firstName = "Abhishek";
let lastName = "dhakar";
console.log("Full Name:", firstName + " " + lastName);
console.log("Concatenated:", firstName.concat(" ", lastName));

// 4. Template Literals
let age = 20;
console.log(`My name is ${firstName} and I am ${age} years old.`);

// 5. Checking Substrings
console.log("Includes 'Script':", text.includes("Script"));
console.log("Starts with 'Java':", text.startsWith("Java"));
console.log("Ends with 'Script':", text.endsWith("Script"));

// 6. Trimming Spaces
let spacedText = "  JavaScript  ";
console.log("Trimmed:", spacedText.trim());
console.log("Trim Start:", spacedText.trimStart());
console.log("Trim End:", spacedText.trimEnd());

// 7. Escape Characters
console.log("Hello\nWorld!");  // New Line
console.log("Path: C:\\Users\\Abhishek");  // Backslash
