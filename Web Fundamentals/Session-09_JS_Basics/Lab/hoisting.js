// Variables declared with var are hoisted to the top of their global or local scope, which makes them accessible before the line they are declared.
console.log(number); // undefined
var number = 50;
console.log(number); // 50

// Variables declared with let are hoisted to the top of their global, local, or block scope, but their hoisting is a little different from the one with var.
console.log(number);
// ReferenceError: Cannot access 'number' before initialization
let number = 50;

// Variables declared with const, just like let, are hoisted to the top of their global, local, or block scope – but without a default initialization.
console.log(number);
// ReferenceError: Cannot access 'number' before initialization

const number = 50;
