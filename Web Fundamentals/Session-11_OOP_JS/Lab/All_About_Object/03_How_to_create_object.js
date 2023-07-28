// 01: Creating an object using object literals
const myObject = {
  property1: "value1",
  property2: "value2",
  method1: function () {
    console.log("Hello, World!");
  },
};

// 02: Creating an object using a constructor function
function MyObjectUsingConstructor(property1, property2) {
  this.property1 = property1;
  this.property2 = property2;
  this.method1 = function () {
    console.log("Hello, World!");
  };
}

const myObjectctor = new MyObjectUsingConstructor("value1", "value2");

// 03: Creating an object using Object.create()
// One important thing to keep in mind is that
// the Object.create() method does not create a constructor function.
// This means that you cannot use the new keyword
const myPrototype = {
  property1: "value1",
  method1: function () {
    console.log("Hello, World!");
  },
};

const myTestObject = Object.create(myPrototype);

// Advantages of Object.create()

// Here are some advantages of using Object.create():

//     Inheritance: Object.create() is often used to implement inheritance in JavaScript. You can create a new object that inherits from an existing object and add or override properties and methods as needed.

//     Flexible Prototyping: Object.create() allows you to create objects with arbitrary prototypes. You can use any object as a prototype, which means you can create complex object hierarchies with ease.

//     Performance: Creating objects using Object.create() is faster than creating objects with constructors, especially if you need to create many instances of the same object.

// Disadvantages of Object.create()

// Here are some disadvantages of using Object.create():

//     Prototype pollution: If the prototype object is modified, those changes will be reflected in all objects that inherit from it. This can cause unexpected behavior and is sometimes referred to as "prototype pollution".

//     Limited browser support: Object.create() was introduced in ECMAScript 5 and is not supported in older browsers such as Internet Explorer 8 and below.
