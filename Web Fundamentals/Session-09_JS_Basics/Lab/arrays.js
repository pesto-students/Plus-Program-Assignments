// create an array using array literal syntax
let fruits = ["apple", "banana", "orange", "grape"];

// access array elements
console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "orange"

// add element to end of array
fruits.push("strawberry");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "strawberry"]

// remove last element from array
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// add element to beginning of array
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange", "grape"]

// remove first element from array
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]
