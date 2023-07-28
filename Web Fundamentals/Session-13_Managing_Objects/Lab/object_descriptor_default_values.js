// Create an object with a property
const obj = {
  name: "John",
};

// Each property descriptor has these properties
// configurable: true - determines whether the property can be deleted or whether its descriptor can be modified.
// enumerable: true -determines whether the property will be included in for...in loops or Object.keys() methods.
// writable: true -This property determines whether the value of the property can be changed.

// Check the descriptor properties of the 'name' property
const nameDescriptor = Object.getOwnPropertyDescriptor(obj, "name");
console.log(nameDescriptor.value); // John
console.log(nameDescriptor.configurable); // true
console.log(nameDescriptor.enumerable); // true
console.log(nameDescriptor.writable); // true

// Define a property without specifying any descriptor properties
Object.defineProperty(obj, "age", {});

const ageDescriptor = Object.getOwnPropertyDescriptor(obj, "age");
console.log(ageDescriptor.value); // undefined
console.log(ageDescriptor.configurable); // false
console.log(ageDescriptor.enumerable); // false
console.log(ageDescriptor.writable); // false
