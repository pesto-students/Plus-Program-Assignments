// create an object using object literal syntax
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  hobbies: ["reading", "traveling", "music"],
  sayHello: function () {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
};

// access object properties
console.log(person.firstName); // Output: "John"
console.log(person.address.city); // Output: "Anytown"
console.log(person.hobbies[1]); // Output: "traveling"

// call object method
person.sayHello(); // Output: "Hello, my name is John Doe"
