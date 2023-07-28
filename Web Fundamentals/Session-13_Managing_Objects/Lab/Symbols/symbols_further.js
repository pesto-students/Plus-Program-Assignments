// Create a new symbol
const sym1 = Symbol();
const sym2 = Symbol();

// Symbols are unique
console.log(sym1 === sym2); // false

// Create a symbol with a description
const sym3 = Symbol("foo");

// Use a symbol as a property key on an object
const obj = {
  [sym1]: "sym 1 value",
  [sym2]: "sym 2 value",
};

console.log(obj[sym1]);
// Create a symbol property on an object
const obj2 = {};
Object.defineProperty(obj2, sym1, {
  value: "value",
});

// Get all symbol properties on an object
const symbols = Object.getOwnPropertySymbols(obj);
console.log(symbols); // [Symbol(), Symbol()]

// Use symbols for private properties
const privateProp = Symbol("private");
class MyClass {
  constructor() {
    this[privateProp] = "secret";
  }

  getPrivate() {
    return this[privateProp];
  }
}

const myObj = new MyClass();
console.log(myObj.privateProp); // undefined
console.log(myObj.getPrivate()); // 'secret'
