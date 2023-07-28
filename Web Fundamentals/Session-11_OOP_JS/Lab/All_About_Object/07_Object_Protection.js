// By Setting writable to false
const myObject = {};
Object.defineProperty(myObject, "name", {
  value: "John",
  writable: false,
});
myObject.name = "Peter"; // This will not change the value of "name" property

// Object.freeze(myObject);
// const myObject = {
//   name: "John",
// };
// Object.freeze(myObject);
// myObject.name = "Peter"; // This will not change the value of "name" property

// Object.seal(myObject);
// const myObject = {
//   name: "John",
// };
// Object.seal(myObject);
// myObject.age = 30; // This will not add a new "age" property
// myObject.name = "Peter"; // This will change the value of "name" property
