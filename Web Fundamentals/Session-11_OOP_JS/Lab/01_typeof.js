// Example 1: typeof with a number
const num = 42;
console.log(typeof num); // Output: "number"

// Example 2: typeof with a string
const str = "Hello, world!";
console.log(typeof str); // Output: "string"

// Example 3: typeof with a boolean
const bool = true;
console.log(typeof bool); // Output: "boolean"

// Example 7: typeof with null
const n = null;
console.log(typeof n); // Output: "object" (Note: this is a known bug in JavaScript)

// Example 8: typeof with undefined
let x;
console.log(typeof x); // Output: "undefined"

// Example 4: typeof with an object
const obj = {};
console.log(typeof obj); // Output: "object"

// Example 5: typeof with an array
const arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"

// Example 6: typeof with a function
function myFunc() {
  console.log("Hello, world!");
}
console.log(typeof myFunc); // Output: "function"
