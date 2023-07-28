// Pass by value
a = 10;

// Function does not modify primitive passed by value
function someFunc(b) {
  b = 50;
  console.log(b); // Output: 50
}
someFunc(a);

// Primitive value is not modified outside of function
console.log(a); // Output: 10

//Pass by reference
let person = {
  firstName: "Mohammad",
  lastName: "Imran",
};

// Function modifies object passed by reference
function doSomething(obj) {
  obj.firstName = "MOHD";
}

doSomething(person);
// Object property value is modified outside of function
console.log(person.firstName); // Output: MOHD

// Equality of reference types
let obj1 = {
  firstName: "Allie",
  lastName: "Grater",
};

let obj2 = obj1;
// obj1 & obj2 contains the same reference & value
console.log(obj1 == obj2); //True
console.log(obj1 === obj2); //True

let obj3 = {
  firstName: "Allie",
  lastName: "Grater",
};

// obj1 & obj3 contains the different reference though they represent same data
console.log(obj1 == obj3); //False
console.log(obj1 === obj3); //False
