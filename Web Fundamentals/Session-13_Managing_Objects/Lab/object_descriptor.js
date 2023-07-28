// Create an object with a property
const obj = {
  name: "John",
};
// Define the initial property descriptor with configurable, enumerable, and writable flags
const descriptor = {
  value: 25,
  configurable: true, //determines whether the property can be deleted or whether its descriptor can be modified.
  enumerable: true, //determines whether the property will be included in for...in loops or Object.keys() methods.
  writable: true, //This property determines whether the value of the property can be changed.
};

// Set the property descriptor for the object's 'age' property
Object.defineProperty(obj, "age", descriptor);

// Attempt to delete the 'age' property
delete obj.age;
// Log the object before any property descriptor changes
console.log(obj); // { name: 'John' }

// Change the 'configurable' flag to false by defining a new descriptor object
Object.defineProperty(obj, "age", { value: 25, configurable: true });

// Attempt to delete the 'age' property
delete obj.age;

// Log the object after 'configurable' flag is changed
console.log(obj); // { name: 'John', age: 25 }

// Change the 'enumerable' flag to false by defining a new descriptor object
Object.defineProperty(obj, "age", { value: 25, enumerable: false });

// Log the object after 'enumerable' flag is changed
console.log(obj); // { name: 'John' }

// Attempt to reassign the value of the 'age' property
obj.age = 30;

// Log the object after 'writable' flag is changed
console.log(obj); // { name: 'John', age: 25 }
