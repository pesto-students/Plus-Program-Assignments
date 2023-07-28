const person = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
};

console.log(person.address?.zip); // undefined
