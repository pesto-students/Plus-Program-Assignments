var x = 5;
console.log(x); // Output: 5
console.log(window.x); // Output: 5 (since x is added as a property of the global object)

let x = 5;
console.log(x); // Output: 5
console.log(window.x); // Output: undefined (since x is not added as a property of the global object)

function foo() {
  x = 5;
}

foo();
console.log(x); // Output: 5
console.log(window.x); // Output: 5 (since x is added as a property of the global object)
