// Syntax Sample: function.call(thisArg, arg1, arg2, ...)

// Syntax Parameters:

//     thisArg: The value of 'this' inside the function.
//     arg1, arg2, ...: Arguments to be passed to the function.

// Define an object with a 'name' property
const person = {
  name: "John Doe",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

// Define another object to use as the 'this' value
const otherPerson = {
  name: "Jane Doe",
};

// Call the 'greet' method on the 'person' object with 'person' as the 'this' value
person.greet(); // Output: Hello, my name is John Doe

// Call the 'greet' method on the 'person' object with 'otherPerson' as the 'this' value using 'call()'
person.greet.call(otherPerson); // Output: Hello, my name is Jane Doe

var obj = { num: 2 };

var add = function (a, b) {
  return this.num + a + b;
};

var result = add.call(obj, 3, 4);
console.log(result); // Output: 9
