// Value type example
let a = 10;
let b = a;
a = 20;
console.log(b); // Output: 10

// Reference type example
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]

// creating an object with multiple properties, each of which is a reference type.
const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
  hobbies: ["reading", "hiking", "cooking"],
};

// Changing properties of the object
person.age = 35;
person.address.city = "Los Angeles";
person.hobbies.push("painting");

console.log(person);
