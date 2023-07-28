// Declare a variable using var
var myVariable = "Hello";
console.log(myVariable); // Output: Hello

// Reassign the value of myVariable using var
var myVariable = "Goodbye";
console.log(myVariable); // Output: Goodbye

// Declare a variable using let
let myOtherVariable = "Hello";
console.log(myOtherVariable); // Output: Hello

// Reassign the value of myOtherVariable using let
myOtherVariable = "Goodbye";
console.log(myOtherVariable); // Output: Goodbye

// Declare a constant
const myConstant = "Hello";
console.log(myConstant); // Output: Hello

// Attempt to reassign the value of myConstant (will result in an error)
// myConstant = "Goodbye"; // Uncomment this line to see the error

// Declare a variable using var inside a function
function myFunction() {
  var myFunctionVariable = "Hello";
  console.log(myFunctionVariable); // Output: Hello
}
myFunction();
// Attempt to access myFunctionVariable outside the function (will result in undefined)
// console.log(myFunctionVariable); // Uncomment this line to see the undefined value
