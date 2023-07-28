const person = {
  name: "John",
  age: 30,
};

//The problem naming collision
console.log(person.toString()); // [object Object]

//We have to create method to avoid naming collision
const personOverride = {
  name: "John",
  age: 30,
  toString: function () {
    return `${this.name}, ${this.age}`;
  },
};

console.log(personOverride.toString()); // "John, 30"
console.log(Object.prototype.toString.call(person)); // "[object Object]"
// But what if we want in-built toString method?? It's so confusing to call toString on demand with name collision
