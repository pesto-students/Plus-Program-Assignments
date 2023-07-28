// Define an object "person" with properties "name" and "age"
const person = {
  name: "John",
  age: 30,

  // Add a Symbol.toStringTag property to customize the toString method
  [Symbol.toStringTag]: "Person",
};

// Call the toString method on "person" object
console.log(person.toString()); // "[object Person]"
