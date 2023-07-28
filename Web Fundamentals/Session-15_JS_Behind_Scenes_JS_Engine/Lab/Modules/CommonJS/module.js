// module.js
const PI = 3.14159;

function add(a, b) {
  return a + b;
}

module.exports = {
  PI,
  add,
};

// app.js
const { PI, add } = require("./module.js");

console.log(PI); // output: 3.14159
console.log(add(2, 3)); // output: 5
