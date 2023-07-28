// Define an object with some properties
const myObject = {
  name: "John",
  age: 30,
  job: "Developer",
};

// Define a new property with certain attributes using defineProperty method
Object.defineProperty(myObject, "salary", {
  value: 50000, // Value of the property
  writable: false, // Whether the property can be changed or not
  enumerable: false, // Whether the property should be included when iterating over the object's keys
});

// Define a prototype object with a property
const myProto = {
  hobby: "Reading",
};

// Create a new object with the specified prototype object and properties
const myObject2 = Object.create(myProto, {
  name: {
    value: "Alice", // Value of the property
    enumerable: true, // Whether the property should be included when iterating over the object's keys
  },
  age: {
    value: 25, // Value of the property
    enumerable: true, // Whether the property should be included when iterating over the object's keys
  },
});

// Prevent any new properties from being added to an object and marks all existing properties as non-configurable
Object.seal(myObject2);

// Merge the properties of two or more objects into a target object
const mergedObject = Object.assign({}, myObject, myObject2);

// Returns an array of a given object's own enumerable property names
console.log(Object.keys(myObject)); // Output: ["name", "age", "job"]

// Returns an array of a given object's own enumerable property values
console.log(Object.values(myObject)); // Output: ["John", 30, "Developer"]

// Returns an array of a given object's own enumerable property [key, value] pairs
console.log(Object.entries(myObject)); // Output: [["name", "John"], ["age", 30], ["job", "Developer"]]

// Returns an array of all properties (enumerable or not) found directly upon a given object
console.log(Object.getOwnPropertyNames(myObject)); // Output: ["name", "age", "job", "salary"]

// Returns an object containing all own property descriptors of a given object
console.log(Object.getOwnPropertyDescriptors(myObject));
/* Output:
  {
    name: {value: "John", writable: true, enumerable: true, configurable: true},
    age: {value: 30, writable: true, enumerable: true, configurable: true},
    job: {value: "Developer", writable: true, enumerable: true, configurable: true},
    salary: {value: 50000, writable: false, enumerable: false, configurable: false}
  }
  */

// Prevents any changes to an object and its properties
Object.freeze(myObject);

// Attempt to change a frozen property (no change made)
myObject.name = "Peter";

// Access the frozen object (no changes made)
console.log(myObject.name); // Output: "John"

// Display the objects
console.log(myObject); // Output: {name: "John", age: 30, job: "Developer", salary: 50000}
console.log(myObject2); // Output: {name: "Alice", age: 25, hobby: "Reading"}
console.log(mergedObject);
/* Output:
  {
    name: "Alice",
    age: 25,
    job: "Developer",
    salary: 50000,
    hobby: "Reading"
  }
  */
