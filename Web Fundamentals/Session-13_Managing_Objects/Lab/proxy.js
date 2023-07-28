const person = {
  name: "John",
  age: 30,
};

const personProxy = new Proxy(person, {
  // We define two traps on the personProxy object using the get and set properties.
  // The get trap intercepts property reads on the personProxy object, and the set trap intercepts property writes.
  get: function (target, property) {
    console.log(`Getting ${property}`);
    return target[property];
  },

  set: function (target, property, value) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
  },
});

personProxy.age; // Output: "Getting age" followed by the value 30
personProxy.name = "Jane"; // Output: "Setting name to Jane"

console.log(person); // Output: { name: 'Jane', age: 30 }

// We can also add additional custom behavior to the proxy object.
const handler2 = {
  get: function (target, property) {
    if (property === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    }
    return target[property];
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

const proxy2 = new Proxy(person2, handler2);

// Now, when we access the fullName property on the proxy object, it returns the concatenated first and last name.
console.log(proxy2.fullName); // Output: "John Doe"
